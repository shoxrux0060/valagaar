import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'components/ProgressiveImage';
import Money from 'components/Money';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'product';

export default class Product extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    packageName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imagePlaceholder: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  renderImage() {
    const { image, imagePlaceholder } = this.props;
    const src = `${image}`;

    return <ProgressiveImage src={src} placeholder={imagePlaceholder} fit />;
  }

  render() {
    const { name, price, description, packageName, children, currency } = this.props;

    return (
      <div className={bem({ block })}>
        <div className={bem({ block, elem: 'image' })}>{this.renderImage()}</div>
        <div className={bem({ block, elem: 'info' })}>
          <div className={bem({ block, elem: 'price-info' })}>
            <div className={bem({ block, elem: 'package' })}>{packageName}</div>
            <div className={bem({ block, elem: 'price' })}>
              <Money value={price} currency={currency} />
            </div>
          </div>
          <div className={bem({ block, elem: 'name' })}>{name}</div>
          <div className={bem({ block, elem: 'description' })}>{description}</div>
          <div className={bem({ block, elem: 'actions' })}>{children}</div>
        </div>
      </div>
    );
  }
}
