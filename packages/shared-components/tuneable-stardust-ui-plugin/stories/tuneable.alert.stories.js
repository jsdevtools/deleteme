import React, { useContext } from 'react';
import Tuneable from '@jsdevtools/tuneable-stardust-ui-plugin';
import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
import { actions, StateContext } from '@jsdevtools/tuneable';

const DefaultAlert = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Default" />
      <br />
      <br />
      <Tuneable.Alert content="This is a default alert" />
    </>
  );
};

const InfoAlert = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Info" />
      <br />
      <br />
      <Tuneable.Alert info content="This is an informational alert" />
    </>
  );
};

const DangerAlert = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Danger" />
      <br />
      <br />
      <Tuneable.Alert danger content="This is a danger alert" />
    </>
  );
};

const WarningAlert = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Warning" />
      <br />
      <br />
      <Tuneable.Alert warning content="This is a warning alert" />
    </>
  );
};

const SuccessAlert = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Success" />
      <br />
      <br />
      <Tuneable.Alert success content="This is a success alert" />
    </>
  );
};

const OofAlert = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="OOF" />
      <br />
      <br />
      <Tuneable.Alert
        variables={{
          oof: true,
        }}
        action={{
          icon: 'close',
        }}
        content="This is an OOF alert"
      />
    </>
  );
};

const ActionAlert = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Action" />
      <br />
      <br />
      <Tuneable.Alert
        instance="alert1"
        content="This is a closable alert"
        action={{
          icon: 'close',
          onClick: () => {
            dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }));
            dispatch(actions.chg('alert1', { open: false }));
          },
        }}
      />
    </>
  );
};

const AttachedAlert = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Attached" />
      <br />
      <br />
      <Tuneable.Alert attached content="This is a top attached alert" />
      <Tuneable.Input fluid placeholder="Name..." />
      <br /> <br />
      <Tuneable.Input fluid placeholder="Surname..." />
      <Tuneable.Alert attached="bottom" content="This is a bottom attached alert" />
    </>
  );
};

storiesOf('Tuneable/Alert', module)
  .addDecorator(ThemeProvider)
  .addDecorator(GlobalStateDecorator)
  .add('Default', () => <DefaultAlert />, { readme: { sidebar: 'Default alert.' } })
  .add('Info', () => <InfoAlert />, { readme: { sidebar: 'Info alert.' } })
  .add('Danger', () => <DangerAlert />, { readme: { sidebar: 'Danger alert.' } })
  .add('Warning', () => <WarningAlert />, { readme: { sidebar: 'Warning alert.' } })
  .add('Success', () => <SuccessAlert />, { readme: { sidebar: 'Success alert.' } })
  .add('OOF', () => <OofAlert />, { readme: { sidebar: 'OOF alert.' } })
  .add('Action', () => <ActionAlert />, { readme: { sidebar: 'Action alert.' } })
  .add('Attached', () => <AttachedAlert />, { readme: { sidebar: 'Attached alert.' } });
