
import Footer from '../components/footer'
import logo from '../assets/logo.png'
import aboutBg1 from '../assets/about-bg4.jpg'
import profileEmber from '../assets/ember.jpg'
import profileFait from '../assets/fait.jpg'
import profileYumiko from '../assets/yumiko.jpg'
import 'aos/dist/aos.css';

export default function About () {
    return (
        <div>
            {/* About Top */}
            <div 
            className='bg-cover bg-center p-8 min-h-min '
            style={{ backgroundImage: `url(${aboutBg1})` }}
            >
                {/* About Text */}
                <div>
                    <img 
                    src={logo}
                    alt="tangapp-logo"
                    className='h-20'/>
                </div>
                <div className="grid p-6 grid-cols-1 gap-4 lg:grid-cols-2">
                    <div data-aos="fade-up" className="rounded-lg col-span-1 ">
                        <p className='bg-white bg-opacity-5 backdrop-blur-sm shadow-lg p-2 rounded-lg text-xl text-white font-bold min-w-min'>Selamat datang di Tangapp, sebuah aplikasi yang kami kembangkan dengan tujuan untuk mempermudah Anda dalam mencatat dan mengelola hutang antar perorangan. Kami memahami bahwa dalam berbagai acara rutin, seringkali ada kebutuhan untuk berbagi biaya dan meminjam uang. <img src={logo} alt="tangapp-logo" className='h-10 inline'/> hadir untuk membantu Anda mengatasi masalah lupa mencatat hutang yang mungkin terjadi.</p>
                    </div>
                    <div data-aos="fade-up" className="rounded-lg lg:row-start-2 lg:col-start-2">
                        <p className= ' bg-white bg-opacity-5 backdrop-blur-sm shadow-lg p-2 rounded-lg text-xl text-white font-bold'>Tangapp adalah solusi inovatif yang dirancang untuk mencatat hutang, mengelola keuangan, dan meminimalisir risiko lupa terhadap hutang. Selain fitur pencatatan hutang, kami juga akan menambahkan berbagai fitur lain seperti kalender yang memungkinkan Anda menambahkan jadwal acara atau event yang akan diadakan.</p>
                    </div>
                </div>
                {/* End About Text */}
            </div>
            {/* END About Top */}

            {/* Divider */}
            <span className="relative flex justify-center py-20">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                <span className="relative z-10 bg-white px-6 text-2xl">Meat our Team</span>
            </span>
            {/* End Divider */}

            {/* Card */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-20 px-10">
                {/* Fathur */}
                <div data-aos="fade-up" className=" rounded-lg bg-gray-200 overflow-hidden">
                    <a href="#" className="group relative block bg-black">
                <img
                    alt=""
                    src= {profileEmber}
                    className="absolute inset-0 h-full w-full object-top opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-sky-500">Back-End Developer</p>

                    <p className="text-xl font-bold text-white sm:text-2xl">Fathur. K</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                        Mengubah logika kompleks menjadi solusi yang efisien, Membangun fondasi kuat untuk aplikasi yang handal, Ahli dalam desain arsitektur sistem dan integrasi API.
                        </p>
                    </div>
                    </div>
                </div>
                    </a>
                </div>
                {/* End Fathur */}

                {/* Sigit */}
                <div data-aos="fade-up" className=" rounded-lg overflow-hidden ">
                    <a href="#" className="group relative block bg-black h-full">
                        <img
                            alt=""
                            src={profileYumiko}
                            className="absolute inset-0 h-full w-full object-fill object-top opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-sky-500">Front-End Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Sigit. A</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                Berfokus pada detail dan pengalaman pengguna untuk membuat website yang intuitif dan mudah digunakan.
                                </p>
                            </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* End Sigit */}

                {/* Rifqi */}
                <div data-aos="fade-up" className="rounded-lg bg-gray-200 overflow-hidden">
                    <a href="#" className="group relative block bg-black h-full">
                <img
                    alt=""
                    src={profileFait}
                    className="absolute inset-0 h-full w-full object-top opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-sky-500">Back-End Developer</p>

                    <p className="text-xl font-bold text-white sm:text-2xl">Rifqi. F</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                        Mengoptimalkan performa backend untuk pengalaman pengguna terbaik, Menciptakan backend yang solid dan scalable.
                        </p>
                    </div>
                    </div>
                </div>
                    </a>
                </div>
                {/* End Rifqi */}
            </div>
            {/* End Card */  }

            {/* Footer */} 
            <Footer/>
            {/* End Footer */}
        </div>
    )
}  