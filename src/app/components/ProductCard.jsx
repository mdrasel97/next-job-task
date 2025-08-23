import React from "react";
import { Star, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            {product.category}
          </Badge>
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-4 right-4">
              Out of Stock
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            ({product.rating})
          </span>
        </div>

        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="text-muted-foreground mb-4">
          {product.description.split(" ").slice(0, 10).join(" ")}
          {product.description.split(" ").length > 10 ? "..." : ""}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <Badge variant="secondary" className="text-xs">
            Free Shipping
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/products/${product._id}`}>View Details</Link>
        </Button>

        <Button className="flex-1" disabled={!product.inStock}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
