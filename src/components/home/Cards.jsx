import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa";


const Cards = ({ house }) => {
    const { title, type, id, image, description, price, area, location, status } = house
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/soloHouse/${id}`)
    }

    const getPriceUnit = (houseId) => {
        if (houseId >= 19 && houseId <= 24) {
            return "/month";
        } else if (houseId >= 31 && houseId <= 36) {
            return "/night";
        } else {
            return "";
        }
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-sm w-full">
                <div className="card h-full hover:cursor-pointer bg-base-100 shadow-xl p-6 border-2 border-[#23BE0A] rounded-xl">
                    <figure data-aos="zoom-in" data-aos-duration="1000">
                        <img src={image} alt="Shoes" className="rounded-lg h-[280px] " />
                    </figure>
                    <div className="">
                        <h1 data-aos="fade-up" data-aos-delay="50" className="card-title text-2xl font-bold my-3">{title}</h1>
                        <p data-aos="fade-up" data-aos-delay="60" className='font-semibold flex gap-2 text-[#23BE0A] '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg>{type}</p>
                        <div data-aos="fade-up" data-aos-delay="70" className="flex gap-4 mt-2">
                            <p className="flex gap-1"><span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>{location}</p>
                            <p className="flex gap-1"><span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </span>{area}</p>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="80" className='my-3'>{description}</p>
                        <div data-aos="fade-up" data-aos-delay="90" className='mt-2'>
                            <p className='text-lg font-semibold'>For:<span className='text-[#23BE0A]'> {status}</span></p>
                            <p className='text-lg font-semibold text-[#23BE0A] flex items-center gap-1'><FaDollarSign />{price} <span>{getPriceUnit(id)}</span></p>
                        </div>
                        <hr style={{ borderBottom: "1px dotted #888", height: "1px" }} className='mt-7 mb-3' />
                        <div data-aos="fade-up" data-aos-delay="80" className=''>
                            <button onClick={handleClick} className='btn w-full bg-[#23BE0A] text-white'>View Property</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
Cards.propTypes = {
    house: PropTypes.object
}