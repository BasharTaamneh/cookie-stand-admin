// import React, { useState } from "react";

export default function Form({ handleSubmit }) {

    return (
        <>

            <form onSubmit={handleSubmit} className="flex justify-center w-11/12 p-2 overflow-x-auto bg-green-200 rounded shadow-2xl h-72">
                <div className="w-full">


                    <br />

                    <div className="inline-block float-left w-8/12 ">

                        
                        <label className="block mb-2 text-lg font-bold text-black-100" htmlFor="Location " >
                            ADD LOCATION
                        </label>
                        <input 
                            className="justify-center w-10/12 h-auto pl-4 mb-4 mr-6 text-lg font-normal text-gray-800 rounded"
                            id="Location"
                            type="text"
                            name="Location"
                            placeholder="Cookie Stand Location"
                            required
                        />
                    </div>
                    
                    <div className="block ">
                        <button
                            className="relative inline-block font-bold text-black right-8" 
                        >
                            <div className="absolute h-full bg-green-700 border rounded-lg -inset-x-0 inset-y-2 -buttom-2"></div>

                            <div className="relative px-6 py-4 duration-150 transform bg-green-500 border border-gray-500 rounded-lg shadow-2xl w-96 transision hover:translate-y-2">Create Stand</div>
                        </button>
                    </div>
                    <br />

                    <div className="flex justify-between pt-8">

                        <div className="block ml-14">
                            <label className="block mb-2 text-sm font-bold text-black-100" htmlFor="MINCPH " >
                                MINIMUM CUSTMORE PER HOUR
                            </label>

                            <input 
                                className="justify-center  p-1 text-lg font-normal text-gray-7=800 rounded w-64 "
                                id="MINCPH"
                                type="number"
                                min="0"
                                name="minCustomers"
                                required
                            />
                        </div>

                        <div className="block ">
                            <label className="block mb-2 text-sm font-bold text-black-100" htmlFor="MAXCPH">
                                MAXIMUM CUSTMORE PER HOUR
                            </label>

                            <input 
                                className="justify-center  p-1 text-lg font-normal text-gray-7=800 rounded w-64 "
                                id="MAXCPH"
                                type="number"
                                min="0"
                                name="maxCustomers"
                                required
                            />
                        </div>

                        <div className="block mr-28">
                            <label className="block mb-2 text-sm font-bold text-black-100" htmlFor="AVCPS">
                                AVEREGE COOKIE PER SALE
                            </label>

                            <input 
                                className="justify-center p-1 text-lg font-normal text-gray-7=800 rounded w-64 "
                                id="AVCPS"
                                type="number"
                                min="0"
                                name="avgCookies"
                                step="0.01"
                                required
                            />
                        </div>

                        

                    </div>

                </div>

            </form>

        </>
    )
}
