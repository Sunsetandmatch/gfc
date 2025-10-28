"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Calendar, Mic, Home } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items } = useCart()

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = `/#${sectionId}`
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      style={{
        backgroundColor: "white",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #e5e7eb",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90915215-AD23-400E-A679-7825CBDD4031.jpg-2OQSJPZ7rLWxjm35Y4erKFKUNUtRTO.jpeg"
              alt="Global Fans Club"
              width={200}
              height={40}
              style={{ height: "32px", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <Link
              href="/"
              style={{
                color: "black",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              <Home style={{ height: "16px", width: "16px", marginRight: "4px" }} />
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              style={{
                color: "black",
                fontWeight: "500",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              About
            </button>
            <Link
              href="/shop"
              style={{
                color: "black",
                fontWeight: "500",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Shop
            </Link>
            <Link
              href="/experiences"
              style={{
                color: "black",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              <Calendar style={{ height: "16px", width: "16px", marginRight: "4px" }} />
              Events
            </Link>
            <button
              onClick={() => scrollToSection("guest-speakers")}
              style={{
                color: "black",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              <Mic style={{ height: "16px", width: "16px", marginRight: "4px" }} />
              Speakers
            </button>
            <button
              onClick={() => scrollToSection("mailing-list")}
              style={{
                color: "black",
                fontWeight: "500",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Newsletter
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                color: "black",
                fontWeight: "500",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Contact
            </button>
          </nav>

          {/* Cart */}
          <Link href="/cart" style={{ position: "relative" }}>
            <ShoppingCart style={{ height: "24px", width: "24px", color: "black" }} />
            {itemCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  backgroundColor: "#2d5a27",
                  color: "white",
                  fontSize: "12px",
                  borderRadius: "9999px",
                  height: "20px",
                  width: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
