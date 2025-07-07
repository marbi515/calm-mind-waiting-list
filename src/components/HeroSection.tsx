import { EmailSignup } from "./EmailSignup";
export const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Instant OCD support
            </span>
            , trained by clinicians.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Clinician-trained AI therapist using evidence-based approaches.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join the wait-list to test out our first Beta version.
          </p>
        </div>

        {/* Email Signup */}
        <div className="space-y-4">
          <EmailSignup />
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <span>🧠 Highly specialised</span>
            <span>🧠 AI-Powered</span>
            <span>📱 24/7 Available</span>
          </div>
        </div>
      </div>
    </section>;
};