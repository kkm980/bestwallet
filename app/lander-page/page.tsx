"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as contentful from "contentful";

const spaceID: any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";
const accessKey: any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "";

const LanderPage = () => {
  const client = contentful.createClient({
    space: spaceID && spaceID,
    accessToken: accessKey && accessKey,
  });

  const [contentData, setContentData] = useState<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useQuery({
    queryKey: ["contentfulData"],
    queryFn: async () => {
      try {
        const entries = await client.getEntries({
          content_type: "bestwallet",
          // eslint-disable-next-line no-prototype-builtins
          locale: "en-US",
        });
        setContentData(entries);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  });

  useEffect(() => {
    console.log("ContentFul Data :", contentData);
  }, [contentData]);

  return <div>LanderPage</div>;
};

export default LanderPage;
