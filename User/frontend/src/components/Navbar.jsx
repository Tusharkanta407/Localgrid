"use client"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Search, MapPin, Menu } from "lucide-react"

const Navbar = ({ toggleMobileMenu }) => {
  const services = [
    "kitchen cleaning",
    "house painting",
    "AC repair",
    "plumbing",
    "electrical work",
    "car washing",
    "pest control",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentWord = services[wordIndex];
    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setWordIndex((prev) => (prev + 1) % services.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex]);

 
  return (
    <nav className={`fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-none"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between h-16 px-2 sm:px-4">
          {/* Logo */}
          <div className=" flex flex-1 items-center justify-start space-x-10 ml-1">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
            >
              LocalGrid
            </a>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">FAQ</a>
            <Button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-sky-500/25">
              Become a Tasker
            </Button>
          </div>
          </div>

          {/* Search Bar & Location - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end max-w-md mx-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={`Search for '${displayText}'...`}
                className="pl-10 pr-4 py-2 bg-gray-50 border-gray-300 focus:border-sky-500 text-gray-900 placeholder-gray-200 text-sm placeholder:font-light"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select className="pl-10 pr-8 py-2 bg-gray-50 border border-gray-300 rounded-md focus:border-sky-500 focus:outline-none text-gray-900">
                <option className="bg-white">Delhi</option>
                <option className="bg-white">Mumbai</option>
                <option className="bg-white">Bangalore</option>
                <option className="bg-white">Chennai</option>
              </select>
            </div>
            </div>

          {/* Auth Button - Desktop */}
          <div className="hidden md:flex justify-end">
            <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-lg shadow-sky-500/25">
              Login / Sign Up
            </Button>
          </div>
        

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="text-gray-700 hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={`Search for '${displayText}'...`}
                className="pl-10 pr-4 py-2 bg-gray-50 border-gray-300 focus:border-sky-500 text-gray-900 placeholder-gray-200 text-sm placeholder:font-light"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
              <select className="pl-7 pr-6 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900">
                <option className="bg-white">Delhi</option>
                <option className="bg-white">Mumbai</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
