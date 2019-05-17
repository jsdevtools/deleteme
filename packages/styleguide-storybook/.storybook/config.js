// import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme, configureReadme } from 'storybook-readme';
import PropTypes from 'prop-types';


// automatically import all files ending in *.stories.js
const req = require.context('../../shared-components/', true, /\.stories\.jsx?$/);
function loadStories() {
  addDecorator(addReadme);
  configureReadme({
    StoryPreview: ({ children }) => children,
    /*
    StoryPreview: function foobar({ children }) {
      foobar.propTypes = { children: PropTypes.element };
      return <React.Fragment>{children}</React.Fragment>;
    },
    */
  });  
  addDecorator(withKnobs);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
