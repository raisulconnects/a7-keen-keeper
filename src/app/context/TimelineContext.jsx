"use client";

import { useState } from "react";

import { createContext, useContext } from "react";

const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  return (
    <TimelineContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

const useTimelineContext = () => {
  const context = useContext(TimelineContext);
  return context;
};

export { TimelineContextProvider, useTimelineContext };
