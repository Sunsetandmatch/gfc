"use client"

import Header from "@/components/header"
import VideoHero from "@/components/video-hero"
import AboutUs from "@/components/about-us"
import GuestSpeakersSection from "@/components/guest-speakers-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MailingListSection from "@/components/mailing-list-section"

export default function Home() {
  console.log("[v0] Homepage is rendering - if you see this in browser console, the page is loading correctly")

  return (
    <div className="min-h-screen">
      <div
        className="bg-red-600 text-white text-center py-8 text-4xl font-bold fixed top-0 left-0 right-0 z-[9999]"
        style={{
          backgroundColor: "#ff0000",
          color: "#ffffff",
          fontSize: "32px",
          padding: "32px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        ✓ CORRECT V0 CODE DEPLOYED - VERSION 18:35
      </div>
      <div className="pt-24">
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
    </div>
  )
}
