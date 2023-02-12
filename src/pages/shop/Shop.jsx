import React from 'react';
import { PRODUCTS } from '../../Products';
import Product from './Product';

export default function Shop() {
    return (
        <div className='Shop'>
            <div className='ShopTitle
            mt-[50px] text-center text-[40px]'>
                <h1>E-Cart</h1>
            </div>
                
            <div className='Products 
            w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {PRODUCTS.map((product) => (
                    <Product 
                        productName={product.productName} 
                        price={product.price} 
                        productImage={product.productImage} 
                        id={product.id}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
}
