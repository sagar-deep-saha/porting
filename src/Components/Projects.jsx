import workstream from "./images/workstream.png";
import JobHunt from "./images/jobhunt.png";
import Ambition from "./images/ambition.png";
import PassMan from "./images/passman.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import "./style.css";
const Projects = () => {
  return (
    <div id="projects">
      <div className="justify-center text-center">
        <h1 className="text-5xl font-semibold text-black">Projects</h1>
        <h3>My recent work</h3>
      </div>

      <br />
      <br />
      <br />

      <br />
      <div className="pro  ml-0">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          freeMode={true}
          // navigation= {true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 2,
              // spaceBetween: 0,
              spaceBetween: 20,
            },
            1020: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1175: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >










          <SwiperSlide className="ambition pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/sc1.jpeg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  TIFRO
                </h5>
                <p className="abto1 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Assignment Front Page designer for TIT, Narsingarh
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">

                <a
                  href="https://tifro.sagar.ltd/"
                  target="_blank"
                >
                  {" "}
                  <button
                    data-ripple-light="true"
                    type="button"
                    style={{ backgroundColor: "navy" }}
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>





          <SwiperSlide className="ambition pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/sc1.jpeg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  AirBit
                </h5>
                <p className="abto1 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Community Connection Platform
                  <br />
                  <br />
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">

                {/* <a
                  href="https://tifro.sagar.ltd/"
                  target="_blank"
                > */}
                {" "}
                <button
                  data-ripple-light="true"
                  type="button"
                  style={{ backgroundColor: "gray" }}
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Visit
                </button>
                {/* </a> */}
              </div>
            </div>
          </SwiperSlide>










          <SwiperSlide className="ambition pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/sc1.jpeg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  DEFRO
                </h5>
                <p className="abto1 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Assignment Front Page designer for Diploma
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">

                <a
                  href="https://defro.sagar.ltd/"
                  target="_blank"
                >
                  {" "}
                  <button
                    data-ripple-light="true"
                    type="button"
                    style={{ backgroundColor: "navy" }}
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Visit
                  </button>
                </a>

                <a
                  href="https://diploma.arkajyoti.shop/"
                  target="_blank"
                >
                  {" "}
                  <button
                    data-ripple-light="true"
                    type="button"
                    style={{ backgroundColor: "#e3261d" }}
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>








          <SwiperSlide className="ambition pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/sc1.jpeg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Empnode
                </h5>
                <p className="abto1 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Office Management System (Public & Custom)
                  <br />
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">

                {/* <a
                  href="https://tifro.sagar.ltd/"
                  target="_blank"
                > */}
                {" "}
                <button
                  data-ripple-light="true"
                  type="button"
                  style={{ backgroundColor: "gray" }}
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Visit
                </button>
                {/* </a> */}
              </div>
            </div>
          </SwiperSlide>










          <SwiperSlide className="ambition pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/Screenshot_27-11-2024_02839_deeppink-hornet-988525.hostingersite.com.jpeg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  BlogNest
                </h5>
                <p className="abto1 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Public Blogging SIte
                  <br />
                  <br />
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">

                <a
                  href="https://blognest.sagar.ltd"
                  target="_blank"
                >
                  {" "}
                  <button
                    data-ripple-light="true"
                    type="button"
                    style={{ backgroundColor: "navy" }}
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>







          <SwiperSlide className="ambition pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/Screenshot_27-11-2024_03511_localhost.jpeg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  PLOS
                </h5>
                <p className="abto1 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Password Manager
                  <br />
                  <br />
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">

                {/* <a
                  href="https://deeppink-hornet-988525.hostingersite.com/log.php"
                  target="_blank"
                > */}
                  {" "}
                  <button
                    data-ripple-light="true"
                    type="button"
                    style={{ backgroundColor: "gray" }}
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Visit
                  </button>
                {/* </a> */}
              </div>
            </div>
          </SwiperSlide>









          <br />
          <br />
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
