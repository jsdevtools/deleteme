import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Input } from '@jsdevtools/input';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('with label', () => <Input id="test" label={text('Label', 'Username')} />)
  .add('with label and type', () => (
    <Input id="test" label={text('Label', 'Username')} type={text('Type', 'password')} />
  ));
