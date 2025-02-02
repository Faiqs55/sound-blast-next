import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "SoundBlast | Home",
  description: "Music The Real Magic",
};

const layout = ({ children }) => {
  return (
    <html>
      <head>
        <link
          rel="shortcut icon"
          href="/soundBlast-logo-neon.png"
          type="image/x-icon"
        />
      </head>
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
};

export default layout;
