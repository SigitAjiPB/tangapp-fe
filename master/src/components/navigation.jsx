import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import eventLogo from '../assets/event.svg'
function Navigation() {
  const navigate = useNavigate();

  return (
    <button 
    className=" rounded-lg drop-shadow-lg"
    onClick={() => navigate('/components/eventForm')}
    data-aos="fade-up">          
        <article
        className=" rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
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
    </button>
  );
}

export default Navigation;
