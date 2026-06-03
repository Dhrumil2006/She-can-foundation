import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Heart, ChevronDown, GraduationCap, Laptop, Briefcase, Users, Compass, HeartPulse, PiggyBank, Sprout, Quote, Sparkles, Calendar } from "lucide-react";
import { Counter } from "@/components/Counter";
import hero from "@/assets/hero.jpg";
import education from "@/assets/education.jpg";
import entrepreneur from "@/assets/entrepreneur.jpg";
import leadership from "@/assets/leadership.jpg";
import community from "@/assets/community.jpg";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "She Can Foundation — Empowering Women, Inspiring Change" },
      { name: "description", content: "Together we create opportunities, leadership, education, and independence for women across communities." },
    ],
  }),
  component: Home,
});

const programs = [
  { icon: GraduationCap, title: "Women's Education", desc: "Scholarships and learning circles for girls.", img: education },
  { icon: Laptop, title: "Digital Literacy", desc: "Bridging the digital divide with tech skills.", img: education },
  { icon: Briefcase, title: "Entrepreneurship", desc: "Seed grants and business mentorship.", img: entrepreneur },
  { icon: Users, title: "Leadership Development", desc: "Cultivating tomorrow's women leaders.", img: leadership },
  { icon: Compass, title: "Career Guidance", desc: "Personalized pathways into the workforce.", img: entrepreneur },
  { icon: HeartPulse, title: "Health & Wellness", desc: "Awareness, screenings, and mental health.", img: community },
  { icon: PiggyBank, title: "Financial Independence", desc: "Savings, credit, and money literacy.", img: entrepreneur },
  { icon: Sprout, title: "Community Development", desc: "Grassroots programs led by women.", img: community },
];

const stories = [
  { name: "Priya Sharma", role: "Entrepreneur, Jaipur", quote: "From a tiny kitchen to my own café — She Can believed in me before I did.", img: entrepreneur },
  { name: "Aisha Khan", role: "Software Engineer, Mumbai", quote: "Their digital literacy program changed my family's future in 12 months.", img: education },
  { name: "Lakshmi Devi", role: "Community Leader, Bihar", quote: "I now lead 40 women in our village cooperative. We rise together.", img: community },
  { name: "Neha Verma", role: "Public Speaker, Delhi", quote: "I found my voice in a She Can workshop. Today thousands hear it.", img: leadership },
];

