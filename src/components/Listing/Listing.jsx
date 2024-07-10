import React from 'react';
import stripe from '../../assets/images/Group 227.svg';
import klarna from '../../assets/images/Group_417.png';
import plaid from '../../assets/images/Group 220.svg';
import checkout from '../../assets/images/Group 221.svg';
import revolut from '../../assets/images/Group 222.svg';
import chime from '../../assets/images/Group 226.svg';
import n26 from '../../assets/images/Group 223.svg';
import brex from '../../assets/images/Group 224.svg';
import deel from '../../assets/images/Group 225.svg';
import gusto from '../../assets/images/Group (2).svg';

const Listing = () => {
    const images = [
        { src: stripe},
        { src: klarna},
        { src: plaid},
        { src: checkout},
        { src: revolut},
        { src: chime},
        { src: n26},
        { src: brex},
        { src: deel},
        { src: gusto}
    ];

    return (
        <div className='mt-10 lg:mt-16 p-6'>
            <div>
                <h1 className='text-3xl lg:text-5xl font1'>Potential Future Listings</h1>
                <p className='lg:mt-4 text-[14px] lg:text-[16px] text-black leading-7 font2'>We are excited to present a curated selection of potential future listings. These listings represent innovative solutions and partnerships that have the potential to significantly enhance our platform's capabilities and offer our users new and improved services.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 mt-4'>
                {images.map((image, index) => (
                    <div key={index} className='bg-white w-[150px] lg:w-[220px] h-[90px] lg:h-[120px] flex items-center justify-center rounded-lg'>
                        <img src={image.src} alt={image.alt} className='max-w-full max-h-full' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listing;
