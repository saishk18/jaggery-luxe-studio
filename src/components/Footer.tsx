const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Pure Jaggery</h3>
            <p className="font-inter text-primary-foreground/80 leading-relaxed">
              Bringing you the finest, naturally crafted jaggery from traditional sources.
            </p>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4 text-accent">Products</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Classic Jaggery</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Jaggery Powder</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Organic Cubes</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4 text-accent">Company</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Process</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4 text-accent">Support</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Shipping</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center font-inter text-primary-foreground/80">
          <p>&copy; 2025 Pure Jaggery. All rights reserved. Crafted with tradition and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
