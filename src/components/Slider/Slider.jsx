// import React, { useState } from 'react';
// import dropdown from '../../assets/images/arrow_drop_down.svg';
// import dropdown2 from '../../assets/images/arrow_drop_down.png';
// import slide1 from '../../assets/images/rgegdg.png';
// import slide2 from '../../assets/images/rhrdgd.png';
// import slide3 from '../../assets/images/dehjtfgdt.png';
// import leftArrow from '../../assets/images/Group 368.svg';
// import rightArrow from '../../assets/images/Group 367.svg';

// const Slider = () => {
//     const slides = [slide1, slide2, slide3];
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <div className='mt-10 lg:mt-16 p-4 lg:p-6'>
//             <div>
//                 <h1 className='text-3xl lg:text-5xl font1'>State of USA</h1>
//                 <div className="dropdown flex items-center mt-2 lg:mt-4">
//                     <div tabIndex={0} role="button" className="btn bg-[#2042B6] text-xl lg:text-4xl text-white rounded-full w-[150px] lg:w-[200px] lg:h-[58px] font1 font-normal">2024</div>
//                     <img src={dropdown} className="w-14 h-6 lg:w-8 lg:h-8 -ml-[42px] lg:-ml-[44px] -mt-[4px] lg:mt-4" alt="Dropdown" />
//                 </div>
//                 <p className='mt-2 lg:mt-4 text-[14px] lg:text-[16px] text-black font2'>Click through the slides or download the report to view natively on your device.</p>
//             </div>
//             <div className='relative -mt-12 lg:mt-4'>
//                 <div className='overflow-hidden'>
//                     <div
//                         className='flex transition-transform duration-500'
//                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                     >
//                         {slides.map((slide, index) => (
//                             <img key={index} src={slide} className='w-full lg:w-[580px] lg:h-[326px] object-contain lg:object-cover' />
//                         ))}
//                     </div>
//                 </div>
//                 <div className='absolute top-[280px] lg:top-[280px] lg:left-2 flex items-center'>
//                     <button onClick={handlePrev}>
//                         <img src={leftArrow} alt="Previous" className="w-20 h-20 lg:w-28 lg:h-28" />
//                     </button>
//                     <button onClick={handleNext} className="ml-2 lg:ml-4">
//                         <img src={rightArrow} alt="Next" className="w-20 h-20 lg:w-28 lg:h-28" />
//                     </button>
//                 </div>
//                 <div className='flex items-center space-x-2 ml-40 -mt-32 lg:-mt-10 lg:ml-56'>
//                     <p className="text-[14px] lg:text-[16px] lg:ml-4 text-black">Pages</p>
//                     <div className="dropdown flex items-center space-x-2">
//                         <button className="btn bg-white text-[14px] lg:text-[16px] text-black rounded-full w-28 h-10 lg:w-36 lg:h-12 flex justify-center items-center relative">1 and 2
//                             <img src={dropdown2} className="absolute lg:bottom-3 left-20 lg:left-28 w-8 h-8 lg:w-6 lg:h-6" />
//                         </button>
//                         <p className="text-[14px] lg:text-[16px] text-black">of 37</p>
//                     </div>
//                 </div>
//                 <div className='mt-[10px] lg:-mt-[45px] ml-[50px] lg:ml-[800px]'>
//                     <button className="btn bg-[#2042B6] font2 rounded-full hover:bg-blue-600 text-white">Download the 2024 Report</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slider;
