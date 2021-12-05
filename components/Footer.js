
export default function Footer({standsCount}){
    return (
        <div className="z-50 flex mt-20 shadow-2xl pt-9">
            <footer className="fixed inset-x-0 bottom-0 flex justify-center p-3 text-center bg-green-600 ">
                <b className="text-lg font-bold text-gray-900"> {standsCount} Locations Wolrd Wide </b>
        </footer>
        </div>
    )
}
