// import React, { useState } from "react";

import Footer from "./Footer"
import { hours } from "../data"

import Form from "./CreateForm"
import ReportTable from "./ReportTable"
import useResource from "../hooks/useResource"
import { useAuth } from "../contexts/auth"
export default function CookieStandAdmin() {
    const { user } = useAuth()
    const { resources, loading, createResource } = useResource();
 
    
    function handleSubmit(event) {
        event.preventDefault()
        
        const cookieStand = {
            location: event.target.Location.value,
            id: resources.length,
            description: "Cookie Stand Details",
            hourly_sales: calculateHourlySales(event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgCookies.value),
            minimum_customers_per_hour: parseInt(event.target.minCustomers.value),
            maximum_customers_per_hour: parseInt(event.target.maxCustomers.value),
            average_cookies_per_sale: parseInt(event.target.avgCookies.value),
            owner: user.id,
        }

        createResource(cookieStand)
        event.target.reset()
    }

    function calculateHourlySales(minSales, maxSales, avgCookies) {
        let hourly_sales = []
        for (let i = 0; i < hours.length; i++) {
            hourly_sales[i] = (Math.floor(Math.random() * (parseInt(maxSales) - parseInt(minSales) + 1) + parseInt(minSales))) * avgCookies
        }
        return hourly_sales
        
    }

   

    return (
        <>
            {/* ////////////////////////////////////////////////////// */}
            < div className="flex flex-col items-center justify-center flex-1 w-full h-full text-center " >
                <Form handleSubmit={handleSubmit} />
                {loading ? <h2 className="h-10 my-10 text-3xl font-bold text-gray-700"> Fetching Data from API... </h2> : <ReportTable hours={hours}/>}
                {loading  ? <Footer standsCount={""} />: <Footer standsCount= {resources.length}/>}
            </div >
            {/* //////////////////////////////////////////////////////// */}
        </>
    )

}
