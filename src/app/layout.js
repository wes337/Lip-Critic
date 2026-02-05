import "./globals.css";

export const metadata = {
  title: "Lip Critic",
  description:
    "The official website for NYC-based electronic punk band Lip Critic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
