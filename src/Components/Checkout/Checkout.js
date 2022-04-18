import React from 'react';
import "./Checkout.css";

const Checkout = () => {
    return (
        <div className='checkout-container'>
            <h2>This is checkout</h2>
            <div className='form-container'>
                <h2>Login</h2>
                <div class="form-style">
                    <h1>Contact Us</h1>
                    <form className='form'>
                        <input className='input-text' type="text" name="text" placeholder="Name" />
                        <input className='input-email' type="email" name="email" placeholder="Email Address" />
                        <input className='login-button' type="submit" value="login" />
                        <button>Email sign in</button>
                        <button>Google sign in</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Checkout;