import CardList from "../../components/NewContacts";

const Home = () => {
  return (
    <>
      <div className="flex justify-between mt-8">
        <div className="bg-white rounded-lg w-64 p-2">
          <div className="flex justify-between">
            <div className="text-xs text-gray-600">Your Contacts</div>
            <div>O</div>
          </div>
          <div className="mt-2">20</div>
        </div>

        <div className="bg-white rounded-lg w-64 p-2">
          <div className="flex justify-between">
            <div className="text-xs text-gray-600">New Contacts Today</div>
            <div>O</div>
          </div>
          <div className="mt-2">20</div>
        </div>

        <div className="bg-white rounded-lg w-64 p-2">
          <div className="flex justify-between">
            <div className="text-xs text-gray-600">
              New Contacts This Quater
            </div>
            <div>O</div>
          </div>
          <div className="mt-2">20</div>
        </div>
        <div className="bg-white rounded-lg w-64 p-2">
          <div className="flex justify-between">
            <div className="text-xs text-gray-600">New Contacts This Year</div>
            <div>O</div>
          </div>
          <div className="mt-2">20</div>
        </div>
      </div>

      <div className="text-gray-600 mt-10">Events</div>
      <div className="flex justify-between">
        <div className="grid grid-cols-2 w-[80%]">
          <div className="mt-3">
            <div className="max-w-sm rounded-lg shadow-lg p-6 bg-white">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                The Network
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Africa Must Connect
              </h3>
              <p className="text-gray-600 mb-6">
                There is need to connect with African's alike and say things we
                must say.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 flex items-center"
              >
                Read more <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="mt-3">
            <div className="max-w-sm rounded-lg shadow-lg p-6 bg-white">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                Contact Hangout - UK
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hangout</h3>
              <p className="text-gray-600 mb-6">
                Hangout with your contact and let's talk about how to make this
                contact workout
              </p>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 flex items-center"
              >
                Read more <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="mt-3">
            <div className="max-w-sm rounded-lg shadow-lg p-6 bg-white">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                Contact Hangout - South Africa
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hangout SA
              </h3>
              <p className="text-gray-600 mb-6">
                Hangout with your esteemed contacts in SA, words needs to be
                spoken.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 flex items-center"
              >
                Read more <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="mt-3">
            <div className="max-w-sm rounded-lg shadow-lg p-6 bg-white">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                Contact Hangout - Nairobi
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hangout Nairobi
              </h3>
              <p className="text-gray-600 mb-6">
                Hangout with your esteemed contacts in Nairobi. words needs to
                be spoken.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 flex items-center"
              >
                Read more <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[26%]">
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Home;
