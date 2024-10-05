
import "./globals.css";

export const metadata = {
  title: "UR ONE",
  description: "Everything in your hands at one click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
