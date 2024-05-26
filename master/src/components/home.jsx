import yui from '../assets/apaa.png'


export default function Home () {
  return (
    <div>
      {/* Yui Beban */}
      <div className="bg-sky-400 h-[25rem] -skew-y-6 flex justify-center items-center relative -top-28  sm:-top-56  sm:h-[25rem] md:h-[35rem] lg:h-[50rem]">
          <div className="absolute bottom-0 px-6 text-white flex flex-row">
              <img src={yui} alt="yui" className="h-44 object-cover sm:h-[15rem] md:h-[20rem] lg:h-[25rem]" />
              <div className="sm:flex sm:flex-col sm:justify-center skew-y-6">
              <p className="text-2xl font-bold sm:text-[2rem] md:text-4xl lg:text-5xl text-wrap">
                  STOP MENCATAT <br />    
                  <span className="text-red-500">HUTANG</span> DI KEPALA!
              </p>
              <p className="text-[0.8rem] lg:text-2xl">
                  B-Bergabung bersama TanggApp, dan mulailah mencatat hutang piutang mu.
              </p>

              </div>
          </div>
      </div>
      {/* END yui Beban */}
      <div className=" flex flex-wrap justify-center gap-4 mb-10 px-8">
        <a
          className="block w-full rounded bg-sky-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-500 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-sky-400 shadow hover:text-sky-500 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>

    </div>
  )
}