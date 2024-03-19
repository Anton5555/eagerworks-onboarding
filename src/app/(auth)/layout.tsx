import Header from "../_components/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Header />
      <div className="h-screen bg-lightGray">{children}</div>
    </body>
  </html>
);

export default RootLayout;
