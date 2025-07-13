import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, SortAsc } from "lucide-react";
import { Link } from "react-router-dom";
import WishlistButton from "@/components/WishlistButton";
import AddToCartButton from "@/components/AddToCartButton";

const Lehenga = () => {
  const lehengaProducts = [
    {
      id: 1,
      title: "Red Bridal Lehenga Set",
      price: 15999,
      originalPrice: 19999,
      rating: 4.9,
      reviews: 267,
      image: "/src/assets/product-1.jpg",
      category: "Lehenga",
      description: "Stunning red bridal lehenga with heavy embroidery and stone work"
    },
    {
      id: 2,
      title: "Pink Party Lehenga",
      price: 8999,
      originalPrice: 11999,
      rating: 4.7,
      reviews: 145,
      image: "/src/assets/product-2.jpg",
      category: "Lehenga",
      description: "Elegant pink lehenga perfect for parties and celebrations"
    },
    {
      id: 3,
      title: "Golden Wedding Lehenga",
      price: 18999,
      originalPrice: 22999,
      rating: 4.8,
      reviews: 189,
      image: "/src/assets/product-3.jpg",
      category: "Lehenga",
      description: "Luxurious golden lehenga with intricate zari work and embellishments"
    },
    {
      id: 4,
      title: "Blue Designer Lehenga",
      price: 12999,
      originalPrice: 15999,
      rating: 4.6,
      reviews: 98,
      image: "/src/assets/product-4.jpg",
      category: "Lehenga",
      description: "Modern designer lehenga with contemporary patterns and work"
    },
    {
      id: 5,
      title: "Green Reception Lehenga",
      price: 10999,
      originalPrice: 13999,
      rating: 4.7,
      reviews: 134,
      image: "/src/assets/product-1.jpg",
      category: "Lehenga",
      description: "Beautiful green lehenga ideal for reception ceremonies"
    },
    {
      id: 6,
      title: "Purple Anarkali Lehenga",
      price: 7999,
      originalPrice: 9999,
      rating: 4.5,
      reviews: 89,
      image: "/src/assets/product-2.jpg",
      category: "Lehenga",
      description: "Stylish purple anarkali style lehenga with modern cuts"
    },
    {
      id: 7,
      title: "Cream Silk Lehenga",
      price: 14999,
      originalPrice: 17999,
      rating: 4.8,
      reviews: 156,
      image: "/src/assets/product-3.jpg",
      category: "Lehenga",
      description: "Sophisticated cream silk lehenga with pearl and mirror work"
    },
    {
      id: 8,
      title: "Maroon Traditional Lehenga",
      price: 11999,
      originalPrice: 14999,
      rating: 4.7,
      reviews: 112,
      image: "/src/assets/product-4.jpg",
      category: "Lehenga",
      description: "Traditional maroon lehenga with classic embroidery patterns"
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
            <h1 className="text-3xl font-bold text-foreground">Lehenga</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore our exclusive collection of lehengas. From bridal wear to party wear, 
            discover the perfect lehenga for your special moments.
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
            Showing {lehengaProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {lehengaProducts.map((product) => (
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

export default Lehenga; 