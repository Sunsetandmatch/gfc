import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const clubTeams = [
  {
    name: "Liverpool",
    slug: "liverpool",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-24-17-08-25%202.jpg-6mVwDzcgUphqe0jNHwCtxZKriP8WAl.jpeg",
    color: "bg-red-600",
    description: "You'll Never Walk Alone",
    available: true,
  },
  {
    name: "Manchester United",
    slug: "manchester-united",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44%203.jpg-3L1kXasYyyxnZW3hUgE2FPQGEgnTmQ.jpeg",
    color: "bg-red-600",
    description: "The Red Devils",
    available: true,
  },
  {
    name: "Real Madrid",
    slug: "real-madrid",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-20-53.jpg-v1albwva4nZ5jMsx5bT45Fpd4TPIlw.jpeg",
    color: "bg-white border-2 border-gray-300",
    description: "Hala Madrid",
    available: true,
  },
  {
    name: "AC Milan",
    slug: "ac-milan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44.jpg-5bo3Lp7j69JAzTF2lx86JFH1d8RDjo.jpeg",
    color: "bg-red-600",
    description: "Rossoneri",
    available: true,
  },
  {
    name: "Barcelona",
    slug: "barcelona",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-16-14.jpg-gxBQTmx2JtNLuN78xWpnjsy1sUgb5w.jpeg",
    color: "bg-blue-700",
    description: "Més que un club",
    available: false,
  },
  {
    name: "Arsenal",
    slug: "arsenal",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19243.jpg-8BlZypchPQgNJ10aOxt6oiTdjlbfy1.jpeg",
    color: "bg-red-600",
    description: "The Gunners",
    available: true,
  },
  {
    name: "Ajax",
    slug: "ajax",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44%202.jpg-Acm7RrN4NcIGMn2LgP5nGykYWUIxnG.jpeg",
    color: "bg-red-600",
    description: "Godenzonen",
    available: false,
  },
  {
    name: "Chelsea",
    slug: "chelsea",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-34-36.jpg-6UFhOwyJO3WaMAKyAjkvykFa1Kb1VX.jpeg",
    color: "bg-blue-600",
    description: "The Blues",
    available: true,
  },
  {
    name: "Manchester City",
    slug: "manchester-city",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-36.jpg-o8SZFy6piJlXL05ivWj8QeMmEDCcmV.jpeg",
    color: "bg-sky-400",
    description: "Citizens",
    available: false,
  },
  {
    name: "Bayer Leverkusen",
    slug: "bayer-leverkusen",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-54-14.jpg-SsyUFREQXgAH2sN6XAhu1mbi2pn4Cx.jpeg",
    color: "bg-yellow-400",
    description: "Die Werkself",
    available: false,
  },
  {
    name: "Celtic",
    slug: "celtic",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37.jpg-BApwGmjfYlIU8en4JuWBya33Ha5BDv.jpeg",
    color: "bg-green-600",
    description: "The Bhoys",
    available: false,
  },
  {
    name: "Rangers",
    slug: "rangers",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37%204.jpg-BzpH476CCOjnmBV4hYgViBLlvSOzoh.jpeg",
    color: "bg-blue-700",
    description: "The Gers",
    available: false,
  },
  {
    name: "Bayern Munich",
    slug: "bayern-munich",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37%202.jpg-pmLLVvm4yaDxFAKAz6MMrcMegA9anC.jpeg",
    color: "bg-red-600",
    description: "Mia san mia",
    available: false,
  },
  {
    name: "Juventus",
    slug: "juventus",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37%203.jpg-dTeUXMd95eDCqjmTJdGYVHxP9D1pLR.jpeg",
    color: "bg-black",
    description: "The Old Lady",
    available: false,
  },
  {
    name: "Newcastle",
    slug: "newcastle",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-47-33.jpg-Wm6s73JOmfl5tpDJZFBJTdS0NtbCAq.jpeg",
    color: "bg-black",
    description: "The Magpies",
    available: false,
  },
  {
    name: "Paris Saint-Germain",
    slug: "paris-saint-germain",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-47-34.jpg-WvmB0W0ktg48lmrPG9DgcW10D014rv.jpeg",
    color: "bg-blue-900",
    description: "Ici c'est Paris",
    available: false,
  },
]

