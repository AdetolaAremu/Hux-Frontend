import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";

const CardList = () => {
  const tasks = [
    { icon: user1, title: "James Lammy" },
    { icon: user2, title: "Joy Ayoola" },
    { icon: user1, title: "Rebecca Lionel" },
    { icon: user2, title: "Mary Kososvo" },
    { icon: user1, title: "John Chukwu" },
    { icon: user2, title: "Mayor Dammy" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="text-gray-600 mt-2 px-4 text-xs">Frequent Contacts</div>
      <ul className="divide-y divide-gray-200">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
          >
            <img src={task.icon} alt={task.title} className="w-6 h-6 mr-4" />
            <span className="text-gray-700 font-medium">{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
