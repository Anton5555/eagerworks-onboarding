import Header from "../_components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="h-screen bg-lightGray">{children}</div>
      </body>
    </html>
  );
}
