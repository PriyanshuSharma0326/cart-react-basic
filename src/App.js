import React from 'react';
import Navbar from './components/Navbar';
import { ShopContextProvider } from './context/ShopContext';
import Cart from './pages/cart/Cart';

function App() {
    return (
        <div className='app'>
            <ShopContextProvider>
                <Navbar />
                <Cart />
            </ShopContextProvider>
        </div>
    );
}

export default App;
