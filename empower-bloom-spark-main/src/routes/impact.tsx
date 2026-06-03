import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Counter } from "@/components/Counter";
import { Trophy, MapPin, TrendingUp } from "lucide-react";
import education from "@/assets/education.jpg";
import entrepreneur from "@/assets/entrepreneur.jpg";
import leadership from "@/assets/leadership.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — She Can Foundation" },
      { name: "description", content: "See our reach, growth, and the women whose lives have transformed." },
    ],
  }),
  component: Impact,
});

const regions = [
  { x: 25, y: 40, label: "Delhi NCR" },
  { x: 35, y: 55, label: "Rajasthan" },
  { x: 50, y: 50, label: "UP" },
  { x: 55, y: 70, label: "Maharashtra" },
  { x: 65, y: 80, label: "Karnataka" },
  { x: 70, y: 90, label: "Tamil Nadu" },
  { x: 75, y: 45, label: "Bihar" },
  { x: 80, y: 55, label: "West Bengal" },
];

const beforeAfter = [
  { name: "Sita", before: "Homemaker without income", after: "Tailoring entrepreneur, 6 staff", img: entrepreneur },
  { name: "Rukhsana", before: "Dropped out at grade 8", after: "Software engineer at a startup", img: education },
  { name: "Meera", before: "Daily-wage labourer", after: "Village panchayat leader", img: leadership },
];

const growth = [
  { y: "2020", v: 1200 }, { y: "2021", v: 2400 }, { y: "2022", v: 4100 },
  { y: "2023", v: 6300 }, { y: "2024", v: 8200 }, { y: "2025", v: 10000 },
];
const maxG = Math.max(...growth.map((g) => g.v));

function Impact() {
  return (
    <>
      <section className="py-20 container mx-auto px-4 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-primary">Impact</span>
        <h1 className="mt-2 text-4xl md:text-6xl font-display font-bold">Numbers behind the <span className="text-gradient">movement</span>.</h1>
        <p className="mt-5 text-muted-foreground text-lg">Every counter is a name. Every milestone is a story.</p>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { n: 10000, s: "+", l: "Women Empowered" },
          { n: 500, s: "+", l: "Volunteers" },
          { n: 150, s: "+", l: "Workshops" },
          { n: 50, s: "+", l: "Communities" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-3xl p-6 text-center hover:shadow-glow transition">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient"><Counter to={s.n} suffix={s.s} /></div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center"><span className="text-xs uppercase tracking-widest font-semibold text-primary">Where we work</span><h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">Interactive impact map</h2></div>
        <div className="mt-12 glass rounded-3xl p-6 md:p-10">
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-soft overflow-hidden">
            <div className="absolute inset-4 md:inset-10 border-2 border-dashed border-primary/20 rounded-3xl flex items-center justify-center text-primary/30 font-display text-lg">India</div>
            {regions.map((r) => (
              <button key={r.label} className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${r.x}%`, top: `${r.y}%` }}>
                <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                <span className="relative block w-3 h-3 rounded-full bg-gradient-accent shadow-glow" />
                <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs glass px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">{r.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center"><span className="text-xs uppercase tracking-widest font-semibold text-primary">Recognition</span><h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">Achievement gallery</h2></div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t: "NGO of the Year 2024", o: "India Impact Awards" },
            { t: "Women's Empowerment Honour", o: "UN Women India" },
            { t: "Digital Inclusion Prize", o: "Tech4Good" },
            { t: "Social Innovation Grant", o: "Asia Foundation" },
          ].map((a, i) => (
            <motion.div key={a.t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-3xl p-6 text-center hover:shadow-glow transition">
              <Trophy className="w-10 h-10 mx-auto text-primary" />
              <h3 className="mt-3 font-display font-bold">{a.t}</h3>
              <p className="text-xs text-muted-foreground mt-1">{a.o}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center"><span className="text-xs uppercase tracking-widest font-semibold text-primary">Transformations</span><h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">Before & after</h2></div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {beforeAfter.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-3xl overflow-hidden hover:shadow-glow transition">
              <img src={s.img} alt={s.name} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="font-display font-bold text-lg">{s.name}</div>
                <div className="mt-3 text-sm"><span className="text-muted-foreground">Before:</span> {s.before}</div>
                <div className="mt-1 text-sm"><span className="text-primary font-semibold">After:</span> {s.after}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-2 text-primary"><TrendingUp className="w-4 h-4" /><span className="text-xs uppercase tracking-widest font-semibold">Annual growth</span></div>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Lives reached, year over year</h2>
          <div className="mt-10 flex items-end gap-3 md:gap-5 h-64">
            {growth.map((g, i) => (
              <motion.div key={g.y} initial={{ height: 0 }} whileInView={{ height: `${(g.v / maxG) * 100}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }} className="flex-1 rounded-t-2xl bg-gradient-accent relative group">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition">{g.v.toLocaleString()}</span>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">{g.y}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center"><span className="text-xs uppercase tracking-widest font-semibold text-primary">Reach dashboard</span><h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">By the numbers</h2></div>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { l: "States covered", v: 18 }, { l: "Languages supported", v: 9 }, { l: "Partner orgs", v: 64 },
            { l: "Scholarships awarded", v: 3200 }, { l: "Microgrants disbursed", v: 1450 }, { l: "Volunteer hours", v: 84000 },
          ].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-3xl p-6 flex items-center gap-4">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-display font-bold text-gradient"><Counter to={s.v} suffix="+" /></div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
