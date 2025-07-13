import ProductCard from "./ProductCard";
import product1 from "@/assets/download (3).jpg";
import product2 from "@/assets/download (4).jpg";
import product3 from "@/assets/download (5).jpg";
import product4 from "@/assets/lehenga designs.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: product4,
      title: "Warli Art Short kurti",
      rating: 4.64,
      reviewCount: 11,
      originalPrice: 898.50,
      salePrice: 599
    },
    {
      id: 2,
      image: product2,
      title: "Green Short Kurti",
      rating: 5.0,
      reviewCount: 8,
      originalPrice: 898.50,
      salePrice: 599
    },
    {
      id: 3,
      image: product3,
      title: "Pink-02 Short Kurti",
      rating: 5.0,
      reviewCount: 5,
      originalPrice: 898.50,
      salePrice: 599
    },
    {
      id: 4,
      image: product1,
      title: "Geometric Pattern Kurti",
      rating: 4.8,
      reviewCount: 12,
      originalPrice: 898.50,
      salePrice: 599
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-foreground mb-4">lehenga</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Girls Lehengas - Shop the latest collection of designer girls lehenga choli at Indya. Discover trendy and stylish options for your little fashionistas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            reviewCount={product.reviewCount}
            originalPrice={product.originalPrice}
            salePrice={product.salePrice}
          />
        ))}
      </div>
    </section>

    
  );
};

export default ProductGrid;