import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LearnPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">See How it Works</h1>
          <p className="text-lg text-primary-foreground/90">An overview of product flows, integrations, and deployment.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Order & Billing</h3>
            <p className="text-sm text-muted-foreground">Fast billing, cloud sync, kitchen integration, and reporting.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">QR Menu & Ordering</h3>
            <p className="text-sm text-muted-foreground">Contactless menus, real-time updates, and order routing to kitchen.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Analytics & Loyalty</h3>
            <p className="text-sm text-muted-foreground">Customer insights, loyalty programs, and revenue dashboards.</p>
          </Card>

          <div className="text-center mt-6">
            <Link href="/demo">
              <Button className="bg-accent text-accent-foreground">Request a Demo</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
