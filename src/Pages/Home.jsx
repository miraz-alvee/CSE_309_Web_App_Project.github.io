import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate('/menu')
    }
    return (
        <div>
            <main className="mx-auto px-4 py-8">
                <section className='mt-10'>
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">
                            <img src="https://source.unsplash.com/-YHSwy6uqvk" className="w-full rounded-lg animation-picture" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://source.unsplash.com/XoByiBymX20" className="w-full rounded-lg animation-picture" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src="https://source.unsplash.com/-YHSwy6uqvk" className="w-full rounded-lg animation-picture" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="w-full rounded-lg animation-picture" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </section>

                <section className="mt-10 banner text-white rounded-lg p-8 mb-8">
                    <h1 className="text-6xl font-bold mb-4 text-center font-mono animation-header">Order Delicious Foods From Cafeteria
                        Anytime, Anywhere</h1>
                    <p className="text-3xl mb-4 text-center animation-para">Order now and get your food delivered in under 10 minutes!</p>
                    <div className='flex justify-center'>
                        <button className="btn btn-lg font-mono " onClick={handleOnclick} id="order-now-btn">Order Now</button>
                    </div>

                    <p className="text-3xl mb-4 text-center mt-5 animation-para">Or, you can pick-up the food by yourself</p>
                    <div className='flex justify-center'>
                        <button className="btn btn-lg font-mono " onClick={handleOnclick} id="order-pickup-btn">Order Pick Up</button>
                    </div>

                </section>

                <section className="menu">
                    <h2 className="text-3xl font-bold mb-5 py-10 text-center">Popular item</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-20 gap-8">
                        <div className="card shadow-md">
                            <img src="images/eggkichuri.jpg" alt="Egg Khichuri" className="object-cover rounded-t-lg set-images" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Egg Khichuri</h3>
                                <p className="text-gray-600 mb-4 mt-5">Khichdi is a dish that pre-cooks rice, pulses, veggies and other ingredients. It is a comfort food, often eaten by those recuperating from illness</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/chickenbiriany.jpg" alt="Egg Khichuri" className="object-cover rounded-t-lg set-images" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Chicken Biriyani</h3>
                                <p className="text-gray-600 mb-4 mt-5">Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/plain rice.jpg" alt="plane rice" className="object-cover rounded-t-lg set-images" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Plain rice</h3>
                                <p className="text-gray-600 mb-4 mt-5">This special variety of rice is rated outstanding in every possible aspects, be it taste, quality or purity. It is free from dust and pebbles.</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/rui fish.jpg" alt="rui fish" className="object-cover rounded-t-lg set-images" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Rohu fish</h3>
                                <p className="text-gray-600 mb-4 mt-5">Rohu fry feed mainly on zooplankton. Juveniles and adults show a strong positive selection for  selection for all zooplanktonic organisms .</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/telapiya fish.jpg" alt="telapiya fish" className="object-cover rounded-t-lg set-images" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Tilapia fish</h3>
                                <p className="text-gray-600 mb-4 mt-5">Tilapia is a mild and flaky fish, making it easy to pair with various herbs, spices and sauces. Because tilapia is generally sold as fillets, it is a great choice for a quick-cooking meal.</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/chickenroast.jpg" alt="chicken roast" className="object-cover rounded-t-lg set-images" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Chicken roast</h3>
                                <p className="text-gray-600 mb-4 mt-5">Rotisserie chicken is a chicken dish that is cooked on a rotisserie by using direct heat in which the chicken is placed next to the heat source.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;