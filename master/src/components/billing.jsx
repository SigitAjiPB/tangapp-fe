export default function Billing() {
    return (
        <div className="px-4 mt-4">
            {/* Tittle Page */}
            <div className="flex items-center gap-4">
                <p className="text-4xl text-slate-600">Billing <span className="text-lg text-slate-400">control panel</span></p>
                
            </div>
            {/* End Tittle Page */}



            {/* Stats */}
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8">

                    <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Utang Patur</dt>

                        <dd className="text-4xl font-extrabold text-red-400 md:text-5xl">$4.8m</dd>
                        </div>

                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Orang Terjual</dt>

                        <dd className="text-4xl font-extrabold text-sky-400 md:text-5xl">24</dd>
                        </div>

                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Organ Laris</dt>

                        <dd className="text-4xl font-extrabold text-sky-400 md:text-5xl">86</dd>
                        </div>
                    </dl>
                    </div>
                </div>
            </section>
            {/*  End Stats */}

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 mt-10">
                <div className="px-6 mt-4">
                    <div>
                        <p className="text-2xl text-slate-600">Current Member</p>
                    </div>
                    <div className="flex items-center justify-between">
                        {/* Entries*/}
                        <div className="mt-6">
                        <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                        <div className="flex items-center gap-1">
                            <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">Show
                            </button>

                            <input
                            type="number"
                            id="Quantity"
                            value=""
                            className="h-8 w-24 rounded border border-gray-400 sm:text-sm outline-none pl-2"
                            />

                            <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">Entries
                            </button>
                        </div>
                        </div>
                        {/* End Entries*/}

                        {/* Search Input */}
                        <div className="relative w-[20rem]">
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

                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-10">
                    <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Debt</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Debt</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Sigit</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Front End</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pathur</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Attacker</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ripqi</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">All-Rounder</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ilham</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/2100</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Defender</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$22,000</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            {/* End Table */}
        </div>
    )
}