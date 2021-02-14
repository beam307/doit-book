import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles/src/withStyles';

class Table extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return (
      <table { ...css(styles.table) }>
        { children }
      </table>
    )
  }
}

Table.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node.isRequired
}

export default withStyles(() => ({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  }
}))(Table);
