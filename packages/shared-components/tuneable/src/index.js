import React, { createContext, useContext, useReducer, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { action as actionAddon } from '@storybook/addon-actions';

const INIT = 'INIT';
const CLR = 'CLR';
const CHG = 'CHG';
const OVERLAY = 'OVERLAY';

const types = {
  INIT,
  CLR,
  CHG,
  OVERLAY,
};

const init = (instance, initProps) => ({
  type: types.INIT,
  payload: {
    instance,
    initProps,
  },
});

const clr = instance => ({
  type: types.CLR,
  payload: { instance },
});

const chg = (instance, newProps) => ({
  type: types.CHG,
  payload: { instance, newProps },
});

const overlay = (instance, newProps) => ({
  type: types.OVERLAY,
  payload: { instance, newProps },
});

const actions = {
  init,
  clr,
  chg,
  overlay,
};

const reducer1 = (state = {}, action) => {
  switch (action.type) {
    case types.INIT: {
      // console.log(`Reached ${action.type}`, action);
      const { instance, initProps } = action.payload;
      const retVal = state;
      Object.keys(initProps)
        .filter(propName => state[`${instance}/${propName}`] === undefined)
        .forEach(undefPropName => {
          retVal[`${instance}/${undefPropName}`] = initProps[undefPropName];
        });
      // console.log(`${action.type} retVal`, retVal);
      return retVal;
    }
    case types.CLR: {
      // console.log(`Reached ${action.type}, however ignoring.`, action);
      /* Use this if we want to revert to init props when unmounted and remounted.
      const { instance } = action.payload;
      const retVal = state;
      Object.keys(state)
        .filter(key => key.includes(`${instance}`))
        .forEach(match => {
          delete retVal[match];
        });
      console.log(`${action.type} retVal`, retVal);
      return retVal;
      */
      // console.log(`${action.type} retVal`, retVal);
      return state;
    }
    case types.CHG: {
      // console.log(`Reached ${action.type}`, action);
      return {
        ...state,
        ...Object.keys(action.payload.newProps).reduce(
          (acc, propName) => ({
            ...acc,
            [`${action.payload.instance}/${propName}`]: action.payload.newProps[propName],
          }),
          {},
        ),
      };
    }
    case types.OVERLAY: {
      console.log(`Reached ${action.type}, warning! not implemented.`, action);
      return state;
    }
    default:
      return state;
  }
};

const reducer2 = (state = {}, action) => {
  switch (action.type) {
    case types.INIT:
      return state;
    case types.CLR:
      return state;
    default:
      switch (action.type.slice(0, 2)) {
        case '@@':
          return state;
        default:
          actionAddon(action.type)(action.payload.instance, action.payload);
          return state;
      }
  }
};

const setOfReducersA = {
  [`nameOfReducer1`]: reducer1,
  [`nameOfReducer2`]: reducer2,
};

const rootReducer = (state = {}, action) =>
  // Object.values({ ...setOfReducersA, ...setOfReducersB, ...setOfReducersC }).reduce((acc, curr) => (
  Object.values({ ...setOfReducersA }).reduce((acc, curr) => curr(acc, action), state);

if (window.StateContext === undefined) {
  window.StateContext = createContext();
}
let StateContext = window.StateContext;

const GlobalStateProvider = props => (
  <StateContext.Provider value={useReducer(rootReducer, {})}>{props.children}</StateContext.Provider>
);

GlobalStateProvider.propTypes = {
  children: PropTypes.element,
};

const mapStateToProps = (state, instance) => {
  const retVal =
    instance === 'ignore'
      ? {}
      : Object.keys(state)
          .filter(key => key.includes(`${instance}`))
          .reduce(
            (acc, cur) => ({
              ...acc,
              [cur.split('/').slice(-1)[0]]: state[cur],
            }),
            {},
          );
  return retVal;
};

const withGlobalState = WrappedComponent => {
  const wrapComponent = props => {
    const { instance, ...rest } = props;
    const [, dispatch] = useContext(StateContext);
    useLayoutEffect(() => {
      if (instance) {
        dispatch(actions.init(instance, rest));
      }
      return () => {
        dispatch(actions.clr(props.instance));
      };
    }, []);
    const [state] = useContext(StateContext);
    const newProps = mapStateToProps(state, instance);
    return <WrappedComponent {...{ ...rest, ...newProps }} />;
  };
  wrapComponent.propTypes = { instance: PropTypes.string };
  return wrapComponent;
};

export { types, actions, StateContext, GlobalStateProvider, withGlobalState };
