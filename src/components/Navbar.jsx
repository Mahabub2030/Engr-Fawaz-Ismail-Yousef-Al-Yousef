import { Menu, X } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full ">
          <a className="mr-6 flex items-center space-x-2 " href="#">
            <span className="hidden font-bold sm:inline-block">
               <TypeAnimation
                  sequence={[
                    "Fawaz Ismail ,", // type this
                    1500, // wait
                    "", // clear it completely
                    500, // short pause
                    "Yousef Al-Yousef", // type next
                    150, // wait
                    "", // clear again before repeating
                    500, // short pause
                    "Director – Landscaping", // type next
                    150, // wait
                    "", // clear again before repeating
                    500,
                    "King Salman International Airport Development Company",
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={Infinity}
                  className="md:text-2xl text-xl mb-4 text-black"
                />
            </span>
          </a>
          <nav className="md:flex hidden items-center space-x-6 text-lg font-medium ">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
            >
              About
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#education"
            >
              Education
            </a>

            {/* <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#projects"
            >
              Projects
            </a> */}
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#testimonial"
            >
              Testimonials
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#Eduducation"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Eduducation
            </a>
            {/* <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Projects
            </a> */}
            <a
              href="#testimonial"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
