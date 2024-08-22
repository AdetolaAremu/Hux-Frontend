import EventCard from "../../components/EventCard";
import {
  NewUser,
  UserGroup,
  UserQuater,
  UserYear,
} from "../../components/IconUtility";
import CardList from "../../components/NewContacts";
import StatsCard from "../../components/StatsCard";
import { IStatItem } from "../../types/PrivateType";

const Home = () => {
  const statsArea: IStatItem[] = [
    { name: "Your Contacts", figure: 200, icon: UserGroup },
    { name: "New Contacts Today", figure: 3, icon: NewUser },
    { name: "New Contacts This Quarter", figure: 33, icon: UserQuater },
    { name: "New Contacts This Year", figure: 25, icon: UserYear },
  ];

  const eventsCard = [
    {
      title: "The Network",
      eventType: "Africa Must Connect",
      details:
        "There is need to connect with African's alike and say things we must say",
    },
    {
      title: "Contact Hangout - UK",
      eventType: "Hangout",
      details:
        "Hangout with your contact and let's talk about how to make this contact workout",
    },
    {
      title: "Contact Hangout - South Africa",
      eventType: "Hangout SA",
      details:
        " Hangout with your esteemed contacts in SA, words needs to be spoken.",
    },
    {
      title: "Contact Hangout -Nairobi",
      eventType: "Hangout Nairobi",
      details:
        " Hangout with your esteemed contacts in Nairobi. words needs to be spoken.",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-8">
        {statsArea.map((stat, index) => (
          <div key={index} className="flex-1 mb-4 lg:mb-0">
            <StatsCard figure={stat.figure} name={stat.name} icon={stat.icon} />
          </div>
        ))}
      </div>

      <div className="text-gray-600 mt-10">Events</div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-4/5">
          {eventsCard.map((eventCard, index) => (
            <EventCard
              key={index}
              title={eventCard.title}
              details={eventCard.details}
              eventType={eventCard.eventType}
            />
          ))}
        </div>

        <div className="w-full lg:w-[26%] mt-5 lg:mt-0">
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Home;
