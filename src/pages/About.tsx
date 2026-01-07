import Header from "@/components/Header";
const SUPABASE_URL = "https://kwwjdqbsxzbydejfmhnv.supabase.co";
const STORAGE_PATH = `${SUPABASE_URL}/storage/v1/object/public/zdjecia`;
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16 animate-fade-in-up">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left content */}
          <div className="flex-1">
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 tracking-wide">
              O mnie
            </h1>

            <div className="space-y-6 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                ​Jestem fotografką, która wzmacnia komunikację marek, tworząc estetyczne, spójne i 
funkcjonalne wizualnie materiały. Działam w fotografii produktowej, wizerunkowej i 
lifestyle'owej. Łączę w niej wrażliwość z doświadczeniem marketingowym, dzięki 
czemu zdjęcia stają się narzędziem wspierającym przekaz w social media, 
kampaniach, na stronach internetowych oraz w materiałach sprzedażowych.  
              </p>

              

              <p>
                ​W realizacjach szczególny nacisk kładę na estetykę, ton i spójność wizualną. Dzięki 
marketingowemu backgroundowi potrafię przełożyć cele biznesowe na język obrazu, 
który porządkuje przekaz i wspiera komunikację. Tworzę fotografie, które budują 
atmosferę i pozwalają odbiorcy skupić się na tym, co najważniejsze.

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
          </div>

          {/* Right photo */}
          <div className="md:w-80 lg:w-96 flex-shrink-0">
            <div className="sticky top-24">
              <img src={`${STORAGE_PATH}/zdjomnie.png`} alt="Zdjęcie autorki" className="w-full h-auto object-cover rounded-sm" loading="eager" />
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default About;