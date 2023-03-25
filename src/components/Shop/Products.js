import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: '1',
    price: 7,
    title: "Супер-Товар 1",
    description: "Благодаря своему высокому качеству, этот товар 1 прослужит вам очень долго.",
  },
  {
    id: '2',
    price: 11,
    title: "Супер-Товар 2",
    description: "Благодаря своему высокому качеству, этот товар 2 прослужит вам очень долго.",
  },
  {
    id: '3',
    price: 12,
    title: "Супер-Товар 3",
    description: "Благодаря своему высокому качеству, этот товар 3 прослужит вам очень долго.",
  },

]

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>В нашем магазине товары самого высокого качества</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => {
          return <ProductItem key={product.id} id={product.id} price={product.price} title={product.title} description={product.description} />
        })}
      </ul>
    </section>
  );
};

export default Products;
