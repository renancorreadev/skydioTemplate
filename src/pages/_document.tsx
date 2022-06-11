import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>{/*  Add font files or html attributes here. */}</Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
