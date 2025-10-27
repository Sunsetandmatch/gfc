"use client"

import Header from "@/components/header"
import VideoHero from "@/components/video-hero"
import AboutUs from "@/components/about-us"
import GuestSpeakersSection from "@/components/guest-speakers-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MailingListSection from "@/components/mailing-list-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-red-600 text-white text-center py-4 text-2xl font-bold">
        ✓ THIS IS THE CORRECT V0 CODE - DEPLOYED SUCCESSFULLY
      </div>
      <Header />
      <VideoHero />

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Guest Speakers Section */}
      <section id="guest-speakers">
        <GuestSpeakersSection />
      </section>

      {/* Mailing List Section */}
      <section id="mailing-list">
        <MailingListSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  )
}
