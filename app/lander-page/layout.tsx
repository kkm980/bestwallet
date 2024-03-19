"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

const queryClient = new QueryClient();
export const metadata: Metadata = {
  title: "Lander-page",
  description: "Lander-page description",
};
export default function LanderPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/two.png" /> {/* Change href to your favicon image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Twitter Title" /> {/* Change to your Twitter title */}
        <meta name="twitter:description" content="Your Twitter Description" /> {/* Change to your Twitter description */}
        <meta name="twitter:image" content="/twitter-image.jpg" /> {/* Change to the URL of your Twitter image */}
      </head>
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
