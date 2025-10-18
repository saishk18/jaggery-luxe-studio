import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import type { Product } from "./Products";

interface ProductCardProps extends Product {}

const ProductCard = ({ name, description, fullDescription, price, images }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart({ name, price, image: images[0] }, quantity);
    setQuantity(1);
  };

  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-premium transition-all duration-300">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={image}
                  alt={`${name} - View ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      <CardContent className="p-6">
        <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
          {fullDescription}
        </p>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="font-playfair text-3xl font-bold text-accent">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className="h-9 w-9"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            className="h-9 w-16 text-center"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleQuantityChange(quantity + 1)}
            className="h-9 w-9"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-inter font-medium"
          size="lg"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
