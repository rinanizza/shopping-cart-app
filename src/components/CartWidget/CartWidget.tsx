import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom';

import ShoppingCart from "../../assets/shopping-cart.svg";
//const shoppingCart = require ("../../assets/shopping-cart.svg");
import classes from './cart-widget.module.scss'

interface Props {
  productsCount: number
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
  const navigate = useNavigate()

  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <button className={classes.container} onClick={navigateToCart}>
      <span className={classes.productsCount}>{productsCount}</span>
      <img src={ShoppingCart} className={classes.ShoppingCar} alt="Go to Cart"/>
    </button>
  );
}