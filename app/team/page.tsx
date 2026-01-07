import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Founder & CEO",
    role: "Strategic Vision",
    image: "/professional-portrait-placeholder-ceo.jpg",
    bio: "Leading the charge in revolutionizing restaurant technology",
  },
  {
    name: "CTO",
    role: "Technology Innovation",
    image: "/professional-portrait-placeholder-cto.jpg",
    bio: "Building cutting-edge AI solutions for the food industry",
  },
  {
    name: "Head of Product",
    role: "Product Strategy",
    image: "/professional-portrait-placeholder-product.jpg",
    bio: "Designing experiences that delight users",
  },
  {
    name: "Head of Sales",
    role: "Business Development",
    image: "/professional-portrait-placeholder-sales.jpg",
    bio: "Connecting restaurants with the tools they need",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Meet the <span className="text-accent">Dream Team</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Passionate innovators dedicated to transforming the restaurant industry
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            We're always looking for talented individuals who share our passion for innovation
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
