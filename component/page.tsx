import Header from "./header";
import Head from "next/head";
import { CustomCursor } from "cursor-style";

export default function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Nikos Murariu - Crafting Digital Experiences</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="./logo.png" type="image/png" />
        <meta
          name="description"
          content="Nikos Murariu, a front-end developer from Romania, specializes in creating engaging digital experiences through innovative web design and development."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta
          property="og:title"
          content="Nikos Murariu - Crafting Digital Experiences"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Nikos Murariu, where creativity meets functionality in web development."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta
          property="twitter:title"
          content="Nikos Murariu - Crafting Digital Experiences"
        />
        <meta
          property="twitter:description"
          content="Explore the portfolio of Nikos Murariu, where creativity meets functionality in web development."
        />
        <meta
          property="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />

        {/* Additional meta tags for SEO */}
        <meta name="author" content="Nikos Murariu" />
        <meta
          name="keywords"
          content="Front-end Developer, Web Development, User Experience, Web Design, Creative, Romania, Nikos Murariu"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/" />

        {/* Mobile Specific */}
        <meta name="format-detection" content="telephone=no" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />

        {/* Geo Tags */}
        <meta name="geo.region" content="RO" />
        <meta name="geo.placename" content="Romania" />
        <meta name="geo.position" content="45.9432;24.9668" />
        <meta name="ICBM" content="45.9432, 24.9668" />
      </Head>
      <main>
        <Header />
        {children}
        <CustomCursor type="one" delay={8} />
      </main>
    </>
  );
}
