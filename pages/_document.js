import Document, { Html, Head, Main, NextScript } from 'next/document'
// styled-components require this to work
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' type='image/png' href='/favicon.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon.png' />

          <meta
            name='description'
            content="Peiwen Li's website page, displaying his work, his blog, his passion. He is passionate in developing software that improves our lives both physically and mentally"
          />
          <meta name='robots' content='index' />

          <meta property='og:site_name' content='Peiwen Li' />
          <meta property='og:title' content='Peiwen Li' />
          <meta
            property='og:description'
            content="Peiwen Li's website page, displaying his work, his blog, his passion. He is passionate in developing software that improves our lives both physically and mentally"
          />
          <meta property='og:image' content='/favicon.png' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='200' />
          <meta property='og:image:height' content='200' />
          <meta property='og:type' content='website' />

          <meta property='og:updated_time' content='1588497367' />
          <meta property='og:url' content='https://donlee.online' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
