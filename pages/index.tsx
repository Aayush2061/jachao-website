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
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
