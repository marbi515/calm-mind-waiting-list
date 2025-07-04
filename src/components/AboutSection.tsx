import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Our Therapy Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionary AI technology meets evidence-based therapy to provide personalized OCD treatment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-border shadow-card">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Insights</h3>
              <p className="text-muted-foreground">
                Advanced machine learning algorithms analyze your patterns and provide personalized therapeutic interventions
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-card">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">OCD Specialized</h3>
              <p className="text-muted-foreground">
                Built specifically for OCD treatment using CBT and ERP methodologies proven effective by clinical research
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-card">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Access your therapy assistant anytime, anywhere. Get support during challenging moments when you need it most
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Our platform combines the latest advances in artificial intelligence with clinically proven therapeutic approaches. 
            Developed in partnership with mental health professionals and OCD specialists to ensure the highest standards of care.
          </p>
        </div>
      </div>
    </section>
  );
};