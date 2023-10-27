import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    Swal.fire({ title: "تسلم يسطا أعتببر نفسك دخلت", icon: "success" }).then(
      () => {
        navigate("/");
      }
    );
  };
  return (
    <div className="md:scale-90">
      <div className="min-h-[60vh]  py-10 flex flex-col justify-center ">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 drop-shadow-md  bg-gradient-to-r from-slate-400 to-slate-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div
            dir="rtl"
            className="text-white  relative px-8 py-10 bg-slate-500 shadow-lg sm:rounded-3xl "
          >
            <div className="text-center pb-6">
              <h1 className="text-3xl font-[500]">تسجيل الدخول</h1>
            </div>

            <form onSubmit={submitHandler}>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="البريد الاكتروني"
                name="email"
                required
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="كلمه المرور"
                name="password"
                required
              />
              <span className="w-full flex justify-start mb-5">
                <input
                  type="checkbox"
                  name="rememberme"
                  className="outline-none rounded-md w-5 h-5 m-1"
                />
                <label htmlFor="rememberme">تذكرني</label>
              </span>
              <div className="flex-col items-center justify-between">
                <input
                  className="shadow cursor-pointer bg-red-800 w-[80%] m-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value=" تسجيل الدخول"
                />
                <span className="block pt-2">
                  أو قم بـ{" "}
                  <b>
                    <Link
                      className="text-red-700 hover:text-red-950 duration-200"
                      to="/signup"
                    >
                      إنشاء حساب
                    </Link>
                  </b>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
