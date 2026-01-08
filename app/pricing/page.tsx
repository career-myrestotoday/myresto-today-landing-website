import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Wallet, TrendingUp, Zap, Gift } from "lucide-react"
import Link from "next/link"

const premiumFeatures = [
  "Smart POS & Billing System",
  "QR Menu & Ordering",
  "Inventory Management",
  "Staff & Payroll Management",
  "CRM & Customer Database",
  "Multiple Payment Methods",
  "Kitchen Display System (KDS)",
  "Real-time Reporting",
  "Mobile Apps (iOS & Android)",
  "Cloud Backup & Security",
  "24/7 Customer Support",
  "Regular Feature Updates",
]

const onDemandFeatures = [
  {
    name: "Dining GPT",
    description: "AI-powered dining recommendations and conversational ordering",
    icon: Zap,
  },
  {
    name: "Loyalty Programs",
    description: "Advanced customer loyalty and rewards management",
    icon: Gift,
  },
  {
    name: "Dynamic Pricing",
    description: "AI-driven price optimization based on demand",
    icon: TrendingUp,
  },
  {
    name: "Business Analytics",
    description: "Advanced reporting and predictive analytics",
    icon: TrendingUp,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-accent">Affordable</span> & Flexible Pricing
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Pay only for what you use. No hidden fees, no long-term contracts
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 lg:p-12 border-2 border-accent shadow-xl">
              <div className="text-center mb-8">
                <Badge className="bg-accent text-accent-foreground mb-4">Pay-As-You-Go Model</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-lg text-muted-foreground">
                  Perfect for restaurants of all sizes - from small cafes to large chains
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-accent/5 rounded-xl p-6 text-center">
                  <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                    <Wallet className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Minimum Recharge</div>
                  <div className="text-4xl font-bold text-accent mb-2">₹100</div>
                  <p className="text-sm text-muted-foreground">Get started with just ₹100</p>
                </div>

                <div className="bg-accent/5 rounded-xl p-6 text-center">
                  <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Cost Per Use</div>
                  <div className="text-4xl font-bold text-accent mb-2">11p</div>
                  <p className="text-sm text-muted-foreground">Only 11 paise per transaction</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center">How It Works</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      1
                    </div>
                    <p className="text-sm font-medium mb-1">Recharge Your Account</p>
                    <p className="text-xs text-muted-foreground">Add credits starting from ₹100</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      2
                    </div>
                    <p className="text-sm font-medium mb-1">Use the Platform</p>
                    <p className="text-xs text-muted-foreground">Pay 11p per transaction</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      3
                    </div>
                    <p className="text-sm font-medium mb-1">Recharge Anytime</p>
                    <p className="text-xs text-muted-foreground">No monthly commitments</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/trial">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Premium Features Included */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-accent">Premium Features</span> Included
              </h2>
              <p className="text-lg text-muted-foreground">All features included with your pay-per-use plan</p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* On-Demand Features */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-accent">On-Demand</span> Add-Ons
              </h2>
              <p className="text-lg text-muted-foreground">
                Unlock advanced features as your business grows - pay only when you need them
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {onDemandFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      <Badge className="bg-accent/10 text-accent">Available on demand</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a monthly subscription fee?</h3>
              <p className="text-muted-foreground">
                No! We operate on a pay-as-you-go model. You only pay 11 paise per transaction with a minimum recharge
                of ₹100.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">What counts as a "use" or transaction?</h3>
              <p className="text-muted-foreground">
                Each order processed through the POS system, QR order, or customer transaction counts as one use.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Yes! There are no long-term contracts. Your unused credits remain in your account for when you need
                them.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Are there any hidden fees?</h3>
              <p className="text-muted-foreground">
                No hidden fees whatsoever. The 11 paise per use is all-inclusive for the premium features. On-demand
                features are charged separately when activated.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Start with just ₹100 and see the difference myResto Today can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trial">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
