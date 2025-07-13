import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, SortAsc } from "lucide-react";
import { Link } from "react-router-dom";
import WishlistButton from "@/components/WishlistButton";
import AddToCartButton from "@/components/AddToCartButton";

const Sarees = () => {
  const sareeProducts = [
    {
      id: 1,
      title: "Silk Kanjeevaram Saree",
      price: 8999,
      originalPrice: 11999,
      rating: 4.9,
      reviews: 203,
      image: "/src/assets/product-1.jpg",
      category: "Sarees",
      description: "Traditional Kanjeevaram silk saree with intricate zari work and temple border"
    },
    {
      id: 2,
      title: "Cotton Handloom Saree",
      price: 2499,
      originalPrice: 3499,
      rating: 4.6,
      reviews: 156,
      image: "/src/assets/product-2.jpg",
      category: "Sarees",
      description: "Comfortable cotton handloom saree perfect for daily wear"
    },
    {
      id: 3,
      title: "Designer Georgette Saree",
      price: 5999,
      originalPrice: 7999,
      rating: 4.7,
      reviews: 89,
      image: "/src/assets/product-3.jpg",
      category: "Sarees",
      description: "Elegant georgette saree with modern design and embellishments"
    },
    {
      id: 4,
      title: "Banarasi Silk Saree",
      price: 12999,
      originalPrice: 15999,
      rating: 4.8,
      reviews: 167,
      image: "/src/assets/product-4.jpg",
      category: "Sarees",
      description: "Luxurious Banarasi silk saree with traditional motifs and gold work"
    },
    {
      id: 5,
      title: "Chiffon Party Wear Saree",
      price: 4499,
      originalPrice: 5999,
      rating: 4.5,
      reviews: 78,
      image: "/src/assets/product-1.jpg",
      category: "Sarees",
      description: "Stylish chiffon saree perfect for parties and special occasions"
    },
    {
      id: 6,
      title: "Tussar Silk Saree",
      price: 6999,
      originalPrice: 8999,
      rating: 4.7,
      reviews: 134,
      image: "/src/assets/product-2.jpg",
      category: "Sarees",
      description: "Natural tussar silk saree with ethnic prints and embroidery"
    },
    {
      id: 7,
      title: "Organza Wedding Saree",
      price: 9999,
      originalPrice: 12999,
      rating: 4.8,
      reviews: 95,
      image: "/src/assets/product-3.jpg",
      category: "Sarees",
      description: "Elegant organza saree with heavy work for wedding ceremonies"
    },
    {
      id: 8,
      title: "Linen Casual Saree",
      price: 1999,
      originalPrice: 2999,
      rating: 4.4,
      reviews: 67,
      image: "/src/assets/product-4.jpg",
      category: "Sarees",
      description: "Comfortable linen saree ideal for casual and office wear"
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
            <h1 className="text-3xl font-bold text-foreground">Sarees</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore our diverse collection of sarees. From traditional silk to modern designer pieces, 
            find the perfect saree for every occasion.
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
            Showing {sareeProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sareeProducts.map((product) => (
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

export default Sarees; 