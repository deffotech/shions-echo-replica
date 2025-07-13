import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Home, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          {/* Success Message */}
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
          </p>
          
          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
              <CardDescription>
                Here are the details of your order
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Order Number</span>
                <span className="font-mono font-bold text-primary">#{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Order Date</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Estimated Delivery</span>
                <span>3-5 business days</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll review and process your order within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order will be shipped within 1-2 business days
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      You'll receive tracking information via email
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto btn-hero">
                <Home className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <Link to="/orders">
              <Button variant="outline" className="w-full sm:w-auto">
                <Package className="h-4 w-4 mr-2" />
                View Orders
              </Button>
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you have any questions about your order, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <span>📧 support@shions.com</span>
              <span>📞 +91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 