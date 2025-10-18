import ProductCard from "./ProductCard";
import productClassic from "@/assets/product-classic.jpg";
import productPowder from "@/assets/product-powder.jpg";
import productOrganic from "@/assets/product-organic.jpg";

const products = [
  {
    name: "Classic Jaggery",
    description: "Traditional block jaggery made from pure sugarcane. Rich in minerals and perfect for daily use.",
    price: "$12.99",
    image: productClassic,
  },
  {
    name: "Jaggery Powder",
    description: "Finely ground jaggery powder for easy mixing. Ideal for beverages and baking.",
    price: "$14.99",
    image: productPowder,
  },
  {
    name: "Organic Jaggery Cubes",
    description: "Premium organic jaggery in convenient cube form. Certified organic and pesticide-free.",
    price: "$16.99",
    image: productOrganic,
  },
];

const Products = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Collection
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked products crafted with care and tradition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
