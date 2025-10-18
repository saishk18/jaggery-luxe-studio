import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-primary">
              Pure Jaggery
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-inter text-foreground hover:text-accent transition-colors">
              Products
            </a>
            <a href="#" className="font-inter text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#" className="font-inter text-foreground hover:text-accent transition-colors">
              Benefits
            </a>
            <a href="#" className="font-inter text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:text-accent"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <Button 
              className="hidden md:inline-flex bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all"
            >
              Shop Now
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-foreground"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
