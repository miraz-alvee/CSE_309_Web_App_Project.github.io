import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';
import './Menu.css';

const Menu = () => {
    const [foods, setFoods] = useState([]);
    const [order, setOrder] = useState([]);
  
    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    const addToOrder = (food) => {
        //console.log(food);
        const newOrder = [...order, food];
        setOrder(newOrder);
    }

    let total = 0;
    for (const food of order){
        total = total + food.price;
    }
    const tax = (total*2)/100;

    const grandTotal = total + tax;

    return (
        <div className='foods-container px-20 mt-10'>
            <div className='food-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    foods.map(food => <MenuCard key={food.id} food={food} addToOrder={addToOrder}></MenuCard>)
                }
            </div>
            <div className='bg-slate-200'>
                <h5 className='font-medium text-3xl text-center mt-10 underline'>Order Summary</h5>
                <div className='cart-container px-10 mt-20'>
                    <h5 className='font-medium text-3xl mt-10'>Order Items : {order.length}</h5>
                    <p className='font-medium text-3xl mt-10'>Total Price : {total} </p>
                    <p className='font-medium text-3xl mt-10'>Tax : {tax} </p>
                    <h6 className='font-medium text-3xl mt-10'>Grand Total : {grandTotal} </h6>
                </div>
            </div>        
        </div>
    );
};

export default Menu;