"use client";

import { useState } from "react";
import { useTimelineContext } from "@/app/context/TimelineContext";

export default function Timeline() {
  const { timeline } = useTimelineContext();
  const [filter, setFilter] = useState("all");

  const filteredTimeline = filter === "all" 
    ? timeline 
    : timeline.filter(entry => entry.type === filter);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h1>
          {timeline.length > 0 && (
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-48 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#295943] cursor-pointer"
            >
              <option value="all">All</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
          )}
        </div>

        {timeline.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <p className="text-gray-500">
              No activities yet. Start by checking in with a friend!
            </p>
          </div>
        ) : filteredTimeline.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <p className="text-gray-500">
              No {filter === "all" ? "" : filter} activities found.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <img
                    src={entry.type === "call" ? "/call.png" : entry.type === "text" ? "/text.png" : "/video.png"}
                    className="w-6 h-6"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-gray-900 font-medium">
                    {entry.action}{" "}
                    <span className="font-semibold text-[#295943]">
                      {entry.friendName}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDate(entry.timestamp)} at {formatTime(entry.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}