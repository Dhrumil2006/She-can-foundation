import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Laptop, Briefcase, Users, Compass, HeartPulse, PiggyBank, Sprout, ArrowRight } from "lucide-react";
import education from "@/assets/education.jpg";
import entrepreneur from "@/assets/entrepreneur.jpg";
import leadership from "@/assets/leadership.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — She Can Foundation" },
      { name: "description", content: "Education, digital literacy, entrepreneurship, leadership, health, and more." },
    ],
  }),
  component: Programs,
});

const programs = [
  { icon: GraduationCap, title: "Women's Education", desc: "Scholarships, learning circles and tutoring for girls and women from underserved communities.", img: education },
  { icon: Laptop, title: "Digital Literacy", desc: "From smartphones to spreadsheets — the skills she needs to thrive online.", img: education },
  { icon: Briefcase, title: "Entrepreneurship Training", desc: "Microgrants, business plan coaching, and a founder community.", img: entrepreneur },
  { icon: Users, title: "Leadership Development", desc: "Cohort-based fellowships, mentorship, and public-speaking labs.", img: leadership },
  { icon: Compass, title: "Career Guidance", desc: "1:1 counselling, interview prep, and placement support.", img: entrepreneur },
  { icon: HeartPulse, title: "Health & Wellness Awareness", desc: "Reproductive health, nutrition, mental wellbeing.", img: community },
  { icon: PiggyBank, title: "Financial Independence", desc: "Banking, savings, credit, and money literacy programs.", img: entrepreneur },
  { icon: Sprout, title: "Community Development", desc: "Grassroots projects designed and led by local women.", img: community },
];

function Programs() {
  return (
    <>
      <section className="py-20 container mx-auto px-4 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-primary">Programs</span>
        <h1 className="mt-2 text-4xl md:text-6xl font-display font-bold">Real programs. <span className="text-gradient">Real change.</span></h1>
        <p className="mt-5 text-muted-foreground text-lg">Designed with women, for women — from classroom to boardroom.</p>
      </section>

      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
        {programs.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }} className="group glass rounded-3xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition">
            <div className="grid sm:grid-cols-5 gap-0">
              <div className="sm:col-span-2 relative h-48 sm:h-full overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
              </div>
              <div className="sm:col-span-3 p-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-accent text-white flex items-center justify-center"><p.icon className="w-5 h-5" /></div>
                <h3 className="mt-4 font-display font-bold text-xl">{p.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
                <Link to="/volunteer" className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">Get involved <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-14 text-white text-center shadow-glow">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Want to bring a program to your community?</h2>
          <p className="mt-3 opacity-95">We partner with local NGOs, schools, and corporates worldwide.</p>
          <Link to="/contact" className="mt-6 inline-flex px-7 py-3.5 rounded-full bg-white text-primary font-semibold hover:scale-105 transition">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
