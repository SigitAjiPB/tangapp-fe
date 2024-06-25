import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import logo from '../assets/logo.png'

export default function Eventform () {
    return (
        <section className="bg-gray-50">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
        
            <div className="hidden lg:relative lg:block lg:p-12">
                <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                {/* <img className='h-16 bg-sky-400' src={logo} alt="logo" /> */}
                </a>
        
                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Tangapp
                </h2>
        
                <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
                </p>
            </div>
            </section>
        
            <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                <a
                    className="inline-flex size-16 items-center justify-center rounded-full bg-sky-400 text-blue-600 sm:size-20"
                    href="#"
                >
                    <span className="sr-only">Home</span>
                    <img src={logo} alt="logo" />
                </a>
        
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Welcome to Tangapp
                </h1>
        
                <p className="mt-4 leading-relaxed text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                    quibusdam aperiam voluptatum.
                </p>
                </div>
        
                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                    {/* Nama Event */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="EventName" className="block text-sm font-medium text-gray-700">
                        Name Event:
                        </label>
            
                        <input
                        type="text"
                        id="eventName"
                        name="event_name"
                        className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                        />
                    </div>
                    {/* End Nama Event */}
                    
                    {/* Type Event */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="EventType" className="block text-sm font-medium text-gray-700">
                        Event Type:
                        </label>
            
                        <input
                        type="text"
                        id="eventType"
                        name="event_type"
                        className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                        />
                    </div>
                    {/* End Type Event */}

                    {/* Orgenizer */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="EventType" className="block text-sm font-medium text-gray-700">
                        Orgenizer:
                        </label>
            
                        <input
                        type="text"
                        id="orgenizer"
                        name="orgenizer"
                        className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                        />
                    </div>
                    {/* End Orgenizer */}

                    {/* Desc */}
                    <div className="col-span-6">
                    <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> Description: </label>

                    <textarea
                        id="OrderNotes"
                        className="p-2 mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm outline-none"
                        rows="4"
                        placeholder="Have any description for your event?"
                    ></textarea>
                    </div>
                    {/* End Desc */}
        
                    {/* Participant */}
                    <div className='col-span-2'>
                        <label htmlFor="Quantity" className=" block text-sm font-medium text-gray-700"> Participant: </label>

                        <div className="px-2 flex items-center border-gray-200 bg-white text-sm text-gray-700 shadow-sm mt-1 rounded-md">
                            <button type="button" className="flex   justify-center items-center  text-gray-600 transition hover:opacity-75">
                            <img src={minus} alt="minus" className='h-6'/>
                            </button>

                            <input
                            type="number"
                            id="Quantity"
                            className="outline-none p-2 w-full border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />

                            <button type="button" className="flex   justify-center items-center  text-gray-600 transition hover:opacity-75">
                            <img src={plus} alt="plus" className='h-6'/>
                            </button>
                        </div>
                    </div>
                    {/* End Participant */}
    
                    {/* Date */}
                    <div className="col-span-4 sm:col-span-4">
                        <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                        Date:
                        </label>
            
                        <input
                        type="date"
                        id="EventDate"
                        name="event_date"
                        className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                        />
                    </div>
                    {/* End Date */}
        
                    {/* Check Box */}
                    <div className="col-span-6">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                        />
            
                        <span className="text-sm text-gray-700">
                            Hide from event listings?
                        </span>
                        </label>
                    </div>
                    {/* End Check Box */}
        
                <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                    ❗If you have checked it, the event will not be displayed in the event list.
                    </p>
                </div>
        
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                    className="inline-block shrink-0 rounded-md border border-sky-400 bg-sky-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
                    >
                    Create an event
                    </button>
                </div>
                </form>
            </div>
            </main>
        </div>
        </section>
    )

}