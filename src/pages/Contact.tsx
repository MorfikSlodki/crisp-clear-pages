import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 tracking-wide">
          Contact
        </h1>
        
        <div className="space-y-8 font-body">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              General Inquiries
            </h2>
            <a 
              href="mailto:hello@celar.studio" 
              className="text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              hello@celar.studio
            </a>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              New Business
            </h2>
            <a 
              href="mailto:projects@celar.studio" 
              className="text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              projects@celar.studio
            </a>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Follow
            </h2>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Instagram
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Location
            </h2>
            <p className="text-foreground">
              New York, NY
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