const internationalTeams = [
  {
    name: "England",
    slug: "england",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-25-22%203.jpg-vTPemklt4AfprrnokFwucyjRGPnKe5.jpeg",
    color: "bg-white border-2 border-red-600",
    description: "Three Lions",
    available: false,
  },
  {
    name: "Argentina",
    slug: "argentina",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-25-22%202.jpg-lx6VcBwnfdpuBvKj4Rut45NhjQgTrl.jpeg",
    color: "bg-sky-400",
    description: "La Albiceleste",
    available: false,
  },
  {
    name: "Brazil",
    slug: "brazil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-25-22.jpg-70A4thWtlZwCX4VvlAO6logHwOqXwQ.jpeg",
    color: "bg-yellow-400 border-2 border-green-600",
    description: "Seleção",
    available: false,
  },
  {
    name: "Germany",
    slug: "germany",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-26-02.jpg-eYZazluo8fDdlK0K9CAn0iwwEchdHo.jpeg",
    color: "bg-yellow-400 border-2 border-red-600",
    description: "Die Mannschaft",
    available: false,
  },
]

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ paddingTop: "96px", paddingBottom: "64px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "white",
                  border: "2px solid #e5e7eb",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <span style={{ color: "#ef4444", fontSize: "32px" }}>★</span>
              </div>
            </div>
            <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
              Shop Your Team
            </h1>
            <p style={{ fontSize: "20px", color: "#4b5563", maxWidth: "768px", margin: "0 auto" }}>
              Choose your team to explore authentic memorabilia, signed items, and exclusive collectibles
            </p>
          </div>

          {/* Club Teams Section */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  border: "2px solid #e5e7eb",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  marginRight: "16px",
                }}
              >
                <span style={{ color: "#ef4444", fontSize: "18px" }}>★</span>
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#111827" }}>Club Teams</h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "24px",
              }}
            >
              {clubTeams.map((team) => (
                <Link key={team.slug} href={`/shop/${team.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                      transition: "all 0.3s",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    {/* Availability indicator */}
                    {team.available && (
                      <div style={{ position: "absolute", top: "8px", right: "8px", zIndex: 10 }}>
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          }}
                        >
                          <span style={{ color: "#ef4444", fontSize: "12px" }}>★</span>
                        </div>
                      </div>
                    )}

                    {!team.available && (
                      <div style={{ position: "absolute", top: "8px", right: "8px", zIndex: 10 }}>
                        <span
                          style={{
                            backgroundColor: "#6b7280",
                            color: "white",
                            padding: "4px 8px",
                            borderRadius: "16px",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Card Content */}
                    <div style={{ padding: "24px", textAlign: "center" }}>
                      {/* Team Logo */}
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                            overflow: "hidden",
                            backgroundColor: team.name === "Liverpool" || team.name === "Arsenal" ? "#dc2626" : "white",
                          }}
                        >
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={`${team.name} logo`}
                            width={80}
                            height={80}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>

                      {/* Team Name */}
                      <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#111827", marginBottom: "8px" }}>
                        {team.name}
                      </h3>

                      {/* Team Description */}
                      <p style={{ color: "#4b5563", fontSize: "14px", marginBottom: "16px" }}>{team.description}</p>

                      {/* Shop Button */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2d5a27",
                          fontWeight: "500",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>{team.available ? "Shop Now" : "View Collection"}</span>
                        <ChevronRight style={{ height: "16px", width: "16px" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* International Teams Section */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  border: "2px solid #e5e7eb",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  marginRight: "16px",
                }}
              >
                <span style={{ color: "#ef4444", fontSize: "18px" }}>★</span>
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#111827" }}>International Teams</h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "24px",
              }}
            >
              {internationalTeams.map((team) => (
                <Link key={team.slug} href={`/shop/${team.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                      transition: "all 0.3s",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    {/* Coming Soon indicator */}
                    <div style={{ position: "absolute", top: "8px", right: "8px", zIndex: 10 }}>
                      <span
                        style={{
                          backgroundColor: "#3b82f6",
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "16px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        Coming Soon
                      </span>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: "24px", textAlign: "center" }}>
                      {/* Team Logo */}
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                            overflow: "hidden",
                            backgroundColor: "white",
                            border: "2px solid #e5e7eb",
                          }}
                        >
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={`${team.name} logo`}
                            width={80}
                            height={80}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>

                      {/* Team Name */}
                      <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#111827", marginBottom: "8px" }}>
                        {team.name}
                      </h3>

                      {/* Team Description */}
                      <p style={{ color: "#4b5563", fontSize: "14px", marginBottom: "16px" }}>{team.description}</p>

                      {/* Shop Button */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2d5a27",
                          fontWeight: "500",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>View Collection</span>
                        <ChevronRight style={{ height: "16px", width: "16px" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Liverpool Featured Section */}
          <div
            style={{
              marginTop: "64px",
              background: "linear-gradient(to right, #dc2626, #b91c1c)",
              color: "white",
              padding: "32px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "16px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "white",
                  border: "2px solid #e5e7eb",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <span style={{ color: "#ef4444", fontSize: "14px" }}>★</span>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>
                Liverpool Collection Available Now!
              </h2>
              <p style={{ fontSize: "20px", marginBottom: "24px", opacity: 0.9 }}>
                Explore our exclusive Liverpool memorabilia including signed shirts, framed displays, and rare
                collectibles
              </p>
              <Link
                href="/shop/liverpool"
                style={{
                  backgroundColor: "white",
                  color: "#2d5a27",
                  padding: "12px 32px",
                  display: "inline-block",
                  borderRadius: "4px",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                Shop Liverpool Collection
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
