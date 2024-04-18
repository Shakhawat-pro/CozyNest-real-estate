import { useEffect, useState } from "react";
import { eraseHome, getHome } from "../../../utiity/storage";
import { useLoaderData } from "react-router-dom";
import Cards from "../home/Cards";
import { ToastContainer } from 'react-toastify';



const Booking = () => {
    const [booked, setBooked] = useState([])
    const houses = useLoaderData()

    useEffect(() => {
        const savedHouse = getHome();
        setBooked(savedHouse)
    }, [])
    const handleRemove = () => {
        eraseHome()
        setBooked([])
    }


    // console.log('get house',booked)

    const filteredHouse = houses.filter(houseItem => booked.includes(houseItem.id));



    return (
        <div className="min-h-[500px] mt-16">
            <div className="text-center ">
            <ToastContainer />
                <h2 data-aos="fade-down" data-aos-delay="50" className="text-4xl font-bold text-[#23BE0A]">Your Booking Details</h2>
                <p data-aos="fade-up" data-aos-delay="50" className="mt-4 w-11/12 mx-auto">Discover all you need to know about your scheduled property visit. Explore viewing details, location, and any special instructions to ensure a smooth and informative experience. Prepare to find your dream property hassle-free.</p>
                <button onClick={handleRemove} className='btn w-[200px] bg-[#23BE0A] text-white mt-6'>Clear All Booking</button>
            </div>

            <div className="mt-16" >
                {filteredHouse.length === 0 ? (
                    <div className="text-center py-[70px] text-4xl rounded-3xl text-white font font-extrabold bg-[#23BE0A] w-11/12 mx-auto">No Booked houses.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-11/12 mx-auto ">
                        {filteredHouse.map((house, index) => (
                            <Cards key={index} house={house} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Booking;