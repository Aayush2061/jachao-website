import Head from "next/head";
import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Features from "./components/Sections/Features";
import Screenshots from "./components/Sections/Screenshots";
import Download from "./components/Sections/Download";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Head>
        <title>Jachao — Nepal's Health App</title>
        <meta
          name="description"
          content="Your pocket health assistant: AI symptom checker, lab report analysis, period tracking, first-aid guidance, and mental health tools."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jachaoo.com/" />
        <meta property="og:title" content="Jachao — Nepal's Health App" />
        <meta
          property="og:description"
          content="Your pocket health assistant: AI symptom checker, lab report analysis, period tracking, first-aid guidance, and mental health tools."
        />
        <meta
          property="og:image"
          content="https://www.jachaoo.com/android-icon-192x192.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://www.jachaoo.com/" />
        <meta property="twitter:title" content="Jachao — Nepal's Health App" />
        <meta
          property="twitter:description"
          content="Your pocket health assistant: AI symptom checker, lab report analysis, period tracking, first-aid guidance, and mental health tools."
        />
        <meta
          property="twitter:image"
          content="https://www.jachaoo.com/android-icon-192x192.png"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Jachao — Nepal's Health App",
              url: "https://www.jachaoo.com/",
              logo: "https://www.jachaoo.com/android-icon-192x192.png",
              description:
                "Your pocket health assistant: AI symptom checker, lab report analysis, period tracking, first-aid guidance, and mental health tools.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Android",
            }),
          }}
        />
      </Head>

      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="screenshots">
        <Screenshots />
      </section>
      <section id="download">
        <Download />
      </section>
      <Footer />
    </div>
  );
}
