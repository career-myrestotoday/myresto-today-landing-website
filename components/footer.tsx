import Link from "next/link"
import Image from "next/image"

const navigation = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-primary-foreground/20">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/1024.png" alt="myResto Today" width={40} height={40} className="h-10 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="text-[#E8C5A5] font-semibold text-lg italic">myResto</span>
                <span className="text-[#D4915E] font-medium text-sm -mt-1">today</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Revolutionizing the restaurant industry with AI-powered technology.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} myResto Today. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <span>DPIIT Recognized Startup</span>
            <span>KSUM Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
