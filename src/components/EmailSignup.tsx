import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to add you to the wait-list.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xqabvepb", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        toast({
          title: "Thank you for signing up!",
          description: "We’ll email you as soon as our beta is ready."
        });
        setEmail("");
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-4"
    >
      <input type="hidden" name="source" value="waitlist-form" />

      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 h-12 text-base border-2 border-border focus:border-primary transition-colors"
          disabled={isSubmitting}
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-8 bg-gradient-primary hover:opacity-90 transition-opacity font-medium"
        >
          {isSubmitting ? "Joining…" : "Get early access"}
        </Button>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        We’ll email you once the beta is ready.
      </p>
    </form>
  );
};