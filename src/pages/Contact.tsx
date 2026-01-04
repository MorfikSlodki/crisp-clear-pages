import Header from "@/components/Header";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4 tracking-wide">
          Kontakt
        </h1>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Masz pomysł na projekt? Chętnie poznam Twoje potrzeby i zaproponuję rozwiązanie dopasowane do Ciebie.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Imię i Nazwisko
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jan Kowalski" className="w-full bg-muted/30 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" required />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Email
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jan@example.com" className="w-full bg-muted/30 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" required />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Czego dotyczy zapytanie?
              </label>
              <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-muted/30 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer" required>
                <option value="">Wybierz temat</option>
                <option value="editorial">Sesja Edytorialna</option>
                <option value="commercial">Sesja Komercyjna</option>
                <option value="portrait">Portret</option>
                <option value="other">Inne</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Wiadomość
              </label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Opisz swój projekt lub zadaj pytanie..." rows={6} className="w-full bg-muted/30 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none" required />
            </div>

            <button type="submit" className="inline-flex items-center gap-2 bg-background border border-foreground text-foreground px-8 py-3 uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors duration-300">
              Wyślij Wiadomość
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Right - Info Section */}
          <div className="space-y-12">
            {/* How it works */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
                Jak wygląda współpraca?
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">1. Rozmowa</span> - Poznajemy się, omawiam Twoje potrzeby i cele projektu.
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">2. Oferta</span> - Przygotowuję indywidualną propozycję dopasowaną do Twojego budżetu.
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">3. Realizacja</span> - Działamy! Regularnie informuję o postępach prac.
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">4. Efekt</span> - Dostajesz gotowe materiały i pełne prawa do ich wykorzystania.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
                Dane Kontaktowe
              </h2>
              <div className="space-y-4">
                <a href="mailto:hello@celar.studio" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="text-foreground">dagmaraparszewska@hello.com</p>
                  </div>
                </a>

                <a href="tel:+48123456789" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Telefon</p>
                    <p className="text-foreground">+48 123 456 789</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Lokalizacja</p>
                    <p className="text-foreground">Warszawa, Polska</p>
                  </div>
                </div>

                <a href="https://instagram.com/celar.studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
                    <p className="text-foreground">@dagmarapars</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Contact;