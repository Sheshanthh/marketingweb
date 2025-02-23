import Rellax from 'rellax';

const Index = () => {
  useEffect(() => {
    const rellax = new Rellax('.rellax');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section id="home" className="rellax py-32 relative overflow-hidden" data-rellax-speed="-3">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Restaurant with AR Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the future of dining with ARoma's innovative augmented reality menu system
            </p>
          </div>
        </div>
      </section>

      {/* Other sections */}
    </div>
  );
};