const quotes = [
  "The question isn't who's going to let me; it's who is going to stop me. — Ayn Rand",
  "I raise up my voice—not so I can shout, but so that those without a voice can be heard. — Malala Yousafzai",
  "A woman is the full circle. Within her is the power to create, nurture and transform. — Diane Mariechild",
  "There is no limit to what we, as women, can accomplish. — Michelle Obama",
];

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img src={hero} alt="Diverse empowered women" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-300/30 animate-blob hidden md:block" />
        <div className="absolute bottom-32 right-10 w-56 h-56 bg-purple-300/20 animate-blob hidden md:block" style={{ animationDelay: "2s" }} />

        <div className="relative container mx-auto px-4 py-20 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" /> A movement for every woman
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-display">
              Empowering Women. <br />
              <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">Inspiring Change.</span> <br />
              Building Futures.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-95">
              Together we create opportunities, leadership, education, and independence for women across communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/volunteer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-semibold shadow-glow hover:scale-105 transition">
                Join Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/volunteer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass border-white/40 font-semibold hover:bg-white/20 transition">
                <Heart className="w-4 h-4" /> Donate Now
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center text-xs">
          Scroll <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* IMPACT COUNTERS */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { n: 10000, s: "+", label: "Women Empowered" },
            { n: 500, s: "+", label: "Volunteers" },
            { n: 150, s: "+", label: "Workshops Conducted" },
            { n: 50, s: "+", label: "Communities Reached" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-3xl p-6 md:p-8 text-center hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 container mx-auto px-4">
        <SectionHead eyebrow="What we do" title="Programs that change lives" sub="Holistic pathways from learning to leading." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.08 }} className="group glass rounded-3xl overflow-hidden hover:shadow-glow hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-40 overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute top-3 left-3 w-11 h-11 rounded-2xl bg-white/90 text-primary flex items-center justify-center shadow-soft">
                  <p.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DONATION CALCULATOR */}
      <DonationCalculator />

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* QUOTE GENERATOR + PLEDGE */}
      <section className="py-20 container mx-auto px-4 grid lg:grid-cols-2 gap-6">
        <QuoteCard />
        <PledgeWall />
      </section>

      {/* JOURNEY */}
      <section className="py-20 container mx-auto px-4">
        <SectionHead eyebrow="Empowerment journey" title="Learn → Grow → Lead → Inspire" sub="Every woman's path, designed with care." />
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {["Learn", "Grow", "Lead", "Inspire"].map((step, i) => (
            <motion.div key={step} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative glass rounded-3xl p-6 text-center hover:shadow-glow transition">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-accent text-white flex items-center justify-center text-xl font-bold">{i + 1}</div>
              <h3 className="mt-4 font-display font-bold text-xl">{step}</h3>
              <p className="text-sm text-muted-foreground mt-1">Step {i + 1} of every woman's journey.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <Events />

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-white shadow-glow">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 animate-blob" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Be the change. Start today.</h2>
            <p className="mt-4 opacity-95 text-lg">Volunteer your time, share your skills, or fund a future. Every act matters.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/volunteer" className="px-7 py-3.5 rounded-full bg-white text-primary font-semibold hover:scale-105 transition">Become a Volunteer</Link>
              <Link to="/contact" className="px-7 py-3.5 rounded-full glass border-white/40 font-semibold hover:bg-white/20 transition">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
      <span className="text-xs uppercase tracking-widest font-semibold text-primary">{eyebrow}</span>
      <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function DonationCalculator() {
  const [amount, setAmount] = useState(1000);
  const tiers = [
    { min: 0, label: "Learning Materials", desc: "Notebooks, pens, and study kits for a girl in school." },
    { min: 1000, label: "Workshop Support", desc: "Sponsor a half-day workshop seat." },
    { min: 5000, label: "Skill Development Sponsorship", desc: "Full digital or vocational course for one woman." },
    { min: 10000, label: "Community Outreach Program", desc: "Field program reaching 50+ women in a village." },
  ];
  const tier = [...tiers].reverse().find((t) => amount >= t.min) ?? tiers[0];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">Donation calculator</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">See your impact in real-time.</h2>
          <p className="mt-3 text-muted-foreground">Move the slider to discover how your contribution transforms lives.</p>
        </div>
        <div className="glass rounded-3xl p-8 shadow-soft">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Your gift</div>
            <div className="text-5xl md:text-6xl font-display font-bold text-gradient mt-2">₹{amount.toLocaleString()}</div>
          </div>
          <input type="range" min={500} max={20000} step={500} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full mt-6 accent-primary" />
          <div className="mt-6 p-5 rounded-2xl bg-gradient-accent text-white">
            <div className="text-xs uppercase tracking-widest opacity-90">Funds</div>
            <div className="text-xl font-bold mt-1">{tier.label}</div>
            <p className="text-sm opacity-95 mt-1">{tier.desc}</p>
          </div>
          <button onClick={() => toast.success(`Thank you! Pledged ₹${amount.toLocaleString()}.`)} className="mt-5 w-full px-6 py-3 rounded-full bg-gradient-hero text-white font-semibold shadow-glow hover:scale-[1.02] transition">
            Donate ₹{amount.toLocaleString()}
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % stories.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-20 container mx-auto px-4">
      <SectionHead eyebrow="Success stories" title="Voices of transformation" />
      <div className="mt-12 relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-12 min-h-[320px]">
          {stories.map((s, idx) => (
            <motion.div key={idx} initial={false} animate={{ opacity: i === idx ? 1 : 0, x: i === idx ? 0 : 40 }} transition={{ duration: 0.5 }} className={`${i === idx ? "" : "pointer-events-none absolute inset-0"} flex flex-col md:flex-row gap-6 items-center p-2`}>
              <img src={s.img} alt={s.name} loading="lazy" className="w-28 h-28 rounded-full object-cover ring-4 ring-primary/20 shadow-soft" />
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-8 h-8 text-primary/40 mx-auto md:mx-0" />
                <p className="mt-2 text-lg md:text-xl font-display italic">"{s.quote}"</p>
                <div className="mt-4 font-semibold">{s.name}</div>
                <div className="text-sm text-muted-foreground">{s.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {stories.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-accent" : "w-2 bg-muted"}`} aria-label={`Story ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard() {
  const [i, setI] = useState(0);
  return (
    <div className="glass rounded-3xl p-8 shadow-soft flex flex-col">
      <span className="text-xs uppercase tracking-widest font-semibold text-primary">Daily inspiration</span>
      <h3 className="mt-2 text-2xl font-display font-bold">A spark for today</h3>
      <p className="mt-6 text-lg italic flex-1">"{quotes[i]}"</p>
      <button onClick={() => setI((x) => (x + 1) % quotes.length)} className="mt-6 self-start px-5 py-2.5 rounded-full bg-gradient-accent text-white font-semibold hover:scale-105 transition">New quote</button>
    </div>
  );
}

function PledgeWall() {
  const [pledges, setPledges] = useState<string[]>(["I will mentor one young woman this year. — Riya", "I'll donate monthly. — Anonymous", "Teaching coding to girls in my town. — Sana"]);
  const [text, setText] = useState("");
  return (
    <div className="glass rounded-3xl p-8 shadow-soft">
      <span className="text-xs uppercase tracking-widest font-semibold text-primary">Pledge wall</span>
      <h3 className="mt-2 text-2xl font-display font-bold">Make your commitment</h3>
      <form onSubmit={(e) => { e.preventDefault(); if (!text.trim()) return; setPledges([text, ...pledges]); setText(""); toast.success("Pledge added 💜"); }} className="mt-4 flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="I pledge to..." className="flex-1 px-4 py-2.5 rounded-full bg-white/60 dark:bg-white/10 border focus:outline-none focus:ring-2 ring-primary" />
        <button className="px-5 rounded-full bg-gradient-accent text-white font-semibold">Add</button>
      </form>
      <ul className="mt-5 space-y-2 max-h-48 overflow-y-auto pr-2">
        {pledges.map((p, i) => (
          <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="p-3 rounded-2xl bg-white/50 dark:bg-white/5 text-sm">{p}</motion.li>
        ))}
      </ul>
    </div>
  );
}

function Events() {
  const target = new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).getTime();
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const d = Math.max(0, target - now);
  const days = Math.floor(d / 86400000), hrs = Math.floor((d / 3600000) % 24), min = Math.floor((d / 60000) % 60), sec = Math.floor((d / 1000) % 60);
  return (
    <section className="py-20 container mx-auto px-4">
      <SectionHead eyebrow="Upcoming" title="Events & milestones" />
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8 shadow-soft">
          <div className="flex items-center gap-2 text-primary"><Calendar className="w-4 h-4" /><span className="text-xs uppercase tracking-widest font-semibold">Featured event</span></div>
          <h3 className="mt-2 text-2xl font-display font-bold">She Leads Summit 2026</h3>
          <p className="text-muted-foreground mt-1">A two-day gathering of changemakers, founders, and educators.</p>
          <div className="mt-6 grid grid-cols-4 gap-2 text-center">
            {[{ n: days, l: "Days" }, { n: hrs, l: "Hours" }, { n: min, l: "Min" }, { n: sec, l: "Sec" }].map((t) => (
              <div key={t.l} className="p-3 rounded-2xl bg-gradient-accent text-white">
                <div className="text-2xl font-bold">{String(t.n).padStart(2, "0")}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-90">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { date: "Mar 8", title: "International Women's Day Run", loc: "Delhi" },
            { date: "Apr 22", title: "Digital Skills Bootcamp", loc: "Online" },
            { date: "May 14", title: "Rural Entrepreneur Meetup", loc: "Jaipur" },
          ].map((e) => (
            <div key={e.title} className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow hover:-translate-y-0.5 transition">
              <div className="w-14 h-14 rounded-2xl bg-gradient-accent text-white flex flex-col items-center justify-center text-sm font-bold leading-tight">
                <span>{e.date.split(" ")[0]}</span><span>{e.date.split(" ")[1]}</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-muted-foreground">{e.loc}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
