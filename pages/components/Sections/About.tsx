const About = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-rose-500">
              Our Mission
            </h3>
            <p className="text-gray-300 mb-4">
              Jachao was created to make healthcare information and tools
              accessible to everyone across Nepal. We combined our technical
              skills with extensive research to create an app that addresses
              diverse health needs.
            </p>
            <p className="text-gray-300">
              As computer engineering students, we recognized the gap in digital
              health solutions tailored for the Nepali population and decided to
              build a comprehensive solution.
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-900 to-pink-800 rounded-2xl p-6 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-lg">Made for Nepal</h4>
              <p className="text-gray-300">
                Tailored to our unique healthcare needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
