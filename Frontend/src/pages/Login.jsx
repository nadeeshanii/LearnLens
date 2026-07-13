import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterBar from "../components/FooterBar";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    navigate("/dashboard");
  };


  return (

    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%),linear-gradient(180deg,_#eff6ff_0%,_#f8fafc_100%)]">

      <div className="mx-auto flex w-full max-w-5xl justify-end px-5 pt-5 sm:px-8">
        <Link
          to="/"
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Home
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-5 py-8">


      <div className="w-full max-w-md">


        {/* Logo */}

        <div className="mb-8 text-center">

          <Link 
            to="/"
            className="text-3xl font-bold tracking-tight text-slate-900"
          >
            Learn <span className="text-indigo-600">Lens</span>
          </Link>


          <p className="mt-3 text-slate-500">
            AI Student Performance Prediction Platform
          </p>

        </div>



        {/* Login Card */}

        <div className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur">


          <h1 className="text-center text-2xl font-bold text-slate-900">
            Welcome Back 👋
          </h1>


          <p className="mb-8 mt-2 text-center text-slate-500">
            Login to continue
          </p>



          <form 
            onSubmit={handleSubmit}
            className="space-y-5"
          >


            {/* Email */}

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>


              <input

                type="email"

                placeholder="Enter email"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"

              />

            </div>




            {/* Password */}

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>


              <input

                type="password"

                placeholder="Enter password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"

              />

            </div>




            {/* Remember */}

            <div className="flex justify-between items-center text-sm">


              <label className="flex items-center gap-2 text-slate-600">

                <input type="checkbox"/>

                Remember me

              </label>



              <a 
                href="#"
                className="font-medium text-indigo-600"
              >
                Forgot password?
              </a>


            </div>




            {/* Login Button */}

            <button

              type="submit"

              className="w-full rounded-2xl bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"

            >

              Login

            </button>



          </form>




          {/* Register */}

          <p className="mt-8 text-center text-sm text-slate-500">

            Don't have an account?

            <Link
              to="/"
              className="text-indigo-600 ml-1 font-medium"
            >
              Create Account
            </Link>

          </p>


        </div>



      </div>

      </div>

      <FooterBar />

    </div>

  );

};


export default Login;