import React from "react";
import { Shield, Truck, Headphones } from "lucide-react";

export default function ChoseProductHub() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose ProductHub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional service and premium
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gradient-card shadow-card">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              {/* <Shield className="h-8 w-8 text-white" /> */}
              <Shield className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
            <p className="text-muted-foreground">
              Every product is thoroughly tested and comes with a comprehensive
              warranty to ensure your satisfaction.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gradient-card shadow-card">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fast Shipping</h3>
            <p className="text-muted-foreground">
              Free express shipping on all orders. Get your products delivered
              quickly and safely to your doorstep.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gradient-card shadow-card">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Headphones className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
            <p className="text-muted-foreground">
              Our dedicated support team is available around the clock to help
              with any questions or issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
