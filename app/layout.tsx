export const metadata = {
  title: 'Genesis Fitness Club',
  description: 'Everything has a beginning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
