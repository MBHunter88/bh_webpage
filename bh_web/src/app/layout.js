// app/layout.js
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bedford Hunter Better Home",
  description: "Full-spectrum doula and newborn care services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bh-body">
          <header className="site-header">
        <div className="site-header-inner">
          <div className="site-logo">
            <Image
              src="/logo.webp" 
              alt="Bedford Hunter Better Home logo"
              width={56}
              height={56}
              className="site-logo-img"
              priority
            />
            <span className="site-logo-text">Bedford Hunter Better Home</span>
          </div>

          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

        <main className="bh-main">{children}</main>

          {/* FOOTER */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>© {new Date().getFullYear()} Bedford Hunter Better Home</span>
          <span>Serving families in the Bay Area and surrounding areas.</span>
        </div>
      </footer>
      </body>
    </html>
  );
}
