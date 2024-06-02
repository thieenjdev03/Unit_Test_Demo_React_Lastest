import React, { useEffect, useState } from 'react';
import { calculateTotalOrderPrice } from '../../utils/utils';
import Cart from './Cart'

function Product({ product, onAddToCart }) {
  return (
    <div className="product border_solid_black_1px">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
function getTotalPrice(cart) {
  return cart.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
}
function getTotalQuantity(cart) {
  return cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
}


function ProductListComp() {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const logCart = () => {
    console.log('Cart:', cart);
    console.log(calculateTotalOrderPrice(cart))
  };

  const toggleCartModal = () => {
    setShowCartModal(prevState => !prevState);
  };
  const totalPrice = getTotalPrice(cart);
  const totalQuantity = getTotalQuantity(cart);
  // Giả sử products là một mảng các sản phẩm từ JSON
  const products = [
    { id: 1, name: 'Product 1', price: 100, rating: 4.5, description: 'Description of product 1' },
    { id: 2, name: 'Product 2', price: 200, rating: 4.2, description: 'Description of product 2' },
    { id: 3, name: 'Product 3', price: 150, rating: 4.8, description: 'Description of product 3' }
  ];

  const handleAddToCart = (selectedProduct) => {
    const existingProductIndex = cart.findIndex(product => product.id === selectedProduct.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      const updatedProduct = { ...selectedProduct, quantity: 1 };
      setCart(prevCart => [...prevCart, updatedProduct]);
    }
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list flex-r">
        {products.map((product, index) => (
          <Product key={index} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: {totalPrice}</p>
      </div>
      <div className=''>
        <button className='mt-10 mr-4' onClick={logCart}>Log Cart</button>
        <button className='mt-10' onClick={toggleCartModal}>
          {showCartModal == false ? <div>Mở Giỏ Hàng</div> : <div>Đóng giỏ hàng</div>}
        </button>
      </div>
      {showCartModal && <Cart totalQuantity={totalQuantity} totalPrice={totalPrice} cart={cart} onClose={toggleCartModal} />}
    </div>
  );
}

export default ProductListComp;
