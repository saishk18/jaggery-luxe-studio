import { Heart, Leaf, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Rich in iron, minerals, and antioxidants. A natural energy booster that aids digestion.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No chemicals, no preservatives. Pure sugarcane extract processed traditionally.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully selected and tested. Only the finest jaggery makes it to your table.",
  },
  {
    icon: Users,
    title: "Fair Trade",
    description: "Supporting local farmers and sustainable farming practices for a better tomorrow.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Pure Jaggery?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a sweetener, it's a lifestyle choice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card hover:shadow-premium transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="font-inter text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
