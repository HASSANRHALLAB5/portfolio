import Head from "next/head";

export default function SEO({ title, image, description, site = "/" }) {
  const siteUrl = "https://www.Hassan.com";
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${site}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${image}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}${image}`} />
        <meta name="twitter:creator" content="@younessdev" />
        <meta name="twitter:site" content="@younessdev" />
      </Head>
    </>
  );
}
