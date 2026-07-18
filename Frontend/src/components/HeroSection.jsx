import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaChartLine,
  FaBrain,
  FaUserGraduate,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white px-6 pb-10 pt-10">
      <div className="mx-auto max-w-7xl">


      <div className="grid lg:grid-cols-2 gap-6 items-center">

        {/* Left Content */}

        <div>

          <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium mb-6 border border-sky-200">
            AI Powered Education Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

            Predict Student

            <span className="text-indigo-600"> Success </span>

            with AI

          </h1>


          <div className="flex flex-wrap gap-5 mt-10">

            <Link to="/dashboard" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition shadow-lg shadow-sky-200">

           

              Get Started

            </Link>

            <button className="bg-sky-50 border border-sky-200 px-8 py-4 rounded-xl flex items-center gap-3 font-semibold shadow-sm hover:border-sky-400 hover:bg-sky-100 transition">

              <FaPlayCircle className="text-sky-600" />

              Learn More

            </button>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>

              <h2 className="text-4xl font-bold text-sky-700">
                500+
              </h2>

              <p className="text-gray-500 mt-2">
                Students
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-green-600">
                95%
              </h2>

              <p className="text-gray-500 mt-2">
                Accuracy
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-orange-500">
                AI
              </h2>

              <p className="text-gray-500 mt-2">
                Prediction
              </p>

            </div>

          </div>

        </div>

        {/* Right Content */}

        <div className="relative mt-[-40px]">

          <div className="bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200 rounded-[40px] p-8 shadow-xl shadow-sky-100/60 border border-sky-100">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="Students Learning"
              className="rounded-3xl"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute top-8 -left-8 bg-sky-50 rounded-2xl shadow-xl shadow-sky-100/80 p-5 w-60 border border-sky-100">

            <div className="flex items-center gap-4">

              <div className="bg-sky-100 p-3 rounded-xl text-sky-600">

                <FaChartLine />

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Prediction Score
                </p>

                <h3 className="text-2xl font-bold">
                  92%
                </h3>

              </div>

            </div>

          </div>

          <div className="absolute bottom-6 -left-6 bg-sky-50 rounded-2xl shadow-xl shadow-sky-100/80 p-5 w-64 border border-sky-100">

            <div className="flex items-center gap-4">

              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">

                <FaBrain />

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Performance
                </p>

                <h3 className="text-xl font-bold text-sky-700">
                  Excellent
                </h3>

              </div>

            </div>

          </div>

          <div className="absolute bottom-24 right-0 bg-sky-600 p-5 rounded-2xl text-white shadow-xl shadow-sky-200">

            <FaUserGraduate size={30} />

          </div>

        </div>

      </div>

      </div>

    </section>
  );
};

export default HeroSection;