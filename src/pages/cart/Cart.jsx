import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { PRODUCTS } from '../../Products';
import CartItem from './CartItem';

export default function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const subtotal = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className='Cart'>
            <div className='mt-[50px] mb-[25px] text-center text-[40px]'>
                <h1>Your Cart</h1>
            </div>

            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem 
                            productName={product.productName} 
                            price={product.price} 
                            productImage={product.productImage} 
                            id={product.id} 
                            key={product.id}
                        />;
                    }
                    return null;
                })}
            </div>

            {subtotal > 0 ?
                (<div className='Checkout font-semibold w-4/5 sm:w-7/10 lg:3/5 mx-auto mb-[25px]'>
                    <p className='text-[20px] text-center'>Subtotal: ₹{subtotal}</p>

                    <div className='CartButtons text-center'>
                        <button className='
                        mt-4 text-[16px] text-white bg-[#131313] border-[2px] border-solid border-[#131313] min-w-[100px] px-[10px] py-[5px] rounded-md hover:bg-white hover:text-[#131313] hover:cursor-pointer'
                        onClick={() => navigate('/')}>
                        Continue Shopping</button>
                        
                        <button className='
                        mt-4 text-[16px] text-white bg-[#131313] border-[2px] border-solid border-[#131313] min-w-[100px] px-[10px] py-[5px] rounded-md hover:bg-white hover:text-[#131313] hover:cursor-pointer ml-8'>
                        Checkout</button>
                    </div>
                </div>) :
                <div className='mt-[50px] text-center text-red-500 font-bold text-[20px]'>
                    <h1>Your Cart is empty!</h1>
                </div>
            }
        </div>
    );
}
