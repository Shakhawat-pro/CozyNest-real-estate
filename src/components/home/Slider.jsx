import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"
import 'swiper/css'
import "./styles.css"

import { Navigation, Autoplay, Pagination} from 'swiper/modules';

const Slider = () => {
    return (
        <div className="w-11/12 mx-auto rounded-3xl overflow-clip z-1 mt-16 lg:mt-10" data-aos="flip-up" data-aos-delay="150">

            <Swiper
                    style={{
                        '--swiper-navigation-color': '#23BE0A',
                        '--swiper-pagination-color': '#23BE0A',
                    }}
             navigation={true} 
             autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            >
                <SwiperSlide>
                    <div className="slide slide-1  flex flex-col" data-aos="fade-up" >
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6 ' data-aos="zoom-in-down" >Urban Oasis</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white max-sm:hidden">Immerse yourself in the vibrant pulse of city life with our urban oasis collection. Discover stylish apartments, trendy lofts, and chic condominiums nestled in the heart of bustling metropolises. Experience the convenience of city living without compromising on comfort and style.</p>
                        <p className="w-9/12 text-sm lg:text-md text-white md:hidden">Experience vibrant city life with stylish apartments and trendy lofts in our Urban Oasis collection.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide-2 flex flex-col ">
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6'>Seaside Serenity</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white max-sm:hidden">Escape to the tranquil shores and embrace the serenity of coastal living. Dive into our seaside serenity collection featuring beachfront villas, cozy cottages, and elegant waterfront properties. Let the sound of waves and salty breeze rejuvenate your soul as you unwind in your own piece of paradise.</p>
                        <p className="w-9/12 text-sm lg:text-md text-white md:hidden">Escape to tranquil shores and embrace coastal living in our Seaside Serenity collection.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide-3 flex flex-col ">
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6'>Suburban Charm</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white max-sm:hidden">Experience the warmth of community and the comfort of home in our suburban charm collection. Discover family-friendly neighborhoods, cozy townhouses, and spacious suburban estates surrounded by lush greenery and amenities. Live the quintessential suburban lifestyle where convenience meets tranquility. </p>
                        <p className="w-9/12 text-sm lg:text-md text-white md:hidden">Find warmth and comfort in family-friendly neighborhoods and cozy townhouses with our Suburban Charm collection.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide-4 flex flex-col ">
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6'>Mountain Retreat</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white max-sm:hidden">Embark on an adventure to the mountains and indulge in the beauty of nature with our mountain retreat collection. Explore rustic cabins, luxurious chalets, and secluded lodges nestled amidst breathtaking alpine landscapes. Whether your an outdoor enthusiast or seeking peace and solitude, our mountain retreats offer the perfect escape.</p>
                        <p className="w-9/12 text-sm lg:text-md text-white md:hidden">Embark on a mountain adventure and indulge in nature beauty with our Mountain Retreat collection.</p>
                    </div>

                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;



