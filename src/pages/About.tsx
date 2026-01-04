import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 tracking-wide">
          About
        </h1>
        
        <div className="space-y-6 text-muted-foreground font-body text-base leading-relaxed">
          <p>
            Celar is a creative studio specializing in fashion and editorial photography. 
            With a refined aesthetic and meticulous attention to detail, we craft visual 
            narratives that resonate with elegance and authenticity.
          </p>
          
          <p>
            Our work spans across editorial, commercial, and artistic projects, 
            collaborating with leading brands and publications worldwide. Each project 
            is approached with a commitment to excellence and a deep understanding of 
            visual storytelling.
          </p>
          
          <p>
            Based in New York, we work globally with clients who share our passion 
            for creating timeless, impactful imagery.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="font-display text-2xl font-medium text-foreground mb-6">
            Selected Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground font-body">
            <span>Vogue</span>
            <span>Harper's Bazaar</span>
            <span>Elle</span>
            <span>Dior</span>
            <span>Chanel</span>
            <span>Gucci</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
