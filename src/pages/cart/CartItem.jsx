import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

export default function CartItem({ id, productName, price, productImage }) {
    const { addToCart, removeFromCart, updateCartItemCount, cartItems } = useContext(ShopContext);

    return (
        <div className='CartItem w-4/5 sm:w-7/10 lg:3/5 mx-auto mb-[25px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg'>
            <div className='ItemContainer flex items-center'>
                <img className='m-4 w-[80px]' src={productImage} alt={productName} />

                <div className='Description font-semibold flex items-center w-full'>
                    <p className='ml-4 text-[20px]'>{productName}</p>
                    <p className='ml-auto mr-4 text-[18px]'>₹{cartItems[id] * price}</p>
                </div>
            </div>
            <div className='AlterDiv flex pb-4'>
                <div className='AlterButtons mx-auto items-center'>
                    <button className='border-[2px] w-8 h-8 text-lg rounded-md border-[#131313]' onClick={() => removeFromCart(id)}>-</button>

                    <input className='w-12 text-center outline-none border-none' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />

                    <button className='border-[2px] w-8 h-8 text-lg rounded-md border-[#131313]' onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
}

