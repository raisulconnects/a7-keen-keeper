import friends from "@/../data/friends.json";

export default async function FriendDetailPage({ params }) {
  const { id } = await params;
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="p-10 text-gray-500 text-center">Friend not found</div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-gray-50"
            />

            <h1 className="text-xl font-bold text-gray-900">{friend.name}</h1>

            <span
              className={`mt-2 px-3 py-1 text-[11px] uppercase tracking-wider rounded-full font-bold ${
                friend.status === "overdue"
                  ? "bg-red-100 text-red-600"
                  : friend.status === "almost due"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
              }`}
            >
              {friend.status}
            </span>

            <div className="mt-3 flex gap-2 flex-wrap justify-center">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="italic text-gray-500 text-sm mt-6 leading-relaxed">
              "{friend.bio}"
            </p>

            <p className="text-xs font-medium text-gray-400 mt-4 uppercase tracking-wide">
              Preferred: {friend.preferred_contact || "Email"}
            </p>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="21 8 21 21 3 21 3 8" />
                <rect x="1" y="3" width="22" height="5" />
                <line x1="10" y1="12" x2="14" y2="12" />
              </svg>
              Archive
            </button>

            <button className="w-full bg-white border border-red-100 rounded-xl py-3.5 px-4 font-medium text-red-600 hover:bg-red-50 hover:border-red-200 transition flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
              Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#295943]">
                {friend.days_since_contact}
              </h2>
              <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wide">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#295943]">
                {friend.goal}
              </h2>
              <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wide">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
              <h2 className="text-2xl sm:text-2xl font-bold text-[#295943]">
                {friend.next_due_date}
              </h2>
              <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wide">
                Next Due
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Relationship Goal
              </h2>
              <button className="text-sm font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition cursor-pointer">
                Edit
              </button>
            </div>

            <p className="text-base text-gray-600">
              Connect every{" "}
              <span className="font-semibold text-gray-900">
                {friend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition group text-gray-600 hover:text-gray-900 cursor-pointer">
                <img
                  src="/call.png"
                  alt="Call"
                  className="mb-3 w-7 h-7 group-hover:opacity-80"
                />
                <span className="text-sm font-medium">Call</span>
              </button>

              <button className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition group text-gray-600 hover:text-gray-900 cursor-pointer">
                <img
                  src="/text.png"
                  alt="Text"
                  className="mb-3 w-7 h-7 group-hover:opacity-80"
                />
                <span className="text-sm font-medium">Text</span>
              </button>

              <button className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition group text-gray-600 hover:text-gray-900 cursor-pointer">
                <img
                  src="/video.png"
                  alt="Video"
                  className="mb-3 w-7 h-7 group-hover:opacity-80"
                />
                <span className="text-sm font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
