import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getHome = () =>{
    const storedHouse = localStorage.getItem('house')
    if(storedHouse){
        return JSON.parse(storedHouse)
    }
    return[]
}

const saveHome = id => {
    const savedHouse = getHome()
    const exist = savedHouse.find(b => b === id)
    if (exist) {
        return toast.warn("Already Booked!");
    }
    savedHouse.push(id)
    localStorage.setItem('house', JSON.stringify(savedHouse))
    toast.success("Booking Successful.")
}

const eraseHome = () => {
    localStorage.removeItem('house');
    toast.info("Booked houses Removed.");
}

export {getHome, saveHome, eraseHome}