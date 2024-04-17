import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../home/Cards";

const Resident = () => {
    const [houses, setHouses] = useState([])
    const [filterHouses, setFilterHouses] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        setHouses(data);
        setFilterHouses(data);
    }, [data]);

    // Function to filter houses by category
    const filterBySingleFamily = () => {
        const filtered = houses.filter(house => house.type === 'Single-family home');
        setFilterHouses(filtered);
    }

    const filterByApartments = () => {
        const filtered = houses.filter(house => house.type === 'Apartment');
        setFilterHouses(filtered);
    }

    const filterByStudentHousing = () => {
        const filtered = houses.filter(house => house.type === 'Student housing');
        setFilterHouses(filtered);
    }

    const filterBySeniorLivingCommunities = () => {
        const filtered = houses.filter(house => house.type === 'Senior living community');
        setFilterHouses(filtered);
    }

    const filterByVacationRentals = () => {
        const filtered = houses.filter(house => house.type === 'Vacation Rental');
        setFilterHouses(filtered);
    }


    // Function to filter houses for sale
    const filterForSale = () => {
        const filtered = houses.filter(house => house.status === 'Sale');
        setFilterHouses(filtered);
    }

    // Function to filter houses for rent
    const filterForRent = () => {
        const filtered = houses.filter(house => house.status === 'Rent');
        setFilterHouses(filtered);
    }

    // Function to sort houses by price
    const sortByPrice = () => {
        const sorted = [...filterHouses].sort((a, b) => a.price - b.price);
        setFilterHouses(sorted);
    }

    // Function to sort houses by area
    const sortByArea = () => {
        const sorted = [...filterHouses].sort((a, b) => a.area - b.area);
        setFilterHouses(sorted);
    }

    return (
        <div>
            {/* filter by category */}
            <div className="text-center mt-16">
                <h2 className="text-4xl font-bold text-[#23BE0A]">Explore Real Estate Listings</h2>
                <p className="mt-4">Discover a wide range of real estate options tailored to your preferences. Filter by property type, sort by price or area, and find your perfect home or investment opportunity with ease.</p>
            </div>
            <div className="flex max-md:flex-col  w-11/12 mx-auto border-2 border-[#23BE0A] rounded-2xl bg-gray-100 justify-center items-center gap-20 mt-5 p-10">
                <div className="text-center">
                    <details className="dropdown w-64">
                        <summary className="m-1 btn bg-[#23BE0A] text-white w-full">Category
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 border-2 border-[#23BE0A] rounded-box w-52">
                            <li><button onClick={filterBySingleFamily}>Single-family homes</button></li>
                            <li><button onClick={filterByApartments}>Apartments</button></li>
                            <li><button onClick={filterByStudentHousing}>Student Housing</button></li>
                            <li><button onClick={filterBySeniorLivingCommunities}>Senior living communities</button></li>
                            <li><button onClick={filterByVacationRentals}>Vacation Rentals</button></li>
                        </ul>
                    </details>
                </div>
                {/* short by Type */}
                <div className="text-center ">
                    <details className="dropdown w-64 ">
                        <summary className="m-1 btn bg-[#23BE0A] text-white w-full">Sort By
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 border-2 border-[#23BE0A] rounded-box w-52">
                            <li><button onClick={sortByPrice}>Price</button></li>
                            <li><button onClick={sortByArea}>Area</button></li>
                        </ul>
                    </details>
                </div>
                {/* filter by status */}
                <div className="text-center ">
                    <details className="dropdown w-64 ">
                        <summary className="m-1 btn bg-[#23BE0A] text-white w-full">Sale / Rent
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 border-2 border-[#23BE0A] rounded-box w-52">
                            <li><button onClick={filterForSale}>For Sale</button></li>
                            <li><button onClick={filterForRent}>For Rent</button></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div>
                <div className="my-20 text-center">
                    <h2 className="text-4xl font-bold text-[#23BE0A]">Filtered Property Listings</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  w-11/12 mx-auto ">
                    {
                        filterHouses.map((house, index) => <Cards key={index} house={house}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Resident;
