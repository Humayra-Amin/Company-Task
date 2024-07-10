// import pic1 from '../../assets/images/image 99.png';
// import pic2 from '../../assets/images/image 98.png';
// import pic3 from '../../assets/images/image 99.png';
// import pic4 from '../../assets/images/image 99.png';
// import pic5 from '../../assets/images/image 98.png';
// import pic6 from '../../assets/images/image 99.png';
// import carrot from '../../assets/images/image 100.png'

// const storiesData = [
//     {
//         img: pic1,
//         author: 'Sahabuddin Sagor',
//         comment: 'Customer 1: Excellent product! It exceeded my expectations and the quality is top-notch.'
//     },
//     {
//         img: pic2,
//         author: 'Nayem Khan',
//         comment: 'Customer 2: The service was outstanding, and the team was very supportive throughout the process.'
//     },
//     {
//         img: pic3,
//         author: 'Sahabuddin Sagor',
//         comment: 'Customer 3: I had a great experience shopping here. Fast delivery and amazing customer support.'
//     },
//     {
//         img: pic4,
//         author: 'Sahabuddin Sagor',
//         comment: 'Customer 4: Highly recommend! The product arrived on time and in perfect condition.'
//     },
//     {
//         img: pic5,
//         author: 'Nayem Khan',
//         comment: 'Key Takeaways from Robotics Invest 2023'
//     },
//     {
//         img: pic6,
//         author: 'Sahabuddin Sagor',
//         comment: 'Customer 6: Very satisfied with my purchase. Will definitely buy again!'
//     }
// ];

// const Stories = () => {
//     return (
//         <div className='mt-10 lg:mt-16 p-6'>
//             <div>
//                 <h1 className='text-3xl lg:text-5xl font1'>Stories & Ideas</h1>
//                 <p className='lg:mt-4 text-[14px] lg:text-[16px] text-black leading-7 font2'>The latest news and updates</p>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20'>
//                 {storiesData.map((story, index) => (
//                     <div key={index} className='p-6 border rounded-xl bg-white shadow-md lg:w-[380px] lg:h-[240px] flex flex-col items-start relative'>
//                         {index === 2 || index === 5 ? (
//                             <div className="absolute -top-8 left-8 bg-white px-2 py-1 text-sm font1 text-[#2042B6]">
//                                 <img src={carrot}/>
//                             </div>
//                         ) : null}
//                         <img src={story.img} className='w-24 h-24 lg:w-32 lg:h-32 -mt-14' />
//                         <div className='text-start'>
//                             <h2 className='text-lg font2 text-[#2042B6]'>By: {story.author}</h2>
//                             <p className='mt-2 text-sm font1 text-gray-600'>{story.comment}</p>
//                         </div>
//                         <button className="btn bg-[#2042B6] lg:w-[110px] mt-2 rounded-full text-white hover:bg-blue-900">Read More</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Stories;
