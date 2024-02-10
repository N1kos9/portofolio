import Header from "./header";
import Head from "next/head";
import { CustomCursor } from "cursor-style";
export default function Page({ children }: React.PropsWithChildren) {
  return (
    <>
      <main>
        <Head>
          <title>Nikos</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="./logo.png" type="image/png" />
          <meta
            name="description"
            content="Front-end developer, freelancer and your dream maker"
          />
        </Head>
        <Header />
        {children}
        <CustomCursor type="one" />
      </main>
    </>
  );
}
