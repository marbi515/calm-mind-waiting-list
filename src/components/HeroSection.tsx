import { EmailSignup } from "./EmailSignup";
export const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-primary text-4xl">
              AI-powered therapist,
            </span>
            <span className="text-foreground text-4xl">
              {" "}specialised in OCD treatment
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Trained by clinicians using personalised evidence-based approaches.</p>
        </div>

        {/* Email Signup */}
        <div className="space-y-4">
          <EmailSignup />
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <span>🧠 Highly specialised</span>
            <span>🛡️ Secure</span>
            <span>📱 24/7 Available</span>
          </div>
        </div>
      </div>
    </section>;
};