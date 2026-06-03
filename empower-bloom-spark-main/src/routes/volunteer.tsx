import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Trophy, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — She Can Foundation" },
      { name: "description", content: "Join 500+ volunteers shaping women's futures. Register today." },
    ],
  }),
  component: Volunteer,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  skills: z.string().trim().max(300).optional(),
  interests: z.string().min(1, "Pick an interest").max(80),
  availability: z.string().min(1, "Select availability").max(40),
});
type FormData = z.infer<typeof schema>;

const leaders = [
  { n: "Aarti R.", h: 240 }, { n: "Kavya M.", h: 198 }, { n: "Sara P.", h: 175 },
  { n: "Ishaani G.", h: 162 }, { n: "Nikita S.", h: 144 },
];

function Volunteer() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Volunteer:", data);
    setDone(true);
    toast.success("Welcome to the movement! 💜");
    reset();
  };

  return (
    <>
      <section className="py-20 container mx-auto px-4 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-primary">Volunteer</span>
        <h1 className="mt-2 text-4xl md:text-6xl font-display font-bold">Lend your time. <span className="text-gradient">Change a life.</span></h1>
        <p className="mt-5 text-muted-foreground text-lg">Whether you have an hour a week or a weekend a month — we'll match your skills to a cause that matters.</p>
      </section>

      <section className="container mx-auto px-4 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-3xl p-8 shadow-soft">
          <h2 className="text-2xl font-display font-bold">Volunteer registration</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Full name" error={errors.name?.message}><input {...register("name")} className={input} placeholder="Your name" /></Field>
            <Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" className={input} placeholder="you@email.com" /></Field>
            <Field label="Phone" error={errors.phone?.message}><input {...register("phone")} className={input} placeholder="+91…" /></Field>
            <Field label="Availability" error={errors.availability?.message}>
              <select {...register("availability")} className={input} defaultValue="">
                <option value="" disabled>Select</option>
                <option>Weekdays</option><option>Weekends</option><option>Evenings</option><option>Flexible</option>
              </select>
            </Field>
            <Field label="Primary interest" error={errors.interests?.message} className="sm:col-span-2">
              <select {...register("interests")} className={input} defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>Teaching & Mentoring</option><option>Digital Skills</option><option>Health Awareness</option>
                <option>Event Support</option><option>Content & Storytelling</option><option>Fundraising</option>
              </select>
            </Field>
            <Field label="Skills (optional)" error={errors.skills?.message} className="sm:col-span-2">
              <textarea {...register("skills")} rows={3} className={input} placeholder="e.g. Public speaking, web design, accounting" />
            </Field>
            <button type="submit" className="sm:col-span-2 px-6 py-3.5 rounded-full bg-gradient-accent text-white font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition">Join the movement</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <div className="flex items-center gap-2 text-primary"><Trophy className="w-4 h-4" /><span className="text-xs uppercase tracking-widest font-semibold">Leaderboard</span></div>
            <h3 className="mt-2 font-display font-bold text-lg">Top volunteers</h3>
            <ul className="mt-4 space-y-2">
              {leaders.map((l, i) => (
                <li key={l.n} className="flex items-center justify-between p-3 rounded-2xl bg-white/50 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? "bg-gradient-accent text-white" : "bg-primary/10 text-primary"}`}>{i + 1}</span>
                    <span className="text-sm font-medium">{l.n}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{l.h} hrs</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="mt-2 font-display font-bold text-lg">Why volunteer?</h3>
            <ul className="mt-3 text-sm text-muted-foreground space-y-2">
              <li>• Learn from inspiring women leaders</li>
              <li>• Earn impact certificates & recognition</li>
              <li>• Build skills with real-world projects</li>
              <li>• Be part of a global sisterhood</li>
            </ul>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur flex items-center justify-center p-4" onClick={() => setDone(false)}>
            <motion.div initial={{ scale: 0.7, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.7 }} className="glass rounded-3xl p-8 max-w-md text-center shadow-glow" onClick={(e) => e.stopPropagation()}>
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-accent text-white flex items-center justify-center shadow-glow animate-float"><CheckCircle2 className="w-10 h-10" /></div>
              <h3 className="mt-5 text-2xl font-display font-bold">You're in! 💜</h3>
              <p className="mt-2 text-muted-foreground">Thank you for joining She Can Foundation. Our team will reach out within 48 hours.</p>
              <button onClick={() => setDone(false)} className="mt-6 px-6 py-2.5 rounded-full bg-gradient-accent text-white font-semibold">Continue</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const input = "w-full px-4 py-2.5 rounded-2xl bg-white/60 dark:bg-white/5 border focus:outline-none focus:ring-2 ring-primary transition";

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
