import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'nav-item';

export default class NavItem extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool
  };

  getBemMods() {
    return {
      active: !!this.props.active
    };
  }

  render() {
    const { link, icon, children } = this.props;

    return (
      <div className={bem({ block, mods: this.getBemMods() })}>
        <Link to={link}>
          <div className={bem({ block, elem: 'content' })}>
            <div className={bem({ block, elem: 'icon' })}>
              <Icon name={icon} />
            </div>
            <div className={bem({ block, elem: 'text' })}>{children}</div>
          </div>
        </Link>
      </div>
    );
  }
}
