import { Promotion } from "../_components/Promotion";

export const metadata = {
  title: "Sign-up",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <div className="hidden w-1/2 bg-gradient-to-tr from-blue to-lightBlue md:flex">
          <Promotion />
        </div>
        <div className="flex w-full justify-center md:w-1/2 ">{children}</div>
      </body>
    </html>
  );
}
