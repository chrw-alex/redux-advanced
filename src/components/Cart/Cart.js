import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from 'react-redux';


const Cart = (props) => {
  const items = useSelector(state => state.cart.items)
  console.log(items)
  return (
    <Card className={styles.cart}>
      <h2>Мои Покупки</h2>
      <ul>
        {items.map(item => {
          return <CartItem item={{ key: item.id, id: item.id, title: item.title, quantity: item.quantity, price: item.price, total: item.totalPrice }} />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
