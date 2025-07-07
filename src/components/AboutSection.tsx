export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are a team of clinicians/scientists based in the UK trying to create a more accessible and specialised psychological therapy for OCD leveraging the power of artificial intelligence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Unfortunately we are aware of the current difficulties accessing appropriate treatment for OCD, from long waiting times to lack of specialised treatment tailored to client's needs. Our goal is to solve these issues by training an AI agent to become specialised in OCD treatment while being able to adapt the therapy to each individual and being available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};