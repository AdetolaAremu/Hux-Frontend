interface IEventCard {
  title: string;
  eventType: string;
  details: string;
}

const EventCard = ({ title, eventType, details }: IEventCard) => {
  return (
    <div className="mt-3">
      <div className="w-full lg:w-96 rounded-lg shadow-lg p-6 bg-white">
        <p className="text-sm text-gray-500 font-semibold mb-2">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{eventType}</h3>
        <p className="text-gray-600 mb-6">{details}</p>
        <a
          href="#"
          className="text-sm font-medium text-gray-800 flex items-center"
        >
          Read more <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
