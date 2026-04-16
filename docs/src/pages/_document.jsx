import { Head, Html, Main, NextScript } from 'next/document'

const themeScript = `
  // Force dark theme for Solonet.Monad
  document.documentElement.classList.add('dark')
  document.documentElement.setAttribute('data-theme', 'dark')
`

export default function Document() {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body className="bg-background text-foreground font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
