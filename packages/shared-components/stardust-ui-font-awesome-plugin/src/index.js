import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const transformObjectToFontAwesomeIcon = ({ prefix, iconName, icon }) => {
  const createIcon = () => <FontAwesomeIcon icon={{ prefix, iconName, icon }} />;
  return {
    [`${prefix} ${iconName}`]: {
      isSvg: true,
      icon: createIcon,
    },
  };
};

const transformFontAwesomeLibraryToObjectList = ({ iconCollection }) => {
  return Object.keys(iconCollection.definitions).reduce((acc, prefix) => {
    return [
      ...acc,
      ...Object.keys(iconCollection.definitions[prefix]).reduce((acc2, iconName) => {
        return [...acc2, { prefix, iconName, icon: iconCollection.definitions[prefix][iconName] }];
      }, []),
    ];
  }, []);
};

const transformIconColectionToIconMap = ({
  iconCollection,
  transformIconCollectionToObjectList = transformFontAwesomeLibraryToObjectList,
  transformObjectToIcon = transformObjectToFontAwesomeIcon,
}) =>
  transformIconCollectionToObjectList({ iconCollection }).reduce(
    (acc, iconObject) => ({
      ...acc,
      ...transformObjectToIcon(iconObject),
    }),
    {},
  );

export { transformIconColectionToIconMap };
