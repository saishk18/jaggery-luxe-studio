import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, description, price, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-premium transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${name} - Premium jaggery product`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="font-inter text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <span className="font-playfair text-2xl font-bold text-accent">
          {price}
        </span>
        <Button 
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
