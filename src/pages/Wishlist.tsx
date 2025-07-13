import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import WishlistButton from "@/components/WishlistButton";
import AddToCartButton from "@/components/AddToCartButton";
import { useToast } from "@/hooks/use-toast";

const Wishlist = () => {
  const { state, clearWishlist } = useWishlist();
  const { toast } = useToast();

  const handleClearWishlist = () => {
    clearWishlist();
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist",
    });
  };

  const handleAddAllToCart = () => {
    toast({
      title: "Added to cart",
      description: "All wishlist items have been added to your cart",
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-6">
              Start adding items to your wishlist to see them here
            </p>
            <Link to="/">
              <Button className="btn-hero">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={handleAddAllToCart}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Add All to Cart
              </Button>
              <Button 
                variant="outline" 
                onClick={handleClearWishlist}
                className="flex items-center gap-2 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground">
            You have {state.items.length} item{state.items.length !== 1 ? 's' : ''} in your wishlist
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {state.items.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-sale text-sale-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <div className="absolute top-2 left-2">
                  <WishlistButton product={product} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="price-current">₹{product.price.toLocaleString()}</span>
                  <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                
                <AddToCartButton product={product} className="w-full btn-hero">
                  Add to Cart
                </AddToCartButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist; 