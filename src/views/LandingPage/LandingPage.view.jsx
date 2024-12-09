import  { useEffect } from "react";
import { Link } from "react-router-dom";
import GuruSvg from "/svg/Guru.svg";
import Navbar from "../../components/templates/Navbar.template";

function LandingPage() {
  useEffect(() => {
    // Logika useEffect
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-[url('/images/bgLanding.png')] bg-cover h-screen flex flex-col justify-center items-center">
        <div className="relative flex items-center justify-center mr-10 mb-24">
          <img src={GuruSvg} alt="Guru" className=" mr-10 mt-20 " width={500} height={500} />
          <div className="mr-10">
            <div className="mb-10">
              <p className="text-5xl text-white font-bold">
                SELAMAT DATANG di halaman admin ahahahah
              </p>
            </div>
            <div>
              <p className="text-white text-xl">
                Kelola pembelajaran dengan mudah dan efisien. Semua yang Anda
                butuhkan untuk mengelola LMS Anda, tersedia di sini.
              </p>
            
            </div>
            <Link
              to="/login"
              className="bg-primary-50 hover:bg-primary-50/75 duration-500 drop-shadow-xl text-white rounded-full font-semibold text-lg p-2 px-7 mr-36 absolute bottom-0 right-0 mb-14"
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
