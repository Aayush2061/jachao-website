import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="relative h-10 w-10 mr-3">
              <Image
                src="/logo.jpg"
                alt="Jachao Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Jachao</span>
              <p className="mt-2">Nepal's premier health app</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <button
              onClick={() => {
                const element = document.getElementById("home");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("about");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="hover:text-white transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("features");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("screenshots");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="hover:text-white transition-colors"
            >
              Screenshots
            </button>
            {/* Add Privacy Policy Link */}
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div>
            <p>© {new Date().getFullYear()} Jachao</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
