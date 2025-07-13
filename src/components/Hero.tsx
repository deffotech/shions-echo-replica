import { Button } from "@/components/ui/button";
import heroModel1 from "@/assets/dress2.jpg";
import { Package, Truck, Gem } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl lg:text-7xl font-light text-foreground leading-tight">
            ELEGANCE IN<br />
            <span className="text-primary font-normal">EVERY THREAD</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Step into the world of luxury with our Jaipur-inspired kurtis. 
            Comfortable, chic, and uniquely designed.
          </p>
          
          <Button className="btn-hero text-lg">
            SHOP NOW
          </Button>
          
          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-#5F634F flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">100% Cotton</h3>
                <p className="text-sm text-muted-foreground">Premium Quality</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Nationwide</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Gem className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Exclusive Designs</h3>
                <p className="text-sm text-muted-foreground">Limited Edition</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            {/* Main large image */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl">
              <img 
                src={heroModel1} 
                alt="Woman in teal kurti" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Placeholder for additional images */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;