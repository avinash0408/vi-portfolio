import React from 'react';
import PropTypes from 'prop-types';
import {
  GitIcon,
  InstaIcon,
  LinkedInIcon,
  IconLogo,
  TwitterIcon,
  GoUrlIcon
} from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <GitIcon />;
    case 'Instagram':
      return <InstaIcon />;
    case 'Linkedin':
      return <LinkedInIcon />;
    case 'Logo':
      return <IconLogo />;
    case 'Twitter':
      return <TwitterIcon />;
    case 'GoUrl':
      return <GoUrlIcon />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
