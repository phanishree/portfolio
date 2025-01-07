import "./globals.css";

export const metadata = {
  title: "Phanishree Kommalapati",
  description: "Phani's portfolio :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="font-quicksand"
      >
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        {children}
      </body>
    </html>
  );
}
