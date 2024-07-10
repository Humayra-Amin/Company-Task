import React, { useState } from 'react';
import logo from '../../assets/images/Group logo.svg';
import share from '../../assets/images/Group 6.1.svg';
import img from '../../assets/images/Union.svg';
import dropdown from '../../assets/images/arrow_drop_down.svg'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleItemClick = (index) => {
        if (selectedIndex === index) {
            setSelectedIndex(-1);
        } else {
            setSelectedIndex(index);
        }
    };

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'WPPOOL Index',
                data: [10, 80, 20, 90, 35, 75, 40, 65, 45, 30, 85, 25, 70, 10, 95],
                borderColor: '#FC714D',
                backgroundColor: 'rgba(252, 113, 77, 0.2)',
                fill: true,
            },
            {
                label: 'Google Index',
                data: [15, 10, 70, 25, 85, 30, 45, 65, 40, 75, 35, 90, 20, 80, 0],
                borderColor: '#615DE3',
                backgroundColor: 'rgba(97, 93, 227, 0.2)',
                fill: true,
            },
            {
                label: 'Microsoft',
                data: [-10, 30, 45, 65, 40, 15, 10, 70, 35, 90, 20, 80, 75, 16, 7],
                borderColor: '#7CA63A',
                backgroundColor: 'rgba(124, 166, 58, 0.2)',
                fill: true,
            },
            {
                label: 'Twitter Index',
                data: [20, 3, 16, 24, 39, 10, 47, 55, 61, 73, 88, 20, 34, 93, 64],
                borderColor: '#6F34A1',
                backgroundColor: 'rgba(111, 52, 161, 0.2)',
                fill: true,
            },
        ],
    };

    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        layout: {
            padding: {
                top: 50,
                left: 20,
                right: 20,
                bottom: 20
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true
                },
                min: -10,
                max: 100,
                ticks: {
                    stepSize: 10,
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        }
    };

    return (
        <div className="relative bg-white h-[810px] lg:h-[630px] mt-20 lg:mt-20">
            <div className="relative bg-white lg:h-full flex items-center justify-center">
                <div className="absolute lg:w-[97%] lg:top-8">
                    <div className="sticky top-0 navbar bg-[#F3F3F3] z-50 rounded-lg mb-[240px] lg:mb-0">
                        <div className="flex-1">
                            <a className="text-xl">
                                <img src={logo}/>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="text-white lg:mr-4">
                                <img src={share} className="border border-black rounded-full lg:p-2" />
                            </div>
                            <button className="btn bg-[#F3F3F3] border border-blue-600 rounded-full mr-4 text-black font-normal hover:bg-slate-400">
                                Download the 2024 Report
                            </button>
                            <button onClick={toggleMenu} className="btn text-black bg-[#F3F3F3] border-none hover:bg-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block lg:h-5 lg:w-5 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {menuOpen && (
                        <div className="absolute top-[4rem] lg:top-20 left-[136px] lg:left-[910px] lg:w-[270px] bg-white shadow-lg rounded-lg z-50 border border-black">
                            <div className="flex items-center justify-between lg:p-4">
                                <button onClick={toggleMenu} className="text-[#2042B6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block lg:h-6 lg:w-6 text-black stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className="lg:py-2">
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">The WPPOOL Index</a></li>
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">All Companies</a></li>
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">Potential Future Listings</a></li>
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">State of USA</a></li>
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">Stories & Ideas</a></li>
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">About WPPOOL</a></li>
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">WPPOOL Portfolio Companies</a></li>
                                <li className="lg:px-4 lg:py-2 hover:bg-gray-200"><a href="#">Visit WPPOOL</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="absolute left-0 lg:left-0 ml-[0.5rem] lg:ml-6 mt-[38rem] lg:mt-[5rem] lg:w-[224px] lg:h-[470px] bg-[#F3F3F3] lg:p-4 rounded-lg">
                    <ul className='space-y-2'>
                        <li className={`hover:bg-blue-500 font1 hover:text-white p-2 rounded-lg relative flex justify-between items-center ${selectedIndex === 0 ? 'bg-blue-500 text-white' : ''}`}>
                            <a href="#" onClick={() => handleItemClick(0)}>
                                The Index
                            </a>
                            <span>{selectedIndex === 0 ? '-' : '+'}</span>
                        </li>
                        <li className={`hover:bg-blue-500 font1 hover:text-white p-2 rounded-lg relative flex justify-between items-center ${selectedIndex === 1 ? 'bg-blue-500 text-white' : ''}`}>
                            <a href="#" onClick={() => handleItemClick(1)}>
                                The Index Tab Two
                            </a>
                            <span>{selectedIndex === 1 ? '-' : '+'}</span>
                        </li>
                        <li className={`hover:bg-blue-500 font1 hover:text-white p-2 rounded-lg relative flex justify-between items-center ${selectedIndex === 2 ? 'bg-blue-500 text-white' : ''}`}>
                            <a href="#" onClick={() => handleItemClick(2)}>
                                The Index Tab Three
                            </a>
                            <span>{selectedIndex === 2 ? '-' : '+'}</span>
                        </li>
                        <li className={`hover:bg-blue-500 font1 hover:text-white p-2 rounded-lg relative flex justify-between items-center ${selectedIndex === 3 ? 'bg-blue-500 text-white' : ''}`}>
                            <a href="#" onClick={() => handleItemClick(3)}>
                                The Index Tab Four
                            </a>
                            <span>{selectedIndex === 3 ? '-' : '+'}</span>
                        </li>
                        <li className={`hover:bg-blue-500 font1 hover:text-white p-2 rounded-lg relative flex justify-between items-center ${selectedIndex === 4 ? 'bg-blue-500 text-white' : ''}`}>
                            <a href="#" onClick={() => handleItemClick(4)}>
                                The Index Tab Five
                            </a>
                            <span>{selectedIndex === 4 ? '-' : '+'}</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center lg:mb-[12.5rem] mt-[6.5rem] lg:mt-0">
                    <div className="flex items-center lg:mr-[360px]">
                        <img src={img} className='lg:w-12 lg:h-10' />
                        <h1 className="text-3xl font1">The WPPOOL Index</h1>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-6 lg:ml-[215px]">
                        <div className="flex items-center bg-[#F3F3F3] lg:p-2 rounded-lg gap-8 relative">
                            <h4 className="lg:text-3xl font1 text-[#FC714D]">+66.2%</h4>
                            <p className="lg:mr-2 text-[12px] font-semibold text-right font2 text-black">WPPOOL<br />Index</p>
                            <div className="h-[50%] w-[4px] bg-[#FC714D] absolute lg:top-4 lg:bottom-0 lg:right-2"></div>
                        </div>
                        <div className="flex items-center bg-[#F3F3F3] lg:p-2 rounded-lg gap-8 relative">
                            <h4 className="lg:text-3xl font1 text-[#615DE3]">+26.6%</h4>
                            <p className="ml-2 text-[12px] font-semibold text-right font2 text-black">Google<br />Index</p>
                            <div className="lg:h-[50%] lg:w-[4px] bg-[#615DE3] absolute lg:top-4 lg:bottom-0 lg:right-2"></div>
                        </div>
                        <div className="flex items-center bg-[#F3F3F3] lg:p-2 rounded-lg gap-8 relative">
                            <h4 className="lg:text-3xl font1 text-[#7CA63A]">+34.1%</h4>
                            <p className="lg:mr-2 text-[12px] font-semibold lg:text-right font2 text-black">Microsoft</p>
                            <div className="lg:h-[50%] lg:w-[4px] bg-[#7CA63A] absolute lg:top-4 lg:bottom-0 lg:right-2"></div>
                        </div>
                        <div className="flex items-center bg-[#F3F3F3] lg:p-2 rounded-lg gap-8 relative">
                            <h4 className="lg:text-3xl font1 text-[#6F34A1]">+17%</h4>
                            <p className="lg:ml-10 text-[12px] font-semibold text-right font2 text-black">Twitter<br />Index</p>
                            <div className="h-[50%] w-[4px] bg-[#6F34A1] absolute lg:top-4 lg:bottom-0 lg:right-2"></div>
                        </div>
                    </div>

                    <div className="flex mt-6 lg:mt-6 lg:w-full justify-between lg:px-[215px] relative">
                        <div className="flex lg:flex-row gap-10 mt-[24px] lg:mt-0">
                            <div className="lg:w-[210px] lg:h-[30px] flex items-center justify-between lg:px-3 bg-[#2042B6] rounded-full shadow-lg">
                                <p className="text-sm text-white font2">Sectors</p>
                                <img src={dropdown} className="lg:w-6 lg:h-6" />
                            </div>
                            <div className="lg:w-[210px] lg:h-[30px] flex items-center justify-between lg:px-3 bg-[#2042B6] rounded-full shadow-lg">
                                <p className="text-sm text-white font2">Types of IPO</p>
                                <img src={dropdown} className="lg:w-6 lg:h-6 lg:ml-2" />
                            </div>
                        </div>
                        <div className="absolute lg:right-0">
                            <div className="flex items-center lg:w-[232px] lg:h-[30px] bg-[#EFF3F6] rounded-full justify-between text-[#748DA1] font2 lg:px-4">
                                <span className="text-sm font-semibold">1Y</span>
                                <span className="text-sm font-semibold">YTD</span>
                                <span className="text-sm text-white font-semibold rounded-full lg:py-1 lg:px-2 shadow-2xl bg-[#2042B6]">6M</span>
                                <span className="text-sm font-semibold">1M</span>
                                <span className="text-sm font-semibold">1W</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute top-[34rem] lg:top-[17rem] left-[10px] lg:left-[250px] w-[330px] lg:w-[930px] h-[270px] lg:h-[364px]">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
