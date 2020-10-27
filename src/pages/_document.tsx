import React from "react";
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { readFileSync } from 'fs'
import path from 'path'

type DocumentFiles = {
  sharedFiles: readonly string[];
  pageFiles: readonly string[];
  allFiles: readonly string[];
}

class InlineStylesHead extends Head {

  getCssLinks({ sharedFiles }: DocumentFiles): JSX.Element[] {
    const { assetPrefix } = this.context
    return sharedFiles
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ))
  }
}

// noinspection JSUnusedGlobalSymbols
export default class MyDocument extends Document {

  render(): JSX.Element {
    return (
      <Html lang="en">
        <InlineStylesHead>
          <link rel="apple-touch-icon" href="/icons/icon192.png" />

          <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon32.png" />

          <link rel="manifest" href="/site.webmanifest" />

          {process.env.THEME_COLOR && <meta name="theme-color" content={process.env.THEME_COLOR} />}
        </InlineStylesHead>

        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
