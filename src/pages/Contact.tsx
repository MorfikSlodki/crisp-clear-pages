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
      <main className="max-w-6xl mx-auto py-8 animate-fade-in-up px-[2px] pt-0">
        
        <p className="text-muted-foreground mb-12 max-w-xl">
      </p>

        <div className="flex justify-center">
          {/* Info Section */}
          <div className="space-y-12 max-w-xl">
            {/* How it works */}
            <div>
              
              <div className="space-y-4">
                
                
                
                
              </div>
            </div>

            {/* Contact Details */}
            <div>
              
              <div className="space-y-4">
                <a href="mailto:hello@celar.studio" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="text-foreground">​hello@dagmaraparszewska.pl
                  </p>
                  </div>
                </a>

                <a href="tel:+48123456789" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Telefon</p>
                    <p className="text-foreground">+48 724 189 181 </p>
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

                <a href="https://www.instagram.com/dagmara_parszewska" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
                    <p className="text-foreground">@dagmaraparszewska</p>
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