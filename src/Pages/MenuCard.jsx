import React from 'react';

const MenuCard = (props) => {
    const {img, name, price, ratings} = props.food;

    const addToOrder = props.addToOrder;//and thiss will cal Menu.jsx 14 line

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img style={{width: 400, height: 250,}} src={img} alt="Shoes" /></figure>
                <figure><img  src="" alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-3xl font-medium">{name}</h2>
                    <p className='font-medium text-2xl mt-2'>price:{price} </p>
                    <p className='font-medium text-2xl mt-2'>rating:{ratings} </p>
                    <div className="card-actions justify-center mt-3">
                    <button onClick={() => addToOrder(props.food)} className="btn btn-primary">Order Now</button>
                    </div>
                    {/* thiss will call 7nmbr line */}
                </div>
            </div>
            
        </>
    );
};

export default MenuCard;