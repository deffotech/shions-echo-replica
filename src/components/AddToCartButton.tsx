import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
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

interface AddToCartButtonProps {
  product: Product;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const AddToCartButton = ({ 
  product, 
  variant = "default", 
  size = "default", 
  className = "",
  children = "Add to Cart"
}: AddToCartButtonProps) => {
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();
  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart`,
    });
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleAddToCart}
      className={`transition-all duration-200 ${
        inCart 
          ? "bg-primary/80 hover:bg-primary/90" 
          : ""
      } ${className}`}
      disabled={inCart}
    >
      {inCart ? (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          In Cart
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          {children}
        </>
      )}
    </Button>
  );
};

export default AddToCartButton; 