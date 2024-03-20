"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { DAILY_QUEST_TASKS } from "../../GraphQL/Queries";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function LanderPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiKey = process.env.REACT_APP_LEADERBOARD_API_KEY;
  const walletAddress = localStorage.getItem("bestWalletData");
  const variables = {
    activityTrackerId: process.env.REACT_APP_ACTIVITY_TRACKER_ID,
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

  useEffect(() => {
    
  }, [data]);

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
