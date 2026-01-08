import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ShoppingCart,
  QrCode,
  Users,
  Brain,
  Gift,
  BarChart3,
  Smartphone,
  Cloud,
  Wifi,
  ArrowRight,
  Check,
} from "lucide-react"

const products = [
  {
    name: "myResto POS",
    tagline: "Complete Point of Sale Solution",
    icon: ShoppingCart,
    description: "Professional POS system designed for restaurants of all sizes",
    features: [
      "Lightning-fast billing (under 3 seconds)",
      "Cloud-synced mode with resilient local fallback",
      "Multi-device synchronization",
      "Kitchen display system (KDS) integration",
      "Inventory management",
      "Staff & payroll management",
      "Multiple payment methods",
      "Custom receipt printing",
    ],
    price: "Pay per use",
    badge: "Most Popular",
  },
  {
    name: "myResto QR",
    tagline: "Digital Menu & Ordering",
    icon: QrCode,
    description: "Transform dining experience with contactless ordering",
    features: [
      "Dynamic QR code menus",
      "Multi-language support",
      "Real-time menu updates",
      "Dietary filters & allergen info",
      "Direct to kitchen ordering",
      "Order customization",
      "Table management",
      "Split bill functionality",
    ],
    price: "Pay per use",
    badge: null,
  },
  {
    name: "myResto CRM",
    tagline: "Customer Relationship Management",
    icon: Users,
    description: "Build lasting relationships with your customers",
    features: [
      "Customer profile management",
      "Purchase history tracking",
      "Automated feedback collection",
      "Birthday & anniversary reminders",
      "Email & SMS campaigns",
      "Customer segmentation",
      "Behavioral analytics",
      "Personalized offers",
    ],
    price: "Pay per use",
    badge: null,
  },
  {
    name: "Dining GPT",
    tagline: "AI-Powered Dining Assistant",
    icon: Brain,
    description: "Next-generation AI for personalized dining experiences",
    features: [
      "Smart menu recommendations",
      "Dietary preference matching",
      "Flavor profile analysis",
      "Conversational ordering",
      "Allergy & restriction awareness",
      "Pairing suggestions",
      "Multilingual support",
      "Continuous learning",
    ],
    price: "On-demand",
    badge: "AI Powered",
  },
  {
    name: "Loyalty Rewards",
    tagline: "Customer Loyalty Program",
    icon: Gift,
    description: "Reward customers and drive repeat business",
    features: [
      "Digital loyalty cards",
      "Points-based rewards system",
      "Tiered membership programs",
      "Referral bonuses",
      "Special occasion rewards",
      "Gamification features",
      "Mobile wallet integration",
      "Analytics dashboard",
    ],
    price: "On-demand",
    badge: null,
  },
  {
    name: "Business Analytics",
    tagline: "Data-Driven Insights",
    icon: BarChart3,
    description: "Make smarter decisions with powerful analytics",
    features: [
      "Sales trend analysis",
      "Peak hour identification",
      "Menu performance metrics",
      "Revenue forecasting",
      "Customer behavior analysis",
      "Staff performance tracking",
      "Inventory optimization",
      "Custom reports & dashboards",
    ],
    price: "On-demand",
    badge: null,
  },
]

const platforms = [
  { name: "Web Dashboard", icon: Cloud, description: "Access from any browser" },
  { name: "Mobile Apps", icon: Smartphone, description: "iOS & Android apps" },
  { name: "Cloud Sync", icon: Wifi, description: "Resilient local fallback when connectivity is limited" },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Complete <span className="text-accent">Product Suite</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Integrated solutions that work seamlessly together to power your restaurant
          </p>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-16 bg-background border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Available Everywhere</h2>
            <p className="text-muted-foreground">Access your restaurant management tools from any device</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                  <platform.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-accent">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">Choose the tools that fit your restaurant's needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow relative">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{product.badge}</Badge>
                )}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                    <product.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-accent font-medium">{product.tagline}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <div className="text-sm text-muted-foreground">Pricing</div>
                    <div className="text-lg font-semibold text-accent">{product.price}</div>
                  </div>
                  <Link href="/learn">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Learn More</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">All Products Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our products are designed to integrate seamlessly, giving you a unified platform to manage your entire
            restaurant operation
          </p>
          <Link href="/learn">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Choose the products that fit your needs and start your free trial today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trial">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
