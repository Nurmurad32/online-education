import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    console.log(props.cart.img);
    const cart = props.cart;
    
    

    let total = 0;
    for(let i=0; i<cart.length; i++){
        const course = cart[i];
        total = total + course.price;
    }

    return (
        <div>
            <div className="cart-course">
                <h1 className="enroll">Course purchase</h1>
                <p >Enroll course:{cart.length}</p>
                <p >Total Price: ${total}</p>
                <button className="Purches-btn"><FontAwesomeIcon icon={faShoppingCart} /> Purchase course</button>
            </div>
            <div className="cart-img">
                <img src={cart.img} alt=""/>
            </div>
            
        </div>
    );
};

export default Cart;