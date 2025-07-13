import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, SortAsc } from "lucide-react";
import { Link } from "react-router-dom";
import WishlistButton from "@/components/WishlistButton";
import AddToCartButton from "@/components/AddToCartButton";

const KurtaSets = () => {
  const kurtaProducts = [
    {
      id: 1,
      title: "Embroidered Cotton Kurta Set",
      price: 2999,
      originalPrice: 3999,
      rating: 4.7,
      reviews: 189,
      image: "/src/assets/product-1.jpg",
      category: "Kurta Sets",
      description: "Comfortable cotton kurta set with beautiful embroidery work"
    },
    {
      id: 2,
      title: "Silk Anarkali Kurta Set",
      price: 5999,
      originalPrice: 7999,
      rating: 4.8,
      reviews: 145,
      image: "/src/assets/product-2.jpg",
      category: "Kurta Sets",
      description: "Elegant silk anarkali kurta set perfect for special occasions"
    },
    {
      id: 3,
      title: "Designer Palazzo Kurta Set",
      price: 4499,
      originalPrice: 5999,
      rating: 4.6,
      reviews: 98,
      image: "/src/assets/product-3.jpg",
      category: "Kurta Sets",
      description: "Modern designer kurta with palazzo pants and dupatta"
    },
    {
      id: 4,
      title: "Chikankari Kurta Set",
      price: 3499,
      originalPrice: 4499,
      rating: 4.9,
      reviews: 234,
      image: "/src/assets/product-4.jpg",
      category: "Kurta Sets",
      description: "Traditional chikankari work kurta set with intricate detailing"
    },
    {
      id: 5,
      title: "Georgette Kurta with Sharara",
      price: 5499,
      originalPrice: 6999,
      rating: 4.7,
      reviews: 112,
      image: "/src/assets/product-1.jpg",
      category: "Kurta Sets",
      description: "Stylish georgette kurta paired with sharara pants"
    },
    {
      id: 6,
      title: "Cotton Straight Kurta Set",
      price: 1999,
      originalPrice: 2999,
      rating: 4.5,
      reviews: 167,
      image: "/src/assets/product-2.jpg",
      category: "Kurta Sets",
      description: "Simple and elegant cotton kurta set for daily wear"
    },
    {
      id: 7,
      title: "Velvet Party Kurta Set",
      price: 7999,
      originalPrice: 9999,
      rating: 4.8,
      reviews: 89,
      image: "/src/assets/product-3.jpg",
      category: "Kurta Sets",
      description: "Luxurious velvet kurta set with heavy embellishments"
    },
    {
      id: 8,
      title: "Linen Casual Kurta Set",
      price: 2499,
      originalPrice: 3499,
      rating: 4.4,
      reviews: 78,
      image: "/src/assets/product-4.jpg",
      category: "Kurta Sets",
      description: "Comfortable linen kurta set perfect for casual occasions"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Kurta Sets</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Discover our stunning collection of kurta sets. From casual cotton to party wear, 
            find the perfect kurta set for every occasion.
          </p>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <SortAsc className="h-4 w-4" />
              Sort
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {kurtaProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kurtaProducts.map((product) => (
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

export default KurtaSets; 