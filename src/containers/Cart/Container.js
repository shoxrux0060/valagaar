import React from 'react';
import Cart from 'components/Cart';
import Button from 'components/Button';
import CartList from 'components/CartList';
import CartItem from 'components/CartItem';
import Carttotal from 'components/Carttotal';
import Money from 'components/Money';
import Box from 'components/Box';
import { FormattedMessage } from 'react-intl';

export default class ShopingCart extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.items !== nextProps.items || this.props.openCart !== nextProps.openCart;
  }

  handleClickBuy = id => {
    return this.props.onClickBuy(id);
  };

  renderItem = (item, index) => {
    const id = item.get('id');
    const { currency } = this.props;

    return (
      <CartItem
        id={id}
        key={id}
        productName={item.get('productName')}
        productPrice={item.get('productPrice')}
        currency={currency}
        productImage={item.get('productImage')}
        count={item.get('count')}
        orderedQuantity={item.get('orderedQuantity')}
        onChangeItemCount={this.props.onChangeItemCount}
        onClickRemove={this.props.onClickRemove}
      />
    );
  };

  render() {
    let { items, total, openCart, currency } = this.props;

    if (items.length === 0) {
      return null;
    }

    return (
      <Cart openCart={openCart} onClickClose={this.props.onClickClose}>
        <CartList>{items.map(this.renderItem)}</CartList>
        <Carttotal>
          <Money value={total} currency={currency} />
        </Carttotal>
        <Box top1>
          <Button raised stretch onClick={this.props.onClickOrder}>
            <FormattedMessage id="checkoutCart" />
          </Button>
        </Box>
      </Cart>
    );
  }
}
