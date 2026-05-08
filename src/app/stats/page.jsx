"use client";

import { useTimelineContext } from "@/app/context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Stats() {
  const { timeline } = useTimelineContext();

  const data = [
    { name: "Call", value: timeline.filter((e) => e.type === "call").length },
    { name: "Text", value: timeline.filter((e) => e.type === "text").length },
    { name: "Video", value: timeline.filter((e) => e.type === "video").length },
  ];

  const colors = ["#295943", "#4ade80", "#60a5fa"];

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Friendship Analysis
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-green-900 mb-6">
            By Interaction Type
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
