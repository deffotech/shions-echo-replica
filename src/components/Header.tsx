import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import shionsLogo from "@/assets/shions-logo.png";

const Header = () => {
  const navItems = [
    "Home", "Dress", "Suit Sets", "Short Kurtis", "Cotton Tops", "Co-ord Sets", "Sleeveless Kurtis", "Plus Size Kurtis"
  ];

  return (
    <header className="w-full">
      {/* Free Shipping Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        Free Shipping on All Orders
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <img src={shionsLogo} alt="SHIONS" className="h-12" />
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="mt-4 flex justify-center">
          <div className="flex items-center gap-8 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;