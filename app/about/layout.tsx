import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About App",
  description: "About create next app",
  icons: {
    icon: "/one.png",
  },
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
        <link rel="icon" type="image/png" href="/two.png" /> {/* Change href to your favicon image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About twitter title" /> {/* Change to your Twitter title */}
        <meta name="twitter:description" content="About twitter desc" /> {/* Change to your Twitter description */}
        <meta name="twitter:image" content="/twitter-image.jpg" /> {/* Change to the URL of your Twitter image */}
      </head>
      <body>{children}</body>
    </html>
  );
}
