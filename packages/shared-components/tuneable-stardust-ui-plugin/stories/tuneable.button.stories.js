import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import Tuneable from '@jsdevtools/tuneable-stardust-ui-plugin';
import { actions, StateContext } from '@jsdevtools/tuneable';
import Spacer from 'react-add-space';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from './shared-fa.js';

const DefaultButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Default:" />
      <br />
      <Tuneable.Button
        instance="button1a"
        content={() => (
          <>
            Change Content <FontAwesomeIcon icon="stroopwafel" />
          </>
        )}
        onClick={() => dispatch(actions.chg('button1a', { content: 'Kazaam!' }))}
      />
      <br />
      <Tuneable.Button content="onClick" onClick={() => console.log('clicked')} />
      <br />
      <Tuneable.Button
        instance="button1c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Change Theme Prop"
      />
      <br />
      <Tuneable.Button
        instance="button1d"
        onClick={() => dispatch(actions.chg('button1d', { children: 'Kazaam!' }))}
      >
        Change Content as Children <Spacer amount={8} />
        <FontAwesomeIcon icon="stroopwafel" />
      </Tuneable.Button>
      <br />
      <Tuneable.Button
        instance="button1e"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
      <br />
      <br />
      <Tuneable.Button
        instance="button1f"
        disabled
        content={() => (
          <>
            Change Content <FontAwesomeIcon icon="stroopwafel" />
          </>
        )}
        onClick={() => dispatch(actions.chg('button1a', { content: 'Kazaam!' }))}
      />
      <br />
      <Tuneable.Button
        instance="button1g"
        disabled
        content="onClick"
        onClick={() => console.log('clicked')}
      />
      <br />
      <Tuneable.Button
        instance="button1h"
        disabled
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Change Theme Prop"
      />
      <br />
      <Tuneable.Button
        instance="button1i"
        disabled
        onClick={() => dispatch(actions.chg('button1d', { children: 'Kazaam!' }))}
      >
        Change Content as Children <Spacer amount={8} />
        <FontAwesomeIcon icon="stroopwafel" />
      </Tuneable.Button>
      <br />
      <Tuneable.Button
        instance="button1j"
        disabled
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
    </>
  );
};

const EmphasisButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Emphasis:" />
      <br />
      <Tuneable.Button
        primary
        instance="button2a"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Primary"
      />
      <Tuneable.Button
        secondary
        instance="button2b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
      <br />
      <br />
      <Tuneable.Button
        primary
        disabled
        instance="button2c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Primary"
      />
      <Tuneable.Button
        secondary
        disabled
        instance="button2d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
    </>
  );
};

const IconButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Icon:" />
      <br />
      <Tuneable.Button
        primary
        icon="fas calendar"
        instance="button3a"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        secondary
        icon="chat"
        instance="button3b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <br />
      <Tuneable.Button
        primary
        disabled
        icon="fas calendar"
        instance="button3c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        secondary
        disabled
        icon="chat"
        instance="button3d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </>
  );
};

const IconOnlyButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Icon Only:" />
      <br />
      <Tuneable.Button
        primary
        icon="download"
        iconOnly
        instance="button4a"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        secondary
        icon="email"
        iconOnly
        instance="button4b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <br />
      <Tuneable.Button
        primary
        disabled
        icon="download"
        iconOnly
        instance="button4c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        secondary
        disabled
        icon="email"
        iconOnly
        instance="button4d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </>
  );
};

const IconAndContentButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Icon and Content:" />
      <br />
      <Tuneable.Button
        primary
        icon="eye"
        iconPosition="before"
        instance="button5a"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me before"
      />
      <Tuneable.Button
        primary
        icon="triangle-down"
        iconPosition="after"
        instance="button5b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me after"
      />
      <br />
      <Tuneable.Button
        secondary
        icon="flag"
        iconPosition="before"
        instance="button5c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me before"
      />
      <Tuneable.Button
        secondary
        icon="leave"
        iconPosition="after"
        instance="button5d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me after"
      />
      <br />
      <br />
      <Tuneable.Button
        primary
        disabled
        icon="eye"
        iconPosition="before"
        instance="button5e"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me before"
      />
      <Tuneable.Button
        primary
        disabled
        icon="triangle-down"
        iconPosition="after"
        instance="button5f"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me after"
      />
      <br />
      <Tuneable.Button
        secondary
        disabled
        icon="flag"
        iconPosition="before"
        instance="button5g"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me before"
      />
      <Tuneable.Button
        secondary
        disabled
        icon="leave"
        iconPosition="after"
        instance="button5h"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me after"
      />
    </>
  );
};

const FluidButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Fluid:" />
      <br />
      <Tuneable.Button
        instance="button6a"
        fluid
        primary
        icon="like"
        iconPosition="before"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Fits to container"
      />
      <br />
      <Tuneable.Button
        instance="button6b"
        fluid
        secondary
        icon="mic"
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
      <br />
      <br />
      <Tuneable.Button
        instance="button6c"
        disabled
        fluid
        primary
        icon="like"
        iconPosition="before"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Fits to container"
      />
      <br />
      <Tuneable.Button
        instance="button6d"
        disabled
        fluid
        secondary
        icon="mic"
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
    </>
  );
};

const CircularButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Circular:" />
      <br />
      <Tuneable.Button
        instance="button7a"
        circular
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="C"
      />
      <Tuneable.Button
        instance="button7b"
        circular
        icon="more"
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Confusingly long"
      />
      <br />
      <br />
      <Tuneable.Button
        instance="button7c"
        disabled
        circular
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="C"
      />
      <Tuneable.Button
        instance="button7d"
        disabled
        circular
        icon="more"
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Confusingly long"
      />
    </>
  );
};

const CircularEmphasisButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Circular Emphasis:" />
      <br />
      <Tuneable.Button
        instance="button8a"
        circular
        primary
        icon="number-list"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        instance="button8b"
        circular
        secondary
        icon="play"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <br />
      <Tuneable.Button
        instance="button8c"
        disabled
        circular
        primary
        icon="number-list"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        instance="button8d"
        disabled
        circular
        secondary
        icon="play"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </>
  );
};

const TextButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="sidebar:" />
      <br />
      <Tuneable.Button
        instance="button9a"
        text
        icon="quote"
        iconPosition="before"
        content="Default"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        instance="button9b"
        text
        primary
        content="Primary"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        instance="button9c"
        text
        secondary
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
      <Tuneable.Button
        instance="button9d"
        text
        icon="reply"
        iconOnly
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <br />
      <Tuneable.Button
        instance="button9e"
        disabled
        text
        icon="quote"
        iconPosition="before"
        content="Default"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        instance="button9f"
        disabled
        text
        primary
        content="Primary"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Tuneable.Button
        instance="button9g"
        disabled
        text
        secondary
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
      <Tuneable.Button
        instance="button9h"
        disabled
        text
        icon="reply"
        iconOnly
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </>
  );
};

const GroupButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Group:" />
      <br />
      <Tuneable.ButtonGroup
        instance="button10a"
        buttons={[
          {
            key: 'search',
            icon: 'search',
            iconOnly: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teams' })),
          },
          {
            key: 'send',
            icon: 'send',
            iconOnly: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'settings',
            icon: 'settings',
            iconOnly: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <Tuneable.ButtonGroup
        instance="button10b"
        buttons={[
          {
            key: 'search',
            icon: 'search',
            iconOnly: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teams' })),
          },
          {
            key: 'send',
            icon: 'send',
            iconOnly: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'settings',
            icon: 'settings',
            iconOnly: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </>
  );
};

const CircularGroupButtons = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Circular Group:" />
      <br />
      <Tuneable.ButtonGroup
        instance="button11a"
        circular
        buttons={[
          {
            key: 'star',
            icon: 'star',
            primary: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'sticker',
            icon: 'sticker',
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'strike',
            icon: 'strike',
            primary: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <Tuneable.ButtonGroup
        instance="button11b"
        circular
        buttons={[
          {
            key: 'star',
            icon: 'star',
            primary: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'sticker',
            icon: 'sticker',
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'strike',
            icon: 'strike',
            primary: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </>
  );
};
storiesOf('Tuneable/Buttons', module)
  .addDecorator(ThemeProvider)
  .addDecorator(GlobalStateDecorator)
  .add('Default', () => <DefaultButtons />, { readme: { sidebar: 'Default Buttons.' } })
  .add('Emphasis', () => <EmphasisButtons />, { readme: { sidebar: 'Emphasis Buttons' } })
  .add('Icon', () => <IconButtons />, { readme: { sidebar: 'Icon Buttons' } })
  .add('Icon Only', () => <IconOnlyButtons />, { readme: { sidebar: 'Icon Only Buttons' } })
  .add('Icon and Content', () => <IconAndContentButtons />, {
    readme: { sidebar: 'Icon and Content Buttons' },
  })
  .add('Fluid', () => <FluidButtons />, { readme: { sidebar: 'Fluid Buttons' } })
  .add('Circular', () => <CircularButtons />, { readme: { sidebar: 'Circular Buttons' } })
  .add('Circular Emphasis', () => <CircularEmphasisButtons />, {
    readme: { sidebar: 'Circular Emphasis Buttons' },
  })
  .add('Text', () => <TextButtons />, { readme: { sidebar: 'Text Buttons' } })
  .add('Group', () => <GroupButtons />, { readme: { sidebar: 'Group Buttons' } })
  .add('Circular Group', () => <CircularGroupButtons />, { readme: { sidebar: 'Circular Group Buttons' } });
