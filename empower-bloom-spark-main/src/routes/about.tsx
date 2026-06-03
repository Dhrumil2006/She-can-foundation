import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, GraduationCap, Crown, Lightbulb, HandHeart, Users, Quote } from "lucide-react";
import community from "@/assets/community.jpg";
import leadership from "@/assets/leadership.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — She Can Foundation" },
      { name: "description", content: "Our mission, vision, values, and the founder's message behind She Can Foundation." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, t: "Equality", d: "Every woman, every voice." },
  { icon: GraduationCap, t: "Education", d: "Knowledge is power, multiplied." },
  { icon: Crown, t: "Leadership", d: "She doesn't wait, she leads." },
  { icon: HandHeart, t: "Empowerment", d: "Confidence to take the next step." },
  { icon: Lightbulb, t: "Innovation", d: "New ideas. Old wisdom. Better futures." },
  { icon: Users, t: "Community Impact", d: "One woman lifts many." },
];

const timeline = [
  { y: "2015", t: "The first kitchen-table meeting", d: "Three women, one dream — opportunity for all." },
  { y: "2017", t: "First scholarship cohort", d: "25 girls receive full school sponsorship." },
  { y: "2019", t: "Digital Literacy program", d: "Launched in 12 villages across 3 states." },
  { y: "2021", t: "1,000 entrepreneurs funded", d: "Microgrants spark hundreds of small businesses." },
  { y: "2023", t: "She Leads Academy", d: "A flagship leadership institute for women." },
  { y: "2025", t: "10,000+ lives changed", d: "And we're just getting started." },
];

function About() {
  return (
    <>
      <section className="py-20 container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">About us</span>
          <h1 className="mt-2 text-4xl md:text-6xl font-display font-bold">A foundation built on <span className="text-gradient">her</span> belief.</h1>
          <p className="mt-5 text-muted-foreground text-lg">She Can Foundation is a women-led non-profit creating sustainable pathways out of inequality through education, entrepreneurship, and leadership.</p>
        </motion.div>
        <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} src={community} alt="Community of women" className="rounded-3xl shadow-glow" loading="lazy" />
      </section>

      <section className="py-12 container mx-auto px-4 grid md:grid-cols-3 gap-5">
        {[
          { icon: Target, t: "Mission", d: "To empower women with the tools, training, and trust they need to live independent, dignified lives." },
          { icon: Eye, t: "Vision", d: "A world where every woman is free to choose her future and lead the change she imagines." },
          { icon: Sparkles, t: "Promise", d: "Real programs. Measured impact. Lifetime support for the women in our community." },
        ].map((b, i) => (
          <motion.div key={b.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-3xl p-7 hover:shadow-glow hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-2xl bg-gradient-accent text-white flex items-center justify-center"><b.icon className="w-5 h-5" /></div>
            <h3 className="mt-4 text-xl font-display font-bold">{b.t}</h3>
            <p className="mt-2 text-muted-foreground">{b.d}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">Core values</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">What we stand for</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div key={v.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-3xl p-6 group hover:shadow-glow transition">
              <v.icon className="w-8 h-8 text-primary group-hover:scale-110 transition" />
              <h3 className="mt-4 font-display font-bold text-lg">{v.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
          <img src={leadership} alt="Founder" loading="lazy" className="rounded-3xl shadow-soft" />
          <div className="md:col-span-2">
            <Quote className="w-10 h-10 text-primary/40" />
            <p className="mt-3 text-xl md:text-2xl font-display italic leading-relaxed">"I grew up watching women carry the world on their shoulders without ever being asked what they wanted to build. She Can Foundation exists to ask, to listen, and to invest in her answer."</p>
            <div className="mt-6">
              <div className="font-semibold">Dr. Ananya Mehta</div>
              <div className="text-sm text-muted-foreground">Founder & CEO, She Can Foundation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">Our story</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">A decade of rising</h2>
        </div>
        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2" />
          {timeline.map((e, i) => (
            <motion.div key={e.y} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative mb-10 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"} pl-12 md:pl-0`}>
              <div className={`absolute top-2 w-4 h-4 rounded-full bg-gradient-accent shadow-glow ${i % 2 ? "md:-left-2 left-2.5" : "md:-right-2 left-2.5"} -translate-y-0 md:translate-x-0`} />
              <div className="glass rounded-2xl p-5">
                <div className="text-sm font-bold text-primary">{e.y}</div>
                <div className="font-display font-bold text-lg mt-1">{e.t}</div>
                <p className="text-sm text-muted-foreground mt-1">{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
