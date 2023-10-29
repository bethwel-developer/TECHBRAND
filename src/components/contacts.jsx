import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';



const Contact = () => {
  return (
    <div class="max-w-screen-lg mx-auto pt-40">
    <div class="grid  grid-cols-1 md:grid-cols-12 border-2 rounded mt-0 ">
        <div class=" md:col-span-4 p-10 ">
            <p class="mt-4 text-xl leading-7 font-regular uppercase">
                Contact
            </p>
            <h3 class="text-3xl sm:text-4xl  font-extrabold ">
                Get In <span class="text-[blue]">Touch</span>
            </h3>
            <p class="mt-4 leading-7 ">
                Receive help from our agents anytime via live chat support
                Follow step-by-step video walkthroughs and guides.
                Access a vast knowledgebase of in-depth tutorials.
            </p>

            <div class="flex items-center mt-16">
            <span class="  text-[blue]  text-[20px] mr-2"><FaEnvelope/></span> 

                <span class="text-sm">Bethwelnjenga83@gmail.com</span>
            </div>
            <div class="flex items-center mt-5">
            <span class="  text-[blue]  text-[20px] mr-2"><FaPhone/></span>  
                <span class="text-sm">0748749361</span>
            </div>
          

        </div>
        <form class="md:col-span-8 p-10">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="first name"/>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Last name"/>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email Address
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" type="email" placeholder="********@*****.**"/>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                    <div class="md:flex md:items-center">
                       
                    </div>
                    <button
                        class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                        Send Message
                    </button>
                </div>

            </div>

        </form>

    </div>
</div>
  );
}

export default Contact;
