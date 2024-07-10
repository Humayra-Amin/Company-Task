// import React from 'react';
// import search from '../../assets/images/search.svg';

// const AllCompanies = () => {
//     const companies = [
//         { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '$50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
//         { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
//         { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
//         { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
//         { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$1.32', marketCap: '$0.1', revenueGrowth: '38%', grossMargin: '--', evRevenue: '0.4', ytdPerformance: '13.8%' },
//         { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '$3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
//         { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '$50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
//         { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
//         { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
//         { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' }
//     ];

//     return (
//         <div>
//             <div className='bg-white h-[530px] mt-10 rounded-xl'>
//                 <div className='flex justify-around mt-20'>
//                     <h1 className='text-3xl lg:text-4xl mt-10 lg:mt-10 mr-[-4rem] lg:mr-[18rem] font1'>All Companies</h1>
//                     <div className='relative'>
//                         <input type="text" placeholder="Search Companies" className="input input-bordered pl-10 mt-20 -ml-[13.5rem] lg:ml-0 lg:mt-10 bg-[#F3F3F3] lg:w-[488px]" />
//                         <img src={search} alt="search" className='absolute left-[-13rem] lg:left-3 top-[105px] lg:top-[75%] transform -translate-y-1/2 lg:w-6 lg:h-6'/>
//                     </div>
//                 </div>
//                 <div className="overflow-y-auto h-[300px] mt-10">
//                     <table className="table-auto w-[1100px] mx-auto">
//                         <thead className='bg-white sticky top-0'>
//                             <tr className='text-[16px]'>
//                                 <th className='p-2'>Company</th>
//                                 <th className='p-2'>Ticker</th>
//                                 <th className='p-2'>Vertical</th>
//                                 <th className='p-2'>Price</th>
//                                 <th className='p-2'>Market Cap ($B)</th>
//                                 <th className='p-2'>Revenue Growth</th>
//                                 <th className='p-2'>Gross Margin</th>
//                                 <th className='p-2'>EV/Revenue</th>
//                                 <th className='p-2'>YTD Performance</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {companies.map((company, index) => (
//                                 <tr key={index} className={`${index % 2 === 0 ? 'bg-[#F3F3F3]' : 'bg-white'} text-center rounded-lg text-sm`}>
//                                     <td className='p-2'>{company.company}</td>
//                                     <td className='p-2'>{company.ticker}</td>
//                                     <td className='p-2'>{company.vertical}</td>
//                                     <td className='p-2'>{company.price}</td>
//                                     <td className='p-2'>{company.marketCap}</td>
//                                     <td className='p-2'>{company.revenueGrowth}</td>
//                                     <td className='p-2'>{company.grossMargin}</td>
//                                     <td className='p-2'>{company.evRevenue}</td>
//                                     <td className='p-2'>{company.ytdPerformance}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <div className="flex flex-col lg:flex-row justify-center gap-10 mt-2 p-4">
//                 <div className="w-[250px] h-[30px] flex items-center justify-center px-3 bg-[#2042B6] rounded-full shadow-2xl">
//                     <p className="text-sm text-white font2">Download ‘All Companies’ Data</p>
//                 </div>
//                 <div className="w-[210px] h-[30px] flex items-center justify-center px-3 bg-[#2042B6] rounded-full shadow-2xl">
//                     <p className="text-sm text-white font2">View Methodology</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllCompanies;
