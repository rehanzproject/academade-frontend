import { Link } from "react-router-dom";
import GuruSvg from "/svg/Guru.svg";
import Navbar from "../../components/templates/Navbar.template";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('/images/bgLanding.png')] bg-cover h-screen flex flex-col justify-center items-center">
        <div className="relative flex flex-col md:flex-row items-center justify-center md:mr-10 mb-24">
          <img
            src={GuruSvg}
            alt="Guru"
            className="md:mr-10 mt-20 w-64 md:w-96 lg:w-500"
          />
          <div className="md:mr-10 text-center md:text-left">
            <div className="mb-10">
              <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                SELAMAT DATANG di halaman admin
              </p>
            </div>
            <div>
              <p className="text-white text-lg md:text-xl">
                Kelola pembelajaran dengan mudah dan efisien. Semua yang Anda
                butuhkan untuk mengelola LMS Anda, tersedia di sini.
              </p>
            </div>
            <Link
              to="/login"
              className="bg-primary-50 hover:bg-primary-50/75 duration-500 drop-shadow-xl text-white rounded-full font-semibold text-lg p-2 px-7 mt-10 md:mt-0 md:absolute md:bottom-0 md:right-0 md:mb-14"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;