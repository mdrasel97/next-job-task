"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        About <span className="text-blue-600">ProductHub</span>
      </motion.h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
      >
        ProductHub is your one-stop platform to explore, manage, and share
        products with ease. We aim to connect vendors and customers with a
        smooth and modern marketplace experience.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300">
              To empower vendors by giving them a platform to showcase their
              products and help customers discover quality items effortlessly.
            </CardContent>
          </Card>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300">
              To become a leading marketplace where innovation meets trust,
              ensuring a seamless product journey for everyone.
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
