"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Clock, ShoppingCart, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardHome() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <h1 className="text-3xl font-bold">Welcome back, Rasel 👋</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here’s what’s happening with your products today
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-2xl shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Products</CardTitle>
            <Package className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-sm text-muted-foreground">+8 this week</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Ads</CardTitle>
            <Clock className="h-6 w-6 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-muted-foreground">3 awaiting approval</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Orders</CardTitle>
            <ShoppingCart className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">72</p>
            <p className="text-sm text-muted-foreground">+14 today</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Revenue</CardTitle>
            <DollarSign className="h-6 w-6 text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$5,240</p>
            <p className="text-sm text-muted-foreground">+10% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                ✅ Product <b>“Smart Watch”</b> approved and live
              </li>
              <li>
                🛒 New order placed for <b>“Wireless Earbuds”</b>
              </li>
              <li>
                ⚠️ Ad <b>“Old Laptop”</b> is pending approval
              </li>
              <li>
                💰 You earned <b>$120</b> from a sale
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
