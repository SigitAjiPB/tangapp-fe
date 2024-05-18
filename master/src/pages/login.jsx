import myImage from "../assets/google-icon.webp";
function Login() {
  return (
    <div className="bg-[url('./assets/loginpage-bg.jpg')] bg-cover bg-center bg-fixed h-screen">
      <div className="flex justify-center w-full h-full items-center px-10">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-14 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <p className="text-center text-white font-bold text-xl md:text-2xl">{`Mulailah Untuk Mencatat Hutangmu `}</p>
            <p className="text-center text-white font-bold text-xl md:text-2xl">
              {`\n Bersama `}
              <span class="text-sky-400">TangApp</span> UwU
            </p>
            <div class="bg-white w-[15rem] h-10 rounded-full flex space-x-4 items-center px-2 mt-8 hover:shadow-md border border-slate-400 hover:cursor-pointer transition-all duration-300">
              <img src={myImage} alt="google-icon" class="h-10 " />
              <p class="text-slate-700 ">Sign in with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
