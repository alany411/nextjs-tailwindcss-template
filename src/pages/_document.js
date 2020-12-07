import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import * as fs from 'fs';
import * as path from 'path';

class InlineStylesHead extends Head {
  getCssLinks(files) {
    const { assetPrefix } = this.context;
    const cssFiles = files.allFiles.filter((f) => /\.css$/.test(f));
    const cssLinks = cssFiles.map((file) => (
      <style
        key={file}
        nonce={this.props.nonce}
        data-href={`${assetPrefix}/_next/${file}`}
        dangerouslySetInnerHTML={{
          __html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
        }}
      />
    ));

    return cssLinks.length ? cssLinks : null;
  }
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <InlineStylesHead>
          <link rel='icon' href='/favicon.ico' />
        </InlineStylesHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
