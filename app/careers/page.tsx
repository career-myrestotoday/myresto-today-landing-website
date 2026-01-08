import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Careers at <span className="text-accent">myResto Today</span></h1>
          <p className="text-lg text-primary-foreground/90">We're hiring across product, engineering, and growth — join us.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Open Positions</h3>
            <ul className="list-disc pl-6 text-sm text-muted-foreground">
              <li>Frontend Engineer</li>
              <li>Backend Engineer</li>
              <li>Sales Executive</li>
              <li>Customer Success Manager</li>
            </ul>
            <div className="mt-4">
              <Link href="/contact">
                <Button className="bg-accent text-accent-foreground">Apply / Contact HR</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
