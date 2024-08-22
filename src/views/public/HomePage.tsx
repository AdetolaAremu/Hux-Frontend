import { Link } from "react-router-dom";
import homehero from "../../assets/homehero.jpg";
import colourSide from "../../assets/homets.png";
import raising from "../../assets/raising.jpg";

const HomePage = () => {
  return (
    <>
      <div className="relative mt-7">
        <img
          src={homehero}
          alt="home hero"
          className="w-full h-80 lg:h-[27rem] 2xl:h-[32rem] object-cover"
        />

        <div className="absolute top-0 left-0 z-10 p-6 sm:p-10 lg:p-16">
          <div className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
            Choice Contacts
          </div>

          <div className="text-white text-sm sm:text-2xl lg:text-4xl mt-4">
            I can say for a fact you will get the best contacts here. You will
            <br className="hidden xl:block" /> NEVER get this anywhere else
          </div>

          <div className="text-white mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg">
            Whether you're searching for business, personal, or emergency
            contacts, you'll find reliable and updated information right at{" "}
            <br className="hidden xl:block" />
            your fingertips. Get connected to the people and services you need
            most, all in one place.
          </div>

          <div className="mt-6 sm:mt-8">
            <Link to="/auth/register">
              <button className="w-full lg:w-96 h-12 sm:h-16 bg-white rounded-lg text-[#7717D7] font-bold text-sm sm:text-base lg:text-lg hover:scale-105 transform transition duration-300 ease-in-out">
                Get Onboarded
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-10 mt-10 flex justify-between flex-col lg:flex-row">
        <div className="text-3xl mb-3">
          Want to reach out? <br /> Do it here
        </div>

        <div>
          <div className="">
            Get connected to the people and services you need most, all in one
            place.
          </div>

          <div>
            <div className="flex flex-col space-y-6">
              <div className="relative mt-10">
                <label className="absolute -top-6 left-0 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-5 left-0 text-gray-700 mt-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black mt-6"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-5 left-0 text-gray-700 mt-4">
                  Message
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black mt-6"
                />
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-gray-800 text-white px-8 py-2 rounded-3xl hover:scale-105 transform transition duration-300 ease-in-out">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex">
        <img src={colourSide} alt="colour side" className="w-3/5" />

        <div className="absolute px-10 pt-20 text-white">
          <div className="text-sm lg:text-3xl xl:text-5xl leading-relaxed">
            50million contacts <br /> at your finger tips, <br />
            easy-peasy
          </div>
          <div className="mt-14">
            <Link to="/auth/register">
              <button className="w-96 h-20 bg-white rounded-lg text-[#7717D7] font-bold hover:scale-105 transform transition duration-300 ease-in-out">
                Get Onboarded
              </button>
            </Link>
          </div>
        </div>

        <img
          src={raising}
          alt="raising side"
          className="w-4 2xl:w-auto lg:flex-1 hidden lg:block h-[30rem]"
        />
      </div>

      <div className="mt-10 px-10">
        <div className="text-3xl text-center font-semibold leading-snugs text-gray-800">
          The contact as-a-service platform you should be <br />
          hooked on
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/auth/register">
            <button className="w-96 h-20 bg-gray-700 rounded-lg text-white font-bold hover:scale-105 transform transition duration-300 ease-in-out">
              Get Onboarded
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
