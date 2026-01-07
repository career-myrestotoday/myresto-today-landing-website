import Link from "next/link"
import Image from "next/image"

const navigation = {
  product: [
    { name: "iXpos", href: "/products" },
    { name: "Pappel App", href: "/products" },
    { name: "Diner GPT", href: "/features" },
    { name: "Bezcoin", href: "/pricing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Press", href: "/" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer
      className="relative bg-[#2b1410] text-primary-foreground"
      style={{ backgroundImage: "url('/images/hero-restaurant.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-primary-foreground/10">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="myResto Today" width={64} height={64} className="h-16 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="text-[#E8C5A5] font-semibold text-xl">myResto</span>
                <span className="text-[#D4915E] font-medium text-sm -mt-1">today</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 max-w-sm">
              Empowering the food service industry with cutting-edge AI technology. From local cafes to global
              chains, we have the solution for you.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-accent">Twitter</a>
              <a href="#" className="hover:text-accent">LinkedIn</a>
              <a href="#" className="hover:text-accent">Instagram</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <address className="not-italic text-sm text-primary-foreground/80 space-y-2">
              <div>Building No. 60/44, third floor, JC Chambers</div>
              <div>Panampilly Nagar, Ernakulam - 682036, Kerala</div>
              <div className="flex items-center gap-2 mt-2">📧 <a href="mailto:myrestotoday@gmail.com" className="hover:text-accent">myrestotoday@gmail.com</a></div>
              <div className="flex items-center gap-2">📞 <a href="tel:+919747650176" className="hover:text-accent">+919747650176</a></div>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">© {new Date().getFullYear()} myResto Today Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
