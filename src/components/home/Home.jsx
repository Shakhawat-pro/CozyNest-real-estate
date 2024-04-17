import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import Slider from "./Slider";
import { useEffect } from "react";

const Home = () => {
    const houses = useLoaderData()
    useEffect(()=>{
        document.title = 'CozyNest'
    })
    return (
        <div>
            <Slider></Slider>
            <div className="my-20 text-center">
                <h2  className="text-4xl font-bold text-[#23BE0A]"data-aos="fade-down" data-aos-delay="100" >Discover Your Dream Home</h2>
                <p className="mt-4" data-aos="zoom-in" data-aos-delay="50">Explore a diverse selection of urban, coastal, suburban, and mountain properties tailored to your lifestyle and preferences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  w-11/12 mx-auto" data-aos="fade-down" data-aos-delay="50">
                {
                    houses.map((house, index) => <Cards key={index} house={house}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;