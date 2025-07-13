import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  salePrice: number;
}

const ProductCard = ({ image, title, rating, reviewCount, originalPrice, salePrice }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "star-filled fill-current" : "star-empty"
        }`}
      />
    ));
  };

  const discountPercentage = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  return (
    <div className="product-card group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-sale text-sale-foreground px-2 py-1 rounded-full text-xs font-bold">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Quick Add Button - appears on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="btn-hero transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick Add
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="star-rating">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating.toFixed(1)} ({reviewCount})
          </span>
        </div>
        
        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="price-current">₹{salePrice}</span>
          {originalPrice > salePrice && (
            <span className="price-original">₹{originalPrice}</span>
          )}
        </div>
        
        {/* Additional Info */}
        <p className="text-sm text-muted-foreground">
          Unit price / per
        </p>
      </div>
    </div>
  );
};

export default ProductCard;