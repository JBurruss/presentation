import React from 'react';
import Cart from '../../containers/Cart';
import './Checkout.css';


const Home = () => (
    <div className="container">
        <div className="row">            
            <div className="col-md-4">
                <Cart />
            </div>
        </div>
    </div>
);

export default Home;
