"use client";

import { DAILY_QUEST_TASKS } from "@/GraphQL/Queries";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

const dummyInfoContent = [
  {
    name: "Task description can go up to two lines of text",
    subText: "Secondary text (when necessary)",
    taskType: "pts",
    points: "0",
  },
  {
    name: "Task description can go up to two lines of text.",
    subText: "Secondary text (when necessary)",
    taskType: "pts",
    points: "0",
  },
  {
    name: "Task description can go up to two lines of text.",
    subText: "Secondary text (when necessary)",
    taskType: "pts",
    points: "25",
  },
  {
    name: "Task description can go up to two lines of text.",
    subText: "Secondary text (when necessary)",
    taskType: "pts",
    points: "25",
  },
];

const page = () => {
  const [showFinal, setShowFinal] = useState(false);
  const [infoContent, setInfoContent] = useState<any>([]);
  const apiKey = process.env.NEXT_PUBLIC_LEADERBOARD_API_KEY;
  const walletAddress = "0x7f779625518c1c366434e832ee8bcc975d2f5361";
  const variables = {
    activityTrackerId: process.env.NEXT_PUBLIC_ACTIVITY_TRACKER_ID,
    walletAddress,
    active: true,
  };
  const { data } = useQuery(DAILY_QUEST_TASKS, {
    variables: {
      ...variables,
    },
    context: {
      headers: {
        "x-api-key": apiKey,
      },
    },
    skip: !walletAddress, // Skip the query when userWalletAddress is null
  });

  console.log("Daily Quotes :", data);

  useEffect(() => {
    if (data?.tasks?.tasks) {
      setInfoContent([...data.tasks.tasks]);
    } else {
      setInfoContent(dummyInfoContent);
    }
  }, [data]);
  useEffect(() => {
    setShowFinal(false);
  }, []);
  return <div>page</div>;
};

export default page;
