import Header from "@/components/Header";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 tracking-wide">O mnie</h1>
        
        <div className="space-y-6 text-muted-foreground font-body text-base leading-relaxed">
          <p>
            Jestem fotografką, która wzmacnia komunikację marek, tworząc estetyczne, spójne i funkcjonalne wizualnie materiały. Łączę wrażliwość z doświadczeniem marketingowym, dzięki czemu zdjęcia stają się narzędziem wspierającym przekaz.
          </p>
          
          <p>
            Poruszam się między fotografią produktową, wizerunkową i lifestyle’ową. Interesuje mnie to, jak obraz działa w komunikacji — w social media, kampaniach, na stronach internetowych oraz w materiałach sprzedażowych. Każde ujęcie projektuję z myślą o konkretnym formacie, kanale i kontekście marki.

          </p>
          
          <p>
            W realizacjach szczególny nacisk kładę na estetykę, ton i spójność wizualną. Dzięki marketingowemu backgroundowi potrafię przełożyć cele biznesowe na język obrazu, który porządkuje przekaz i wspiera komunikację. Tworzę fotografie, które budują atmosferę i pozwalają odbiorcy skupić się na tym, co najważniejsze.

          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="font-display text-2xl font-medium text-foreground mb-6">
            Wybrane realizacje:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground font-body">
            <span>Claresa</span>
            <span>Zalando</span>
            <span>LE.SONGE</span>
            <span>Yolyn</span>
            <span>Pracownia Wybór</span>
            <span>Projekty influencerskie i prywatne</span>
          </div>
        </div>
      </main>
    </div>;
};
export default About;