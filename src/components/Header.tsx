import { Search, ShoppingCart, User, LogIn, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import shionsLogo from "@/assets/shions-logo.png";

const Header = () => {
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();

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
          {/* <div className="flex-1 flex justify-center">
            <img src={shionsLogo} alt="SHIONS" className="h-12" />
          </div> */}
          
          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <LogIn className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-8 overflow-x-auto">
            <Link
              to="/"
              className="text-foreground hover:text-primary whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
            >
              Home
            </Link>
            <Link
              to="/bridal-wears"
              className="text-foreground hover:text-primary whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
            >
              Bridal Wears
            </Link>
            <Link
              to="/sarees"
              className="text-foreground hover:text-primary whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
            >
              Sarees
            </Link>
            <Link
              to="/kurta-sets"
              className="text-foreground hover:text-primary whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
            >
              Kurta Sets
            </Link>
            <Link
              to="/lehenga"
              className="text-foreground hover:text-primary whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
            >
              Lehenga
            </Link>
          </div>
          
          {/* Login/Signup Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-hero">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;