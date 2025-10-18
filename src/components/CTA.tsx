import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Experience Pure Sweetness?
          </h2>
          
          <p className="font-inter text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers who've made the switch to natural, healthy sweetness. Order now and taste the difference.
          </p>
          
          <Button 
            size="lg"
            className="bg-card text-primary hover:bg-card/90 font-inter font-semibold shadow-glow hover:shadow-xl transition-all group"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
