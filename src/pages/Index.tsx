import Header from "@/components/Header";
import PortfolioGrid from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4">
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;
