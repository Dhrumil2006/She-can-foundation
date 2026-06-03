import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Moon, Sun, ArrowUp, Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft py-2" : "py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="She Can Foundation logo" className="h-10 w-10 transition-transform group-hover:scale-110 group-hover:rotate-6" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-gradient text-lg">She Can</div>
              <div className="text-[10px] tracking-widest uppercase text-muted-foreground">Foundation</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link key={n.to} to={n.to} className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${active ? "text-primary" : "text-foreground/70 hover:text-primary"}`}>
                  {active && <motion.span layoutId="navpill" className="absolute inset-0 bg-primary/10 rounded-full" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                  <span className="relative">{n.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-primary/10 transition">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link to="/volunteer" className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-accent text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5">
              <Heart className="w-4 h-4" /> Donate
            </Link>
            <button onClick={() => setOpen((o) => !o)} className="lg:hidden p-2 rounded-full hover:bg-primary/10" aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="px-4 py-3 rounded-xl hover:bg-primary/10 font-medium">{n.label}</Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 animate-blob" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 animate-blob" style={{ animationDelay: "3s" }} />
        <div className="relative container mx-auto px-4 py-16 text-white">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="" className="h-10 w-10 bg-white/20 rounded-full p-1" />
                <div>
                  <div className="font-display font-bold">She Can Foundation</div>
                  <div className="text-xs opacity-80">Empowering women globally</div>
                </div>
              </div>
              <p className="text-sm opacity-90">Empowering Women, Transforming Communities.</p>
              <div className="flex gap-3 mt-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 transition flex items-center justify-center"><Icon className="w-4 h-4" /></a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm opacity-90">
                {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:opacity-100 hover:underline">{n.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5" />hello@shecanfoundation.org</li>
                <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5" />+91 98765 43210</li>
                <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5" />New Delhi, India</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-sm opacity-90 mb-3">Inspiring stories, monthly.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input type="email" required placeholder="Your email" className="flex-1 px-3 py-2 rounded-full bg-white/15 placeholder-white/60 text-sm focus:outline-none focus:bg-white/25" />
                <button className="px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold">Join</button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/20 text-xs opacity-80 text-center">© {new Date().getFullYear()} She Can Foundation. All rights reserved.</div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-accent text-white shadow-glow flex items-center justify-center hover:scale-110 transition">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
