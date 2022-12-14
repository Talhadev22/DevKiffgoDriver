// @flow
import React from 'react';
import PropTypes from 'prop-types';
import ImageLoad from 'react-native-image-placeholder';
import {Colors} from '../../theme';

export default class Image extends React.PureComponent {
  static propTypes = {
    // placeholderSource
    source: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
      .isRequired,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    const {...rest} = this.props;

    return <ImageLoad backgroundColor={'rgba(0,0,0,0.0)'} {...rest} />;
  }
}
