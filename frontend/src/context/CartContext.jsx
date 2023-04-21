import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const CartContext = createContext({
  items: [],
  getProductData: () => {},
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  deleteAllFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const { data } = useFetch('catalogue');
  const catalogueItems = data.results;

  const getProductData = (id) => {
    let productData = catalogueItems.find((item) => item.id === id);
    if (productData === undefined) console.log('Product data does not exist for ID: ' + id);

    return productData;
  };

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) return 0;

    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
      );
    }
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product))
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  };

  const deleteAllFromCart = () => setCartProducts([]);

  const getTotalCost = () => {
    let totalCost = 0;

    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;

      return null;
    });

    return totalCost;
  };

  const contextValue = {
    items: cartProducts,
    getProductData,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    deleteAllFromCart,
    getTotalCost,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
