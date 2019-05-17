import React from 'react';

import { storiesOf } from '@storybook/react';

import Float from '@jsdevtools/float';

storiesOf('Float/PlaceHolder', module)
  .add('Top Left', () => <Float placement="topLeft" zIndex={20} margin="10px" />, { notes: 'HI' })
  .add('Top Right', () => <Float placement="topRight" zIndex={20} margin="10px" />)
  .add('Top', () => <Float placement="top" zIndex={20} margin="10px" />);
