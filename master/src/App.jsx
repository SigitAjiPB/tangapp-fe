import React from 'react';
import './App.css'

function App() {
  return (
    <>
      <div className="flex relative h-[1200px]">
{/* Side Bar */}
        <div className="flex h-screen flex-col justify-between border-e bg-white sticky top-0 left-0">
    <div className="px-4 py-6">
      <span className="grid h-10 w-32 place-content-center rounded-lg bg-sky-400 text-xs text-gray-600">
        <img 
        src="./src/assets/logo.png" 
        alt="tangapp-logo"
        className='h-10'
         />
      </span>

      <ul className="mt-6 space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            General
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Teams </span>

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
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Billing
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Invoices
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Account </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
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
                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
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

    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 w-max">
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
        <div className='w-screen relative'>
          {/* Announcement */}
          <div className="flex items-center justify-between gap-4 bg-sky-400 px-4 py-3 text-white">
            <p className="text-sm font-medium">
              Mulailah mencatat hutang di 
              <a href="#" class="inline-block underline">Tangapp</a>
            </p>

            <button
              aria-label="Dismiss"
              class="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* End Announcement */}

          {/* Header */}
          <header className="bg-white drop-shadow-md sticky top-0">
            <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

              <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                  <ul class="flex items-center gap-6 text-lg">
                    <li>
                      <a class="text-sky-400 transition hover:text-sky-400/75" href="#"> About </a>
                    </li>

                    <li>
                      <a class="text-sky-400 transition hover:text-sky-400/75" href="#"> Careers </a>
                    </li>

                    <li>
                      <a class="text-sky-400 transition hover:text-sky-400/75" href="#"> History </a>
                    </li>

                    <li>
                      <a class="text-sky-400 transition hover:text-sky-400/75" href="#"> Services </a>
                    </li>

                    <li>
                      <a class="text-sky-400 transition hover:text-sky-400/75" href="#"> Projects </a>
                    </li>

                    <li>
                      <a class="text-sky-400 transition hover:text-sky-400/75" href="#"> Blog </a>
                    </li>
                  </ul>
                </nav>

                <div class="flex items-center gap-4">
                  <div class="sm:flex sm:gap-4">
                  <a
                    class="block rounded-md bg-sky-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
                    href="#"
                  >
                    Login
                  </a>

                    <a
                      class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-400 transition hover:text-sky-600/75 sm:block"
                      href="#"
                    >
                      Register
                    </a>
                  </div>

                  <button
                    class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                  >
                    <span class="sr-only">Toggle menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLineJoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>   
          {/* End Header */}
        </div>
{/* End Hero */}          


      </div>
      </>

  )
}

export default App
