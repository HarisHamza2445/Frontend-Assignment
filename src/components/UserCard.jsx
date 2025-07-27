import React from "react";

const UserCard = () => {
  return (
    <div className="w-full max-w-sm bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
      {/* Avatar */}
      <img
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="User Avatar"
        className="w-24 h-24 rounded-full shadow-md border-4 border-white -mt-16 mb-4"
      />

      {/* Name & Title */}
      <h3 className="text-xl font-semibold text-gray-800">Haris Hamza Ali</h3>
      <p className="text-sm text-gray-500 mb-2"> Full Stack Developer</p>

      {/* Email */}
      <p className="text-sm text-gray-600 bg-white/50 px-3 py-1 rounded-full mt-2">
        haris@example.com
      </p>

      {/* Optional Footer */}
      <div className="mt-4 flex gap-3">
        <button className="text-sm px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
          Message
        </button>
        <button className="text-sm px-4 py-1 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition">
          Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
