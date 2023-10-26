import React from "react";
import Selectable from "./Selectable";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    Swal.fire({ title: "تسلم يسطا أعتبر نفسك سجلت", icon: "success" }).then(
      () => {
        navigate("/");
      }
    );
  };
  return (
    <div>
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 drop-shadow-md  bg-gradient-to-r from-slate-400 to-slate-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div
            dir="rtl"
            className="text-white  relative px-8 py-10 bg-slate-500 shadow-lg sm:rounded-3xl "
          >
            <div className="text-center pb-6">
              <h1 className="text-3xl font-[500]">تسجيل البيانات</h1>

              <p className="text-gray-300 pt-1">
                قم بملئ البيانات للانضمام لينا{" "}
              </p>
            </div>

            <form onSubmit={submitHandler}>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="الاسم"
                name="name"
                required
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="الشهرة"
                name="prenom"
                required
              />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="رقم الهاتف"
                name="phone"
                required
              />
              <Selectable />

              <div className="flex-col items-center justify-between">
                <input
                  className="shadow cursor-pointer bg-red-800 w-[80%] m-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="تسجيل"
                />
                <span className="block pt-2">
                  أو قم بـ{" "}
                  <b>
                    <Link
                      className="text-red-700 hover:text-red-950 duration-200"
                      to="/login"
                    >
                      تسجيل الدخول
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

export default Signup;
