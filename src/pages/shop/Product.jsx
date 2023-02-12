import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export default function Product({ id, productName, price, productImage }) {
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className='Product 
        rounded-[15px] w-[300px] h-[350px] m-[100px] flex flex-col justify-center items-center'>
            <img className='w-[250px] hover:cursor-pointer' src={productImage} alt={productName} />

            <div className='Description 
            text-center mt-4 font-semibold'>
                <p className='text-[20px]'>{productName}</p>
                <p className='mt-2 text-[16px]'>₹{price}</p>

                <button className='AddToCart 
                mt-4 text-[16px] bg-transparent border-[2px] border-solid border-[#131313] min-w-[100px] px-[10px] py-[5px] rounded-[15px] hover:bg-[#131313] hover:text-white hover:cursor-pointer' 
                onClick={() => addToCart(id)}>
                    Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
                </button>
            </div>
        </div>
    );
}
