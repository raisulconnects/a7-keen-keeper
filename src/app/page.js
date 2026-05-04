import friends from "@/../data/friends.json"; 
import FriendCard from "@/app/Components/Friendcard";

export default function Home() {
  return (
    <div>
      <div className="text-center mt-25">
        <h1 className="text-5xl font-bold text-gray-900">
          Friends to keep close in your life
        </h1>
        <p className="mt-5 text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="mt-10 px-6 py-3 bg-green-900 text-white rounded hover:bg-green-700 transition cursor-pointer flex items-center justify-center mx-auto">
          <span className="text-2xl pr-3">+</span> Add a Friend
        </button>
        <div className="grid grid-cols-4 gap-4 mt-10 mx-auto max-w-4xl">
          <div className="bg-gray-100 rounded shadow py-6 px-5">
            <h2 className="text-3xl font-bold mb-2 text-green-900">10</h2>
            <p className="text-gray-600">Total Friends</p>
          </div>

          <div className="bg-gray-100 rounded shadow py-6 px-5">
            <h2 className="text-3xl font-bold mb-2 text-green-900">3</h2>
            <p className="text-gray-600">On Track</p>
          </div>

          <div className="bg-gray-100 rounded shadow py-6 px-5">
            <h2 className="text-3xl font-bold mb-2 text-green-900">6</h2>
            <p className="text-gray-600">Needs Attention</p>
          </div>

          <div className="bg-gray-100 rounded shadow py-6 px-5">
            <h2 className="text-3xl font-bold mb-2 text-green-900">12</h2>
            <p className="text-gray-600">Interactions This Month</p>
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-200 w-1/2 mx-auto" />

      <div className="p-10 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Friends</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
