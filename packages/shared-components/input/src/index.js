import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const Label = styled('label')`
  margin-right: 10px;
  font-weight: bold;
  width: ${({ labelWidth = 100 }) => labelWidth}px;
`;

const NativeInput = styled.input`
  width: 100%;
`;

export const Input = ({ label, id, labelWidth, ...rest }) => (
  <Wrapper>
    {label && (
      <Label labelWidth={labelWidth} htmlFor={id}>
        {label}:
      </Label>
    )}
    <NativeInput id={id} {...rest} />
  </Wrapper>
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  labelWidth: PropTypes.number,
};
