export const metadata = {
  title: "Genesis Fitness Club",
  description: "Online fitness coaching – Everything has a beginning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
