"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu"
import Hero from "./components/Hero"
import ServiceCategories from "./components/ServiceCategories"
import MostBookedServices from "./components/MostBookedServices"
import CleaningPestControl from "./components/CleaningPestControl"
import ApplianceRepair from "./components/ApplianceRepair"
import HomeRepairInstallation from "./components/HomeRepairInstallation"
import SpaForWomen from "./components/SpaForWomen"
import SalonForMen from "./components/SalonForMen"
import JobOpportunities from "./components/JobOpportunities"
import NewNoteworthy from "./components/NewNoteworthy"
import Footer from "./components/Footer"
import BackgroundElements from "./components/BackgroundElements"
import SimpleCardGrid from "./components/SimpleCardGrid"
import SimpleCleaningServices from "./components/SimpleCleaningServices"
import Loading from "./components/Loading"
import Otp from "./components/Otp"
import "./App.css"

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <BackgroundElements />

      {/* Navbar */}
      <Navbar toggleMobileMenu={toggleMobileMenu} />

      {/* Mobile Menu */}
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      {/* Loading Spinner */}
      <Loading />
      {/* OTP Component */}
      <Otp />

      {/* Main Content */}

      {/* Hero Section */}
      <Hero />

      {/* Service Categories */}
      <ServiceCategories />

      {/* Most Booked Services */}
      <MostBookedServices />

      {/* Add simple card examples */}
      <SimpleCardGrid />
      <SimpleCleaningServices />

      {/* Cleaning & Pest Control */}
      <CleaningPestControl />

      {/* Appliance Repair & Services */}
      <ApplianceRepair />

      {/* Home Repair & Installation */}
      <HomeRepairInstallation />

      {/* Spa for Women */}
      <SpaForWomen />

      {/* Salon for Men */}
      <SalonForMen />

      {/* Job Opportunities Section */}
      <JobOpportunities />

      {/* New & Noteworthy Section */}
      <NewNoteworthy />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
