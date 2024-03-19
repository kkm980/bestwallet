import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secondary App",
  description: "Secondary create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/one.png" /> {/* Change href to your favicon image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Twitter Title" /> {/* Change to your Twitter title */}
        <meta name="twitter:description" content="Your Twitter Description" /> {/* Change to your Twitter description */}
        <meta name="twitter:image" content="/twitter-image.jpg" /> {/* Change to the URL of your Twitter image */}
      </head>
      <body>{children}</body>
    </html>
  );
}
