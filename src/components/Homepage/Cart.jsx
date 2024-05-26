import React from 'react';

function Cart(props) {
    const cart = props.cart;
    const totalPrice = props.totalPrice;
    const totalQuantity = props.totalQuantity;
    return (
        <div className="cart bg-black text-white p-4 mt-2 rounded-sm w-32">
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            Tổng tiền : {totalPrice}
            <div>
                Tổng số lượng : {totalQuantity}
                <div></div>
            </div>
        </div>
    );
}

export default Cart;
