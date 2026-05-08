"use client";

import { useState } from "react";

import { createContext, useContext } from "react";

const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimelineEntry = (entry) => {
    setTimeline((prev) => [
      { ...entry, id: Date.now(), timestamp: new Date().toISOString() },
      ...prev,
    ]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, setTimeline, addTimelineEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

const useTimelineContext = () => {
  const context = useContext(TimelineContext);
  return context;
};

export { TimelineContextProvider, useTimelineContext };
