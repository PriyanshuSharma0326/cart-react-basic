import { ShoppingCart } from 'phosphor-react';
import React from 'react';

export default function Navbar() {
    return (
        <div className='Navbar w-full h-20 bg-[#131313] flex justify-end items-center'>
            <div className='Links mr-[20px] sm:mr-[30px] lg:mr-[50px] flex items-center'>
                <ShoppingCart className='text-white ml-5 text-lg no-underline' size={32} />
            </div>
        </div>
    );
}
