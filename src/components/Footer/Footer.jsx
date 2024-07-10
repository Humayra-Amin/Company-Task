import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer bg-[#E6E6E6] text-base-content p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mt-10">
                    <aside className="lg:col-span-2">
                        <p className='text-3xl lg:text-4xl font1 leading-10'>Experience remarkable<br />WordPress products with a<br />new level of power, beauty,<br />and human-centered designs.</p>
                        <div className="mt-48 text-[14px]">
                            <p>©2024 Terms of Use Privacy Policy</p>
                            <p className='w-full md:w-[517px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaera.</p>
                        </div>
                    </aside>
                    <nav className='text-xl'>
                        <h6 className="footer-title font-semibold">Jump To</h6>
                        <ul className="space-y-2 text-[#2042B6]">
                            <li><a className="link link-hover" href="#">About Us</a></li>
                            <li><a className="link link-hover" href="#">Portfolio</a></li>
                            <li><a className="link link-hover" href="#">News</a></li>
                            <li><a className="link link-hover" href="#">Stories</a></li>
                            <li><a className="link link-hover" href="#">Jobs</a></li>
                        </ul>
                    </nav>
                    <div className="flex flex-col space-y-4 text-xl">
                        <div>
                            <h6 className="font-bold text-black">Cambridge</h6>
                            <p className='mt-2 font-normal leading-8 text-black'>70728 Yost Burg, <br></br>North Magdaleneview, <br></br>UT 97952-2814</p>
                        </div>
                        <hr className='border border-gray-400'/>
                        <div>
                            <h6 className="font-bold text-black">London</h6>
                            <p className='mt-2 font-normal leading-8 text-black'>Suite 292 903 Stehr Streets, <br></br>Langworthtown, SC 94577-9465</p>
                        </div>
                        <hr className='border border-gray-400'/>
                        <div>
                            <h6 className="font-bold text-black">San Francisco</h6>
                            <p className='mt-2 font-normal leading-8 text-black'>19837 Gilberto Lodge, <br></br>Lake Kendallville, <br></br>Colorado - 97392, Bhutan</p>
                        </div>
                        <hr className='border border-gray-400'/>
                        <div className='flex justify-start gap-5 text-[#9FA0A1] w-36 h-36'>
                        <FaLinkedin />
                        <FaTwitter />                        
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
