
import { Routes, Route, Link } from 'react-router-dom';
import yui from '../assets/apaa.png'
import eventLogo from '../assets/event.svg'

import 'aos/dist/aos.css';
import Gabuts from '../pages/gabuts';
import Footer from '../components/footer'
// import Eventform from '../components/eventForm';


export default function Home() {
  
  return (
    <div>
      {/* CTA */}
      <div>
      {/* Yui Beban */}
        <div className="bg-sky-400 h-[23rem] -skew-y-6 flex justify-center items-center relative -top-28  sm:-top-32  sm:h-[25rem] md:h-[30rem] lg:h-[37rem] -z-10">
          <div className="absolute bottom-0 px-6 text-white flex flex-row">
              <img src={yui} alt="yui" className="h-44 object-cover sm:h-[15rem] md:h-[20rem] lg:h-[25rem]" />
                <div  className="sm:flex sm:flex-col sm:justify-center skew-y-6">
                  <p data-aos="fade-up" className="text-2xl font-bold sm:text-[2rem] md:text-4xl lg:text-5xl text-wrap">
                  STOP MENCATAT <br />    
                  <span className="text-red-500">HUTANG</span> DI KEPALA!
              </p>
                  <p  data-aos="fade-up" className="text-[0.8rem] lg:text-2xl">
                  B-Bergabung bersama TanggApp, dan mulailah mencatat hutang piutang mu.
              </p>

              </div>
          </div>
      </div>
      {/* END yui Beban */}

        {/* Get Started */}
        <div className=" flex flex-wrap justify-center gap-4 mb-10 px-8 ">
        <Link
            className="flex justify-center items-center w-full rounded bg-sky-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-500 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto drop-shadow-md"
            to='/gabuts'
        >
            Start Now - It's Free
        </Link> 

        <a
            className="flex justify-center items-center w-full rounded px-12 py-3 text-sm font-medium text-sky-400 shadow hover:text-sky-500 focus:outline-none focus:ring active:text-sky-500 sm:w-auto drop-shadow-md"
          href="#"
        >
            Learn More About Us
          <img src="" alt="" />
        </a>
      </div>
        {/*End Get Started */}
      </div>
      {/* End CTA */}

      {/* Carding */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-8">
        <Link 
        
        data-aos="fade-up" 
        className=" rounded-lg drop-shadow-lg"
        // onClick={()=> setMain(<Eventform/>)}
        // to= '../components/eventForm'
        >
          <article
            className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
          >
            <span className="inline-block">
              <img 
              src={eventLogo} 
              alt="eventLogo"
              className='h-10'
               />
            </span>

            <div>
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                Buat Event Bersama Tangapp
              </h3>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Buat event mu lebih berkesan bersama Tanggap
            </p>

            <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-400">
              Buat Event

              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </div>
          </article>
        </Link>
        {/* <Navigation/> */}

        <div data-aos="fade-up" className=" rounded-lg drop-shadow-lg">
          <article
            className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
          >
            <span className="inline-block">
              <img 
              src={eventLogo} 
              alt="eventLogo"
              className='h-10'
               />
            </span>

            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                Buat Event Bersama Tangapp
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Buat event mu lebih berkesan bersama Tanggap
            </p>

            <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-400">
              Buat Event

              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </article>
        </div>

        <div data-aos="fade-up" className=" rounded-lg drop-shadow-lg">
          <article
            className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
          >
            <span className="inline-block">
              <img 
              src={eventLogo} 
              alt="eventLogo"
              className='h-10'
               />
            </span>

            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                Buat Event Bersama Tangapp
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Buat event mu lebih berkesan bersama Tanggap
            </p>

            <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-400">
              Buat Event

              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </article>
        </div>

      </div>
      {/* End Carding */}

      {/* Footer */} 
      <Footer/>
      {/* End Footer */}




      <Routes>
        <Route path='components/gabut' element={<Gabuts></Gabuts>}/>
        {/* <Route path='components/eventForm' element={<Eventform></Eventform>}/> */}
        {/* <Route path='components/memberForm' element={<MemberForm></MemberForm>}/> */}
      </Routes>
    </div>
  )
}
