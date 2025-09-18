const Download = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-rose-900 to-pink-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Download Jachao Today
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Take control of your health with Nepal's most comprehensive health app
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.jachao.app"
          className="bg-white text-rose-700 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 inline-block"
        >
          Get it on Google Play
        </a>
      </div>
    </section>
  );
};

export default Download;
