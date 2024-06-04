import eyesIcon from "../assets/eye-svgrepo-com.svg"
export default function Billing() {
    return (
        <div className="px-4 my-4 min-w-min">
            {/* Tittle Page */}
            <div className="flex items-center">
                <p className="text-4xl text-slate-600">Billing <span className="text-lg text-slate-400">control panel</span></p>
            </div>
            {/* End Tittle Page */}



            {/* Stats */}
            {/* <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8">

                    <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="drop-shadow-md flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Utang Patur</dt>

                        <dd className="text-4xl font-extrabold text-red-400 md:text-5xl">$4.8m</dd>
                        </div>

                        <div className="drop-shadow-md flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Orang Terjual</dt>

                        <dd className="text-4xl font-extrabold text-sky-400 md:text-5xl">24</dd>
                        </div>

                        <div className="drop-shadow-md flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Organ Laris</dt>

                        <dd className="text-4xl font-extrabold text-sky-400 md:text-5xl">86</dd>
                        </div>
                    </dl>
                    </div>
                </div>
            </section> */}
            {/*  End Stats */}

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border shadow-lg mt-10 pt-8 ">
                <div className="px-6 mt-">
                    <div>
                        <p className="text-2xl font-bold text-slate-600">Current Events</p>
                    </div>
                    <div className="flex items-center justify-between">

                        {/* Search Input */}
                        <div className="relative w-[20rem] mt-10">
                        <label htmlFor="Search" className="sr-only"> Search </label>
              
                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for..."
                            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-md sm:text-sm outline-none pl-2"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                            </button>
                        </span>
                        </div>
                        {/* End Search Input */}
                    </div>
                </div>
                

                <table className="min-w-full table-auto divide-y-2 divide-gray-200 bg-white text-sm mt-10 ">
                    <thead className="ltr:text-left rtl:text-right">
                    <tr className="font-sans">
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 m-2">No</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 m-2">Event Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 m-2">Event Date</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 m-2">Member</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 m-2">Total cost</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 m-2">Action</th>

                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Dapur jorok Season 1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Dapur Jorok S3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Dapur Jorok S4</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Bull tank</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Dapur Jorok S9</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Dapur Jorok S5</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Dapur Jorok S2</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>
                    <tr className="odd:bg-sky-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">1</div></td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><div className="flex justify-center">Dapur Jorok S6</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700" ><div className="flex justify-center">24/05/1995</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">3</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div className="flex justify-center">Rp120,000</div></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
                            <button className="bg-sky-400 rounded-md p-2 font-bold text-cyan-50 m-2"><img src={eyesIcon} alt="mata" className="h-5"/></button>
                        </td>

                    </tr>


                    </tbody>
                </table>
            </div>
            {/* End Table */}
        </div>
    )
}