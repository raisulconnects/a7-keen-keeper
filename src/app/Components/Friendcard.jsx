"use client";

import { useRouter } from "next/navigation";

export default function FriendCard({ friend }) {
  const router = useRouter();

  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-black",
    "on-track": "bg-green-800 text-white",
  };

  return (
    <div
      onClick={() => router.push(`/friends/${friend.id}`)}
      className="cursor-pointer bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full mb-4"
      />

      <h2 className="text-lg font-semibold text-gray-800">{friend.name}</h2>

      <p className="text-sm text-gray-500 mt-1">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-medium"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <span
        className={`mt-3 text-xs px-3 py-1 rounded-full font-semibold ${statusStyles[friend.status]}`}
      >
        {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
      </span>
    </div>
  );
}
