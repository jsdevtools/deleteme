import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Input } from '@jsdevtools/input-ts';

storiesOf('TS Input', module)
  .add('TS default', () => <Input />)
  .add('TS with label', () => <Input id="test" label={text('Label', 'Username')} />)
  .add('TS with label and type', () => (
    <Input id="test" label={text('Label', 'Username')} type={text('Type', 'password')} />
  ));
