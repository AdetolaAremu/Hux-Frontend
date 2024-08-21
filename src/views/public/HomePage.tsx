import homehero from "../../assets/homehero.jpg";
import colourSide from "../../assets/homets.png";
import raising from "../../assets/raising.jpg";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";

const HomePage = () => {
  return (
    <>
      <div className="mt-7 relative">
        <img src={homehero} alt="home hero" className="w-full h-[32rem]" />

        <div className="absolute mt-4 z-10 top-3 px-10">
          <div className="text-white mt-16 text-2xl font-semibold">
            Choice Contacts
          </div>

          <div className="text-white text-4xl mt-10">
            I can say for a fact you will get the best contacts here. You will
            <br /> NEVER get this anywhere else
          </div>

          <div className="text-white text-lg mt-10 text-xs">
            Whether you're searching for business, personal, or emergency
            contacts, you'll find reliable and updated information right at{" "}
            <br />
            your fingertips. Get connected to the people and services you need
            most, all in one place.
          </div>

          <div className="mt-10">
            <button className="w-96 h-20 bg-white rounded-lg text-[#7717D7] font-bold">
              Get Onboarded
            </button>
          </div>
        </div>
      </div>

      <div className="px-10 mt-10 flex justify-between">
        <div className="text-3xl">
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
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black mt-20"
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
              <button className="bg-gray-800 text-white px-8 py-2 rounded-3xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex">
        <img src={colourSide} alt="colour side" className="w-3/5" />

        <div className="absolute px-10 pt-20 text-white">
          <div className="text-6xl leading-relaxed">
            50million contacts <br /> at your finger tips, <br />
            easy-peasy
          </div>
          <div className="mt-14">
            <button className="w-96 h-20 bg-white rounded-lg text-[#7717D7] font-bold">
              Get Onboarded
            </button>
          </div>
        </div>

        <img src={raising} alt="raising side" className="w-full" />
      </div>

      <div className="mt-10 px-10">
        <div className="text-3xl text-center font-semibold leading-snugs text-gray-800">
          The contact as-a-service platform you should be <br />
          hooked on
        </div>

        <div className="mt-10 flex justify-center">
          <button className="w-96 h-20 bg-gray-700 rounded-lg text-white font-bold">
            Get Onboarded
          </button>
        </div>
      </div>

      {/* <div >
        <div className="flex justify-center">
          <div className="flex">
            <img src={user1} alt="raising side" className="h-60" />
            <div className="font-semibold text-sm mt-24 ml-3">
              <div>Janes Lorien</div>
            </div>
          </div>

          <div className="flex">
            <img src={user1} alt="raising side" className="h-60" />
            <div className="font-semibold text-sm mt-24 ml-3">
              <div>Janes Lorien</div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
