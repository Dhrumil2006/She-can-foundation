import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — She Can Foundation" },
      { name: "description", content: "Get in touch with She Can Foundation. We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});
type Data = z.infer<typeof schema>;

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Data>({ resolver: zodResolver(schema) });

  return (
    <>
      <section className="py-20 container mx-auto px-4 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-primary">Contact</span>
        <h1 className="mt-2 text-4xl md:text-6xl font-display font-bold">Let's <span className="text-gradient">talk</span>.</h1>
        <p className="mt-5 text-muted-foreground text-lg">Questions, partnerships, press, or simply hello — we read every message.</p>
      </section>

      <section className="container mx-auto px-4 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-3xl p-8 shadow-soft">
          <h2 className="text-2xl font-display font-bold">Send a message</h2>
          <form onSubmit={handleSubmit((d) => { console.log(d); toast.success("Message sent — thank you!"); reset(); })} className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name?.message}><input {...register("name")} className={cls} /></Field>
            <Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" className={cls} /></Field>
            <Field label="Subject" error={errors.subject?.message} className="sm:col-span-2"><input {...register("subject")} className={cls} /></Field>
            <Field label="Message" error={errors.message?.message} className="sm:col-span-2"><textarea {...register("message")} rows={5} className={cls} /></Field>
            <button className="sm:col-span-2 px-6 py-3.5 rounded-full bg-gradient-accent text-white font-semibold shadow-soft hover:shadow-glow transition">Send message</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <h3 className="font-display font-bold text-lg">Reach us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><Mail className="w-4 h-4 text-primary mt-1" /><div><div className="font-semibold">Email</div><a href="mailto:hello@shecanfoundation.org" className="text-muted-foreground hover:text-primary">hello@shecanfoundation.org</a></div></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-primary mt-1" /><div><div className="font-semibold">Phone</div><a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">+91 98765 43210</a></div></li>
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-primary mt-1" /><div><div className="font-semibold">Address</div><div className="text-muted-foreground">A-12, Lajpat Nagar IV<br />New Delhi, 110024<br />India</div></div></li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gradient-accent text-white flex items-center justify-center hover:scale-110 transition"><I className="w-4 h-4" /></a>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl overflow-hidden">
            <iframe title="map" src="https://www.google.com/maps?q=lajpat+nagar+delhi&output=embed" className="w-full h-64 border-0" loading="lazy" />
          </div>
        </div>
      </section>
      <div className="h-10" />
    </>
  );
}

const cls = "w-full px-4 py-2.5 rounded-2xl bg-white/60 dark:bg-white/5 border focus:outline-none focus:ring-2 ring-primary transition";
function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
