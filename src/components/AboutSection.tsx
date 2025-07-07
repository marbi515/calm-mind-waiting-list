export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are a team of clinicians/scientists based in the UK trying to create a more accessible and specialised psychological therapy for OCD leveraging the power of artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};