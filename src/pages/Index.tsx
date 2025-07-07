import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mt-8">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="about">About Us</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        
        <TabsContent value="home" className="mt-0">
          <HeroSection />
        </TabsContent>
        
        <TabsContent value="about" className="mt-0">
          <AboutSection />
        </TabsContent>
        
        <TabsContent value="contact" className="mt-0">
          <ContactSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
