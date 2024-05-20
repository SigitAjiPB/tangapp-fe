import yui from '../assets/apaa.png'

export default function About () {
    return (
        <div>
            <div>
                {/* Yui Beban */}
                <div className="bg-sky-400 h-[45rem] -skew-y-6 flex justify-center items-center relative -top-20 sm:h-[25rem] md:h-[35rem] lg:h-[35rem] -z-10">
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
            </div>
        </div>
    )
}