import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

export default class ColumnBackButton extends React.PureComponent {

  static contextTypes = {
    router: PropTypes.object,
  };

  handleClick = (e) => {
    if (!e.key || e.key === 'Enter') {
      if (window.history && window.history.length === 1) this.context.router.history.push('/');
      else this.context.router.history.goBack();
    }
  }

  render () {
    return (
      <div role='button' tabIndex='0' onClick={this.handleClick} onKeyDown={this.handleClick} className='column-back-button'>
        <i className='fa fa-fw fa-chevron-left column-back-button__icon' />
        <FormattedMessage id='column_back_button.label' defaultMessage='Back' />
      </div>
    );
  }

}
