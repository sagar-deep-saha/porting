import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./style.css";
import { Link } from "react-scroll";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Full-Stack Developer", "System Engineer", "DevOps Engineer"],
    loop: {},
  });

  return (
    <>
      <div id="homee" className="home">
        <div id="side" className="social">
          {/* Social links can be added here */}
        </div>

        <section className="herosec text-gray-600 body-font">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-4xl mb-4 font-large text-gray-900">
                Sagar Deep Saha
              </h1>
              <h3 className="text-xl font-semibold">
                I'm a {typeEffect} <Cursor />
              </h3>
              <p className="mb-8 leading-relaxed">
                BackEnd Developer & System Engineer
                <br />
                4 Years of industry level work experience
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/sagar-deep-saha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{ backgroundColor: "navy" }}
                    className="poplo justify-center text-center inline-flex font-semibold text-white rounded-lg bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 text-lg"
                  >
                    Get Linked
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded-3xl"
                alt="sagar"
                src="https://avatars.githubusercontent.com/u/89993023?v=4"
              />
            </div>
          </div>
        </section>
      </div>
      <Link
        id="sclop"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {/* Scroll down button can be added here */}
      </Link>
    </>
  );
};

export default Home;
