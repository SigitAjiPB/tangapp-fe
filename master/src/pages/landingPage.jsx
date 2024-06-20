
import { Routes,Route, Link, } from 'react-router-dom';
import { useState, useEffect,  } from 'react';
import Billing from '../components/billing';
// import Calendar from '../components/calendar';
import Home from '../components/home';
import About from '../components/about';
import logo from '../assets/logo.png';
import team from '../assets/team.svg';
import Eventform from '../components/eventForm';
import general from '../assets/general.svg';
import billing from '../assets/billing.svg';
import invoice from '../assets/invoice.svg';
import account from '../assets/account.svg';
import sidebtn from '../assets/sidebtn.svg';

// import MemberForm from '../components/memberForm';

 function LandingPage() {
  

  // first content will mount after 500ms
  const [main, setMain] = useState(<Home/>);

  useEffect(() => {
    const timer = setTimeout(() => {
      switch(main) {
        case <Home/>:
          return setMain(<Home/>)
        case <About/>:
          return setMain(<About/>)
        case <Billing/>:
          return setMain(<Billing/>)
        case <Eventform/>:
          return setMain(<Eventform/>)
        default:
          return setMain(<Home/>)  
      }

    }, 1000);

    return clearTimeout(timer) //clear timeout when component unmount
  }, [main, setMain]);

    return (
    <div className="flex">


{/* Side Bar */}
        <div className="lg:flex h-screen flex-col justify-between border-e bg-white sticky top-0 left-0 drop-shadow-md hidden min-w-max">
          <div className="px-4 py-6 divide-y">
            <div className='flex justify-between items-center gap-10'>

            <Link 
            to= "../components/home"
            onClick={()=> setMain(<Home/>)}
            className="grid h-10 w-32 place-content-center rounded-lg bg-sky-400 text-xs text-gray-600">
              <img 
              src={logo}
              alt="tangapp-logo"
              className='h-10'
              />
            </Link>
            <button>
              <img 
              src={sidebtn} 
              alt="sidebtn" 
              className='h-10 hover:rotate-180 transition-all duration-300'
              />
            </button>
            </div>

            <ul className="mt-6 space-y-1">
              <li>
                <a
                  href="#"
                  className="rounded-lg text-gray-500 hover:bg-gray-100 px-4 py-2 text-sm font-medium hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 flex justify-between items-center"
                >
                  <p>General</p>
                  <img 
                  src={general} 
                  alt="general" 
                  className='h-6'
                  />
                  
                </a>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> Teams </span>
                    <div className='flex gap-2'>
                    <img 
                  src={team} 
                  alt="team" 
                  className='h-6'
                  />

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    </div>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Banned Users
                      </a>
                    </li>

                    <li>
                      <Link
                        to="../components/calendar"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Calendar
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link 
                  onClick={()=> setMain(<Billing/>)}
                  to="../components/billing" 
                  className=" rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 flex justify-between items-center">
                    <p>Billing</p>
                    <img 
                    src={billing} 
                    alt="billing" 
                    className='h-6'
                    />
                </Link>
                

              </li>

              <li>
                <a
                  href="#"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 flex justify-between items-center"
                >
                  <p>Invoice</p>
                  <img 
                  src={invoice} 
                  alt="invoice" 
                  className='h-6'
                  />
                </a>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> Account </span>
                    <div className='flex gap-2'>
                    <img 
                    src={account} 
                    alt="account" 
                    className='h-6'
                    />

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    </div>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Details
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Security
                      </a>
                    </li>

                    <li>
                      <form action="#">
                        <button
                          type="submit"
                          className="w-full bg-red-500 rounded-lg px-4 py-2 text-sm font-medium text-white [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                        >
                          Logout
                        </button>
                      </form>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 w-full">
            <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
              <img
                alt=""
                src="../src/assets/yy.jpg"
                className="size-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">Sigit</strong>

                  <span> Sigit@blockfuirt.com </span>
                </p>
              </div>
            </a>
          </div>
        </div>
{/* End Side Bar */}

{/* Hero */}
        <div className='w-screen'>
          {/* Announcement */}
          {/* <div className="flex items-center justify-between gap-4 bg-sky-400 px-4 py-3 text-white">
            <p className="text-sm font-medium">
              Mulailah mencatat hutang di <a href="#" className="inline-block underline"> Tangapp</a>
            </p>

            <button
              aria-label="Dismiss"
              className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
          {/* End Announcement */}

          {/* Header */}
          <header className="bg-white drop-shadow-md z-10 sticky top-0 ">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

                <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-lg">
                    <li>
                        <Link 
                        className="text-sky-400 transition hover:text-sky-400/75" 
                        href="#"
                        to='../components/about'
                        onClick={()=> setMain(<About/>)}
                        > About </Link>
                    </li>

                    <li>
                        <a className="text-sky-400 transition hover:text-sky-400/75" href="#"> Careers </a>
                    </li>

                    <li>
                        <a className="text-sky-400 transition hover:text-sky-400/75" href="#"> History </a>
                    </li>

                    <li>
                        <a className="text-sky-400 transition hover:text-sky-400/75" href="#"> Services </a>
                    </li>

                    <li>
                        <a className="text-sky-400 transition hover:text-sky-400/75" href="#"> Projects </a>
                    </li>

                    <li>
                        <a className="text-sky-400 transition hover:text-sky-400/75" href="#"> Blog </a>
                    </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <Link
                        className="block rounded-md bg-sky-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-700"
                        to='/login'>Login</Link>

                    <a
                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-400 transition hover:text-sky-600/75 sm:block"
                        href="#"
                    >
                        Register
                    </a>
                    </div>

                    <button
                    className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </header>
          {/* End Header */}
        <main id='main'>
          {main}
        </main>

        <Routes>
            {/* <Route path='components/home/*' element={<Home/>}></Route> */}
            {/* <Route path="components/billing" element={<Billing />} /> */}
            {/* <Route path="components/calendar" element={<Calendar />} /> */}
            {/* <Route path='components/about' element={<About/>}></Route> */}
            <Route path='components/eventForm' element={<Eventform/>}></Route>
            {/* <Route path='components/memberForm' element={<MemberForm/>}></Route> */}
        </Routes>
        </div>
{/* End Hero */}


    </div>
      )
}

export default LandingPage