import React from 'react';

const Contract = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Food Delivery Contract</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">Parties</h2>
                <p>This agreement is entered into by and between:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Food Delivery Company, with its principal place of business at [address], ("Company")</li>
                    <li>Customer, with its principal place of business at [address], ("Customer")</li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">Delivery Services</h2>
                <p>The Company agrees to provide delivery services for the Customer's food orders. The Company will make its best effort to deliver the food to the Customer's address in a timely and efficient manner.</p>
                <p>The Customer agrees to provide accurate and complete delivery information, including but not limited to the delivery address and contact information. The Customer acknowledges that any incorrect or incomplete information may result in delays or additional charges.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">Fees and Payment</h2>
                <p>The Company will charge the Customer a delivery fee for each food order. The delivery fee will be calculated based on the distance between the restaurant and the delivery address, as well as other factors such as the time of day and the size of the order.</p>
                <p>The Customer will be responsible for paying the delivery fee, as well as the cost of the food and any applicable taxes and fees, at the time of the order. Payment may be made using a credit card, debit card, or other payment method accepted by the Company.</p>
                <p>The Company reserves the right to change its fees and payment policies at any time. Any changes will be communicated to the Customer in advance.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">Liability and Indemnification</h2>
                <p>The Company will not be liable for any damages or losses resulting from delays, errors, or other issues related to the delivery of the food. The Customer acknowledges that the delivery of food involves inherent risks and agrees to assume all such risks.</p>
                <p>The Customer agrees to indemnify and hold the Company harmless from any and all claims, damages, or losses arising from the Customer's use of the delivery services.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">Termination</h2>
                <p>This agreement may be terminated by either party upon written notice to the other party. The Company may terminate this agreement immediately if the Customer violates any of the terms and conditions of this agreement.</p>
                <p>Upon termination of this agreement, the Customer will be responsible for paying any fees or charges incurred up to the date of termination.</p>
            </div>
        </div>
    );
};

export default Contract;