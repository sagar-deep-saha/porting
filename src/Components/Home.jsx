import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./style.css";
import { Link } from "react-scroll";
const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Full-Stack Developer", "System Engineer", "DevOps Engineer"],
    loop: {},
    // typeSpeed: 80,
    // delaySpeed: 40,
  });



  return (
    <>
      <div id="homee" className="home">



        <div id="side" className="social">
          {/* <ul className="wrapper">

            ///////////////////////
          <a
              href="https://hackerrank.com/sagar-saha/"
              target="_blank"
            >
              {" "}
              <li className="icon github">
                <span className="tooltip">HackerRank</span>
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95a.111.111 0 0 1-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11v-7.77c0-.06.05-.11.11-.11z" /></svg>
              </li>
            </a>
            <br />

            /////////////////////////////////////
            <a
              href="https://www.linkedin.com/in/sagar-deep-saha/"
              target="_blank"
            >
              {" "}
              <li className="icon github">
                <span className="tooltip">Linkedin</span>
                <svg
                  fill="#000000"
                  height="2.3em"
                  viewBox="-3.5 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cf-icon-svg"
                >
                  <path d="M3.335 6.498a1.152 1.152 0 0 1-1.248 1.148h-.015a1.15 1.15 0 1 1 .03-2.295 1.147 1.147 0 0 1 1.233 1.147zM.982 8.553h2.206v6.637H.982zm10.165 2.83v3.807H8.941v-3.55c0-.893-.319-1.502-1.12-1.502a1.21 1.21 0 0 0-1.13.807 1.516 1.516 0 0 0-.073.538v3.708H4.41s.03-6.017 0-6.639h2.21v.94l-.016.023h.015V9.49a2.19 2.19 0 0 1 1.989-1.095c1.451 0 2.54.949 2.54 2.988z" />
                </svg>
              </li>
            </a>
            <br />


            <a
              href="https://leetcode.com/u/sagar-saha/"
              target="_blank"
            >
              {" "}
              <li className="icon github">
                <span className="tooltip">LeetCode</span>
                <svg fill="#000000" style={{ padding: "8px" }} viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
              </li>
            </a>
            <br />


            <a href="https://github.com/sagar-deep-saha" target="_blank">
              {" "}
              <li className="icon github">
                <span className="tooltip">Github</span>
                <svg
                  height="1.9em"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="none" />
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                </svg>
              </li>
            </a>

  
 
          </ul> */}




        </div>





        <section className="herosec text-gray-600 body-font">
          <div className="container mx-auto flex md:flex-row flex-col items-center" style={{ marginLeft: "-34%", width: "200%" }}>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:justify-center sm:text-center sm:pr-2">
              <h1 className="title-font sm:text-6xl text-10xl mb-4 font-large text-gray-900">
                Sagar Deep Saha
              </h1>

              <br />
              <h3 className="text-xl text-semibold">
                I'm a {typeEffect} <Cursor />
              </h3>

              <br />
              <br />
              <p className="mb-8 leading-relaxed">
                BackEnd Developer & System Engineer
                <br />
                4 Years of industry level work experience
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/sagar-deep-saha/"
                  // href="https://api.whatsapp.com/send?phone=+918257803481&text=Hello%2C%20!"
                  target="_blank"
                >
                  <button
                    href
                    style={{ backgroundColor: "navy" }}
                    className="poplo justify-center text-center inline-flex font-semibold text-white rounded-lg bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 text-lg"
                  >
                    Get Linked{" "}
                    {/* <svg className="font-semibold"
                      style={{ paddingTop: "6px", paddingLeft: "4px" }}
                      height="1.2em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </g>
                    </svg> */}
                  </button>
                </a>
              </div>
            </div>
            {/* <div className="border lg:max-w-lg lg:w-1/4 md:w-1/2 w-5/6 sm:justify-center md:justify-center"> */}
            <div className="lg:max-w-96 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> */}



              <img
                className="object-cover object-center rounded-3xl"
                alt="sagar"
                // src="https://dummyimage.com/620x500"
                // src="./images/sa.jpg"
                // src="./images/wolf.png"
                src="https://avatars.githubusercontent.com/u/89993023?v=4"

              />

              {/* <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <image xlinkHref="./images/wolf.png" width="200" height="200" />
                <polygon points="50,15 100,15 125,50 100,85 50,85 25,50" fill="none" stroke="black" strokeWidth="2" />
              </svg> */}

            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />

      <br />
      <br />
      <Link
        id="sclop"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {/* <button className="scroll flex gap-1">
          <div>
            <svg
              height="2.3em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9V3M12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="scdn">
            <p className="font-medium" style={{ textColor: "navy" }}>Scroll down</p>
          </div>
          <div className="arrow">
            <svg
              height="1.8em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
                fill="#000000"
              />
            </svg>
          </div>
        </button> */}
      </Link>
    </>
  );
};

export default Home;
