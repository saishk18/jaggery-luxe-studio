import ProductCard from "./ProductCard";
import productClassic from "@/assets/product-classic.jpg";
import productPowder from "@/assets/product-powder.jpg";
import productOrganic from "@/assets/product-organic.jpg";

export interface Product {
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  images: string[];
}

const products = [
  {
    name: "Classic Jaggery",
    description: "Traditional block jaggery made from pure sugarcane. Rich in minerals and perfect for daily use.",
    fullDescription: "Our Classic Jaggery is crafted using traditional methods passed down through generations. Made from 100% pure sugarcane juice, it retains all the natural minerals including iron, magnesium, and potassium. Perfect for sweetening tea, coffee, or traditional Indian desserts. Each block weighs 500g and comes vacuum-sealed for freshness.",
    price: 12.99,
    images: [productClassic, productClassic, productClassic],
  },
  {
    name: "Jaggery Powder",
    description: "Finely ground jaggery powder for easy mixing. Ideal for beverages and baking.",
    fullDescription: "Our premium Jaggery Powder is finely ground for instant dissolution. Perfect for baking, cooking, and adding to beverages. It dissolves quickly in both hot and cold liquids, making it ideal for health drinks and smoothies. Rich in antioxidants and completely unrefined. Available in 400g resealable pouches.",
    price: 14.99,
    images: [productPowder, productPowder, productPowder],
  },
  {
    name: "Organic Jaggery Cubes",
    description: "Premium organic jaggery in convenient cube form. Certified organic and pesticide-free.",
    fullDescription: "USDA Organic certified jaggery cubes made from organically grown sugarcane. Each cube is perfectly portioned for single servings in tea or coffee. Completely pesticide-free and processed without any chemicals. Convenient cube format makes portion control easy. Each pack contains 300g of premium organic jaggery cubes.",
    price: 16.99,
    images: [productOrganic, productOrganic, productOrganic],
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
