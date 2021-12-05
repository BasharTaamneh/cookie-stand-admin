import { useEffect } from 'react';
import useResource from '../hooks/useResource'

export default function ReportTable({hours}) {
    const { resources, loading, deleteResource } = useResource();
    function CreateReportTable() {
        
        let locationsales = []
        for (let i = 0; i < resources.length; i++) {
            locationsales.push(resources[i].hourly_sales)
            
            let totalsArray = []
            for (let i = 0; i < locationsales[0].length; i++) {
                // console.log(locationsales);
                let hourlyTotal = 0
                for (let location in locationsales) {
                    hourlyTotal += locationsales[location][i]
                    totalsArray[i] = hourlyTotal
                }
            }
        }
        useEffect(() => {

        }, [resources])
        return (
            <div className="flex w-11/12 overflow-x-auto ...">
                <table className="flex-center ... w-full  py-10 my-12 border-r  md:px-32  bg-green-600">
                    <thead className="bg-green-600 border-b border-gray-800 ">
                        <tr>
                            <th>Location</th>
                            <th></th>
                            {hours.map(hour =>

                                <th >{hour}</th>

                            )}
                            
                            <th>Totals</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resources.map(value =>
                            <tr key={value.id} className=" odd:bg-green-400 even:bg-green-200" >
                                
                                <td className="pl-2 pr-10 text-lg font-semibold text-left border-b border-l border-gray-700">{value.location}
                                </td>
                                
                                <td className="justify-center ">
                                    <button className="justify-center block " onClick={() => { deleteResource(value.id) }}>  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 " fill="none" viewBox="0 0 24 24" stroke="red">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </button>
                                </td>
                               

                                
                                {value.hourly_sales.map(sale =>
                                    <td className="text-lg border-b border-l border-r border-gray-600"> {sale.toFixed(2)}</td>
                                )}
                                <td className="text-lg border-b border-r border-gray-600">{(value.hourly_sales.reduce(function (a, b) { return a + b; }, 0)).toFixed(2)}</td>
                                
                            </tr>
                        )}
                    </tbody>
                    <tfoot className="bg-green-600 border-t border-b border-gray-700">
                        <tr>
                            <th className="border-gray-600 ">Totals</th>
                            <th></th>
                            {totalsArray.map(sale =>
                                <th className="border-l border-r border-gray-600"> {sale.toFixed(2)} </th>
                            )}
                            <th className="border-r border-gray-600 ">{(totalsArray.reduce(function (a, b) { return a + b; }, 0)).toFixed(2)} </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
 
    return (
        <>
            {!loading ? (resources.length > 0 ? <CreateReportTable /> : <h2 className="h-10 my-10 text-3xl font-bold text-gray-700">No Cookie Stands Available</h2>) : <h2 className="h-10 my-10 text-3xl font-bold text-gray-700"> Fetching Data from API... </h2>}
        </>
    )
   
}