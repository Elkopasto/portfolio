import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='overscroll-none overflow-x-hidden bg-beige'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
