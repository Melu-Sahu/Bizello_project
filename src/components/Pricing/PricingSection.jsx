import React from 'react';
import PriceCard from './PriceCard';

const PricingSection = () => {

  const priceData = [
    {
      price: 9,
      plan: 'Basic',
      benifits: ['1GB of space', 'Support at $25 hour', 'Limited Cloud Access']
    }, {
      price: 29,
      plan: 'Professional',
      benifits: ['10GB of space', 'Support at $15 hour', 'Unlimited Cloud Access']
    }, {
      price: 55,
      plan: 'Business',
      benifits: ['100GB of space', 'Support at $10 hour', 'Unlimited Cloud Access']
    }
  ];

  return (
    <div className='mt-8' id='price'>
      <h1 className='text-center font-mono text-lg text-violet-400'>GET A QUOTE</h1>
      <h1 className='text-gray-700 text-center mt-5 font-black lg:text-5xl sm:text-xl'>Our Pricing Plan</h1>

      <div className='lg:flex justify-center items-center sm:block w-full mx-5 bg-transparent px-5 mt-5'>
        {
          priceData.map((data)=>(
            <PriceCard key={data.plan} price={data.price} plan={data.plan} benifits={data.benifits} />
          ))
        }
      </div>

    </div>
  )
}

export default PricingSection
