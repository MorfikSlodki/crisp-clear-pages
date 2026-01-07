import Header from "@/components/Header";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4">
        <PortfolioGrid />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
