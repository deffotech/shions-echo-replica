import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
}

interface WishlistButtonProps {
  product: Product;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const WishlistButton = ({ 
  product, 
  variant = "ghost", 
  size = "icon", 
  className = "" 
}: WishlistButtonProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.title} has been removed from your wishlist`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.title} has been added to your wishlist`,
      });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleWishlistToggle}
      className={`transition-all duration-200 ${
        isWishlisted 
          ? "text-red-500 hover:text-red-600" 
          : "text-muted-foreground hover:text-primary"
      } ${className}`}
    >
      <Heart 
        className={`h-4 w-4 transition-all duration-200 ${
          isWishlisted ? "fill-current" : "fill-none"
        }`} 
      />
    </Button>
  );
};

export default WishlistButton; 