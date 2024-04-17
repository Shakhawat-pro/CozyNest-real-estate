import { useEffect } from "react";

const Contact = () => {
    useEffect(()=>{
        document.title = 'Contact Us'
    })
    return (
        <div data-aos="fade-up" data-aos-delay="60">
            <section className="bg-gray-50 pt-16 ">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md border-2 bg-white border-[#23BE0A] rounded-xl">
                    <h2 data-aos="fade-left" data-aos-delay="50" className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#23BE0A]   ">Contact Us</h2>
                    <p data-aos="fade-left" data-aos-delay="50" className="mb-8 lg:mb-16 font-light text-center text-black  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form className="space-y-8">
                        <div data-aos="fade-left" data-aos-delay="50">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#23BE0A]    focus:border-[#23BE0A]    block w-full p-2.5      " placeholder="name@gmail.com" required/>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="50">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#23BE0A]    focus:border-[#23BE0A]         " placeholder="Let us know how we can help you" required/>
                        </div>
                        <div   className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#23BE0A]    focus:border-[#23BE0A]      dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button  type="submit" className="btn w-full bg-[#23BE0A] text-white">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;