const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-rose-900 to-pink-800 text-white py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Jachao — Nepal's Health App
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Your pocket health assistant: AI symptom checker, lab report analysis,
          period tracking, first-aid guidance, and mental health tools.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.jachao.app"
            className="bg-white text-rose-700 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get it on Google Play
          </a>
          <a
            href="#features"
            className="border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-rose-700 transition-colors duration-300"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
