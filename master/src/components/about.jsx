import yui from '../assets/apaa.png'
import aboutBg1 from '../assets/about-bg4.jpg'

export default function About () {
    return (
        <div>
            <div 
            className='bg-cover bg-center h-screen'
            style={{ backgroundImage: `url(${aboutBg1})` }}
            >
                    
                {/* Yui Beban */}
                {/* <div className="bg-sky-400 h-[25rem] -skew-y-6 flex justify-center items-center relative -top-28  sm:-top-56  sm:h-[25rem] md:h-[35rem] lg:h-[50rem] -z-10">
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
                </div> */}
                {/* END yui Beban */}
                <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2 lg:gap-10">
                    <div className="h-32 rounded-lg">
                        <p className=' p-6 rounded-lg text-white font-bold'>Selamat datang di Tangapp, sebuah aplikasi yang kami kembangkan dengan tujuan untuk mempermudah Anda dalam mencatat dan mengelola hutang antar perorangan. Kami memahami bahwa dalam berbagai acara rutin seperti bermain bulutangkis, memasak bersama, atau kegiatan lainnya, seringkali ada kebutuhan untuk berbagi biaya dan meminjam uang. Tangapp hadir untuk membantu Anda mengatasi masalah lupa mencatat hutang yang mungkin terjadi.</p>
                    </div>
                    <div className="h-32 rounded-lg bg-gray-200">
                        <p>Tangapp adalah solusi inovatif yang dirancang untuk mencatat hutang, mengelola keuangan, dan meminimalisir risiko lupa terhadap hutang. Selain fitur pencatatan hutang, kami juga akan menambahkan berbagai fitur lain seperti kalender yang memungkinkan Anda menambahkan jadwal acara atau event yang akan diadakan.</p>
                    </div>
                    <div className="h-32 rounded-lg bg-gray-200">
                        <p>Tangapp adalah solusi inovatif yang dirancang untuk mencatat hutang, mengelola keuangan, dan meminimalisir risiko lupa terhadap hutang. Selain fitur pencatatan hutang, kami juga akan menambahkan berbagai fitur lain seperti kalender yang memungkinkan Anda menambahkan jadwal acara atau event yang akan diadakan.</p>
                    </div>
                    <div className="h-32 rounded-lg bg-gray-200">
                        <p>Tangapp adalah solusi inovatif yang dirancang untuk mencatat hutang, mengelola keuangan, dan meminimalisir risiko lupa terhadap hutang. Selain fitur pencatatan hutang, kami juga akan menambahkan berbagai fitur lain seperti kalender yang memungkinkan Anda menambahkan jadwal acara atau event yang akan diadakan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}