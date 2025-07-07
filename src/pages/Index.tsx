import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mt-8">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        
        <TabsContent value="home" className="mt-0">
          <HeroSection />
        </TabsContent>
        
        <TabsContent value="contact" className="mt-0">
          <ContactSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
