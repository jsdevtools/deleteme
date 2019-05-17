import React /*, { useContext }*/ from 'react';
import Tuneable from '@jsdevtools/tuneable-stardust-ui-plugin';
import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
// import { actions, StateContext } from '@jsdevtools/tuneable';

const petItems = [
  {
    key: 'irving',
    media: (
      <Tuneable.Image src="https://stardust-ui.github.io/react/public/images/avatar/small/matt.jpg" avatar />
    ),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'skyler',
    media: (
      <Tuneable.Image src="https://stardust-ui.github.io/react/public/images/avatar/small/steve.jpg" avatar />
    ),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application to input the multi-byte application!',
  },
  {
    key: 'dante',
    media: (
      <Tuneable.Image src="https://stardust-ui.github.io/react/public/images/avatar/small/nom.jpg" avatar />
    ),
    header: 'Dante Schneider',
    headerMedia: '5:22:40 PM',
    content: 'The GB pixel is down, navigate the virtual interface!',
  },
];

const peopleItems = [
  {
    key: 'irving',
    media: (
      <Tuneable.Image src="https://stardust-ui.github.io/react/public/images/avatar/small/matt.jpg" avatar />
    ),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'skyler',
    media: (
      <Tuneable.Image src="https://stardust-ui.github.io/react/public/images/avatar/small/steve.jpg" avatar />
    ),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application to input the multi-byte application!',
  },
  {
    key: 'dante',
    media: (
      <Tuneable.Image src="https://stardust-ui.github.io/react/public/images/avatar/small/nom.jpg" avatar />
    ),
    header: 'Dante Schneider',
    headerMedia: '5:22:40 PM',
    content: 'The GB pixel is down, navigate the virtual interface!',
  },
];

const panels = [
  {
    title: 'People',
    content: {
      key: 'people',
      content: <Tuneable.List selectable defaultSelectedIndex={0} items={peopleItems} />,
    },
  },
  {
    title: 'Pets',
    content: {
      key: 'pets',
      content: <Tuneable.List selectable defaultSelectedIndex={0} items={petItems} />,
    },
  },
];

const AccordianExample = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Accordion defaultActiveIndex={[0]} panels={panels} exclusive />;
    </>
  );
};

storiesOf('Tuneable/Accordian', module)
  .addDecorator(ThemeProvider)
  .addDecorator(GlobalStateDecorator)
  .add('Custom', () => <AccordianExample />, { readme: { sidebar: 'Custom Titles and Content.' } });
