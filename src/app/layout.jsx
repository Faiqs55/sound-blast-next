import './globals.css'

export const metadata = {
    title: "SoundBlast | Home",
    description: "Music The Real Magic",
  };

const layout = ({children}) => {
  return (
    <html>
        <head>
        <link
          rel="shortcut icon"
          href="/soundBlast-logo-neon.png"
          type="image/x-icon"
        />
        </head>
        <body>
            {children}
        </body>
    </html>
  )
}

export default layout