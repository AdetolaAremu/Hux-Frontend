import React from "react";

interface IStatCard {
  name: string;
  figure: number;
  icon: React.ComponentType;
}

const StatsCard: React.FC<IStatCard> = ({ name, figure, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0">
          <Icon />
        </div>
        <div>
          <div className="text-sm text-gray-600">{name}</div>
          <div className="text-lg font-semibold">{figure}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
