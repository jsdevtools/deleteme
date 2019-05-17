import React from 'react';
import PropTypes from 'prop-types';
import * as SUIR from '@stardust-ui/react';
import { withGlobalState } from '@jsdevtools/tuneable';
// import { withGlobalState } from '../../tuneable/src';

class TuneableProvider extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme && this.props.onChange) {
      this.props.onChange(undefined, { value: this.props.theme });
    }
  }

  render() {
    const { theme, ...rest } = this.props;
    return (
      <SUIR.Provider theme={SUIR.themes[theme]} {...rest}>
        {this.props.children}
      </SUIR.Provider>
    );
  }
}

TuneableProvider.propTypes = {
  theme: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.element,
};

const ModAlert = props => {
  const { open, ...rest } = { open: true, ...props };
  return open === false ? null : <SUIR.Alert {...rest} />;
};

ModAlert.propTypes = {
  open: PropTypes.bool,
};

const Tuneable = {
  Provider: withGlobalState(TuneableProvider),
  Accordion: withGlobalState(SUIR.Accordion),
  Alert: withGlobalState(ModAlert),
  Animation: withGlobalState(SUIR.Animation),
  Avatar: withGlobalState(SUIR.Avatar),
  Button: withGlobalState(SUIR.Button),
  ButtonGroup: withGlobalState(SUIR.ButtonGroup),
  Chat: withGlobalState(SUIR.Chat),
  ChatItem: withGlobalState(SUIR.ChatItem),
  ChatMessage: withGlobalState(SUIR.ChatMessage),
  Dialog: withGlobalState(SUIR.Dialog),
  Divider: withGlobalState(SUIR.Divider),
  Dropdown: withGlobalState(SUIR.Dropdown),
  DropdownItem: withGlobalState(SUIR.DropdownItem),
  // DropdownLabel: withGlobalState(SUIR.DropdownLabel),
  DropdownSearchInput: withGlobalState(SUIR.DropdownSearchInput),
  FocusZoneMode: withGlobalState(SUIR.FocusZoneMode),
  Form: withGlobalState(SUIR.Form),
  FormField: withGlobalState(SUIR.FormField),
  Grid: withGlobalState(SUIR.Grid),
  Header: withGlobalState(SUIR.Header),
  HeaderDescription: withGlobalState(SUIR.HeaderDescription),
  Icon: withGlobalState(SUIR.Icon),
  Image: withGlobalState(SUIR.Image),
  Input: withGlobalState(SUIR.Input),
  ItemLayout: withGlobalState(SUIR.ItemLayout),
  Label: withGlobalState(SUIR.Label),
  Layout: withGlobalState(SUIR.Layout),
  List: withGlobalState(SUIR.List),
  ListItem: withGlobalState(SUIR.ListItem),
  Menu: withGlobalState(SUIR.Menu),
  MenuItem: withGlobalState(SUIR.MenuItem),
  Popup: withGlobalState(SUIR.Popup),
  PopupContent: withGlobalState(SUIR.PopupContent),
  Portal: withGlobalState(SUIR.Portal),
  ProviderConsumer: withGlobalState(SUIR.ProviderConsumer),
  RadioGroup: withGlobalState(SUIR.RadioGroup),
  RadioGroupItem: withGlobalState(SUIR.RadioGroupItem),
  Ref: withGlobalState(SUIR.Ref),
  Segment: withGlobalState(SUIR.Segment),
  Status: withGlobalState(SUIR.Status),
  Text: withGlobalState(SUIR.Text),
  Tree: withGlobalState(SUIR.Tree),
};

export default Tuneable;
