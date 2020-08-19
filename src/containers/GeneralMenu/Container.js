import React from 'react';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';
import { FormattedMessage } from 'react-intl';

export default class GeneralMenu extends React.PureComponent {
  renderItem = item => {
    return (
      <NavItem
        icon={item.get('icon')}
        key={item.get('id')}
        link={item.get('link')}
        active={item.get('active')}
      >
        {item.get('token') == 'fula' ? (
          <div style={{ fontFamily: 'Algerian', fontSize: '38px', color: 'rgb(255,0,0)' }}>
            <FormattedMessage id={item.get('token')} />
          </div>
        ) : (
          <FormattedMessage id={item.get('token')} />
        )}
      </NavItem>
    );
  };

  render() {
    let { items, activeIndex } = this.props;

    return (
      <Nav size={items.size} activeIndex={activeIndex}>
        {items.map(this.renderItem)}
      </Nav>
    );
  }
}
