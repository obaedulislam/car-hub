import React from 'react';
import './Banner.css';
import { BsArrowRightShort, BsArrowLeftShort  } from "react-icons/bs";

import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="carousel-img">
                    <img src={img1}  alt='' className="w-full  rounded-xl" />
                </div>

                <div className="absolute  justify-end transform -translate-y-1/2 left-10 top-1/2">
                    <h1 className='text-6xl text-white font-bold leading-[75px]'>Affordable <br/> Price For Car<br/> Servicing</h1>
                    <p className='text-white mt-7 text-lg'>There are many variations of passages of  available,<br/> but the majority have suffered alteration in some form</p>
                    <div className="absolute flex  transform -translate-y-1/2 mt-12">
                        <button className="btn bg-[#FF3811] border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] mr-5 capitalize text-lg text-semibold">Discover More</button>
                        <button className="btn bg-[#ff391100]   border-gray-100  duration-300 hover:border-[#ff391100] hover:bg-[#FF3811] mr-5 capitalize text-lg text-semibold">Latest Project</button>

                    </div>
                    {/* CTA End */}
                </div>
                {/* Banner Text End */}


                <div className="absolute flex justify-end transform -translate-y-1/2 left-10 right-10 bottom-5">
                    <a href="#slide4" className="btn btn-circle mr-5 bg-[#878787d0]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <div className="carousel-img">
                    <img src={img2}  alt='' className="w-full  rounded-xl" />
                </div>

                <div className="absolute  justify-end transform -translate-y-1/2 left-10 top-1/2">
                    <h1 className='text-6xl text-white font-bold leading-[75px]'>Affordable <br/> Price For Car<br/> Servicing</h1>
                    <p className='text-white mt-7 text-lg'>There are many variations of passages of  available,<br/> but the majority have suffered alteration in some form</p>
                    <div className="absolute flex  transform -translate-y-1/2 mt-12">
                        <button className="btn bg-[#FF3811] border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] mr-5 capitalize text-lg text-semibold">Discover More</button>
                        <button className="btn bg-[#ff391100]   border-gray-100  duration-300 hover:border-[#ff391100] hover:bg-[#FF3811] mr-5 capitalize text-lg text-semibold">Latest Project</button>

                    </div>
                    {/* CTA End */}
                </div>
                {/* Banner Text End */}
 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href="#slide1" className="btn btn-circle mr-5 bg-[#878787d0]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <div className="carousel-img">
                    <img src={img3}  alt='' className="w-full  rounded-xl" />
                </div>
                
                <div className="absolute  justify-end transform -translate-y-1/2 left-10 top-1/2">
                    <h1 className='text-6xl text-white font-bold leading-[75px]'>Affordable <br/> Price For Car<br/> Servicing</h1>
                    <p className='text-white mt-7 text-lg'>There are many variations of passages of  available,<br/> but the majority have suffered alteration in some form</p>
                    <div className="absolute flex  transform -translate-y-1/2 mt-12">
                        <button className="btn bg-[#FF3811] border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] mr-5 capitalize text-lg text-semibold">Discover More</button>
                        <button className="btn bg-[#ff391100]   border-gray-100  duration-300 hover:border-[#ff391100] hover:bg-[#FF3811] mr-5 capitalize text-lg text-semibold">Latest Project</button>

                    </div>
                    {/* CTA End */}
                </div>
                {/* Banner Text End */}
 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href="#slide2" className="btn btn-circle mr-5 bg-[#878787d0]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <div className="carousel-img">
                    <img src={img4}  alt='' className="w-full  rounded-xl" />
                </div>
                
                <div className="absolute  justify-end transform -translate-y-1/2 left-10 top-1/2">
                    <h1 className='text-6xl text-white font-bold leading-[75px]'>Affordable <br/> Price For Car<br/> Servicing</h1>
                    <p className='text-white mt-7 text-lg'>There are many variations of passages of  available,<br/> but the majority have suffered alteration in some form</p>
                    <div className="absolute flex  transform -translate-y-1/2 mt-12">
                        <button className="btn bg-[#FF3811] border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] mr-5 capitalize text-lg text-semibold">Discover More</button>
                        <button className="btn bg-[#ff391100]   border-gray-100  duration-300 hover:border-[#ff391100] hover:bg-[#FF3811] mr-5 capitalize text-lg text-semibold">Latest Project</button>

                    </div>
                    {/* CTA End */}
                </div>
                {/* Banner Text End */}
 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href="#slide3" className="btn btn-circle mr-5 bg-[#878787d0]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                <a href="#slide5" className="btn btn-circle bg-[#FF3811] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className="carousel-img">
                    <img src={img5}  alt='' className="w-full  rounded-xl" />
                </div>
                
                <div className="absolute  justify-end transform -translate-y-1/2 left-10 top-1/2">
                    <h1 className='text-6xl text-white font-bold leading-[75px]'>Affordable <br/> Price For Car<br/> Servicing</h1>
                    <p className='text-white mt-7 text-lg'>There are many variations of passages of  available,<br/> but the majority have suffered alteration in some form</p>
                    <div className="absolute flex  transform -translate-y-1/2 mt-12">
                        <button className="btn bg-[#FF3811] border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] mr-5 capitalize text-lg text-semibold">Discover More</button>
                        <button className="btn bg-[#ff391100]   border-gray-100  duration-300 hover:border-[#ff391100] hover:bg-[#FF3811] mr-5 capitalize text-lg text-semibold">Latest Project</button>

                    </div>
                    {/* CTA End */}
                </div>
                {/* Banner Text End */}
 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href="#slide1" className="btn btn-circle mr-5 bg-[#878787d0]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                <a href="#slide6" className="btn btn-circle bg-[#FF3811] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <div className="carousel-img">
                    <img src={img6}  alt='' className="w-full  rounded-xl" />
                </div>
                
                <div className="absolute  justify-end transform -translate-y-1/2 left-10 top-1/2">
                    <h1 className='text-6xl text-white font-bold leading-[75px]'>Affordable <br/> Price For Car<br/> Servicing</h1>
                    <p className='text-white mt-7 text-lg'>There are many variations of passages of  available,<br/> but the majority have suffered alteration in some form</p>
                    <div className="absolute flex  transform -translate-y-1/2 mt-12">
                        <button className="btn bg-[#FF3811] border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] mr-5 capitalize text-lg text-semibold">Discover More</button>
                        <button className="btn bg-[#ff391100]   border-gray-100  duration-300 hover:border-[#ff391100] hover:bg-[#FF3811] mr-5 capitalize text-lg text-semibold">Latest Project</button>

                    </div>
                    {/* CTA End */}
                </div>
                {/* Banner Text End */}
 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href="#slide5" className="btn btn-circle mr-5 bg-[#878787d0]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;