import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BarChart3,
  Brain,
  QrCode,
  Users,
  TrendingUp,
  Wallet,
  Smartphone,
  Shield,
  Clock,
  Zap,
  ArrowRight,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Smart POS & Billing",
    description: "Lightning-fast billing under 3 seconds with cloud-enabled sync",
    benefits: [
      "Cloud-synced billing ensures no downtime",
      "Real-time inventory tracking",
      "Staff management & payroll",
      "Multiple payment methods",
      "Receipt customization",
    ],
  },
  {
    icon: QrCode,
    title: "QR Menu & Ordering",
    description: "Contactless dine-in experience that customers love",
    benefits: [
      "Dynamic menu updates in real-time",
      "Multi-language support",
      "Special dietary filters",
      "Direct kitchen integration",
      "Reduced wait times",
    ],
  },
  {
    icon: Users,
    title: "CRM & Customer Insights",
    description: "Understand your customers better than ever before",
    benefits: [
      "Customer profile management",
      "Purchase history tracking",
      "Behavioral analytics",
      "Personalized recommendations",
      "Automated feedback collection",
    ],
  },
  {
    icon: Shield,
    title: "Verified Diner-Only Reviews",
    description: "Build trust with authentic, verified customer reviews",
    benefits: [
      "100% verified diner reviews",
      "Combat fake review fraud",
      "Build genuine reputation",
      "Showcase authentic experiences",
      "Increase customer confidence",
    ],
  },
  {
    icon: Brain,
    title: "AI Dining GPT",
    description: "AI-powered recommendations for personalized experiences",
    benefits: [
      "Smart menu recommendations",
      "Dietary preference matching",
      "Flavor profile analysis",
      "Order prediction",
      "Personalized upselling",
    ],
  },
  {
    icon: Wallet,
    title: "Loyalty Wallet & Programs",
    description: "Reward your best customers and drive repeat business",
    benefits: [
      "Digital loyalty cards",
      "Point-based rewards",
      "Tiered membership programs",
      "Special occasion rewards",
      "Referral bonuses",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Analytics",
    description: "Data-driven insights to grow your restaurant",
    benefits: [
      "Sales trend analysis",
      "Peak hour identification",
      "Menu item performance",
      "Revenue forecasting",
      "Comparative analytics",
    ],
  },
  {
    icon: Zap,
    title: "Dynamic Pricing",
    description: "Optimize pricing based on demand and timing",
    benefits: [
      "AI-powered price optimization",
      "Happy hour automation",
      "Seasonal pricing",
      "Inventory-based pricing",
      "Maximize revenue",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Powerful Features for <span className="text-accent">Modern Restaurants</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Everything you need to streamline operations, delight customers, and grow your business
          </p>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">{"<"}3s</div>
              <p className="text-muted-foreground">Average billing time</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Mobile optimized</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">99%</div>
              <p className="text-muted-foreground">System uptime</p>
            </Card>
          </div>

          {/* Detailed Features */}
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                    <feature.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="p-1 bg-accent/10 rounded-full shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="p-8 bg-muted/30">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-accent/40" />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Start your free trial today and see how myResto Today can transform your restaurant
          </p>
          <Link href="/trial">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
