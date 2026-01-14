"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "../../../contexts/AppContext";

export default function ItemDetails() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useApp();

  // Mock items data (same as items page)
  const mockItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and premium sound quality. These headphones feature advanced Bluetooth 5.0 technology, 30-hour battery life, and superior comfort for extended listening sessions.",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      category: "Electronics",
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "Bluetooth 5.0",
        "Premium leather ear cups",
        "Quick charge (15 min = 3 hours)",
        "Voice assistant compatible"
      ],
      specifications: {
        "Driver Size": "40mm",
        "Frequency Response": "20Hz - 20kHz",
        "Impedance": "32 ohms",
        "Weight": "250g",
        "Connectivity": "Bluetooth 5.0, 3.5mm jack",
        "Warranty": "2 years"
      }
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      description: "Comfortable ergonomic chair designed for long working hours with lumbar support. Features adjustable height, armrests, and tilt mechanism for optimal comfort and productivity.",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      category: "Furniture",
      features: [
        "Lumbar support system",
        "Adjustable height",
        "360-degree swivel",
        "Breathable mesh back",
        "Padded armrests",
        "Tilt mechanism"
      ],
      specifications: {
        "Material": "Mesh and fabric",
        "Weight Capacity": "300 lbs",
        "Seat Height": "17-21 inches",
        "Dimensions": "26 x 26 x 40-44 inches",
        "Base": "5-star nylon base",
        "Warranty": "5 years"
      }
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      description: "Advanced smartwatch with health monitoring, GPS, and long battery life. Track your fitness, monitor your health, and stay connected with this feature-packed wearable device.",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      category: "Electronics",
      features: [
        "Heart rate monitoring",
        "GPS tracking",
        "Sleep analysis",
        "Water resistant (50m)",
        "7-day battery life",
        "Voice assistant"
      ],
      specifications: {
        "Display": "1.4 inch AMOLED",
        "Battery": "7 days typical use",
        "Water Rating": "5ATM",
        "Connectivity": "Bluetooth, WiFi, GPS",
        "Sensors": "Heart rate, accelerometer, gyroscope",
        "Compatibility": "iOS and Android"
      }
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      description: "High-performance camera lens for professional photography with superior optics. Perfect for portrait, landscape, and professional photography with exceptional image quality.",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop",
      category: "Photography",
      features: [
        "Ultra-sharp optics",
        "Fast f/1.4 aperture",
        "Weather sealed",
        "Silent autofocus",
        "Image stabilization",
        "Professional build quality"
      ],
      specifications: {
        "Focal Length": "85mm",
        "Aperture": "f/1.4 - f/16",
        "Mount": "Canon EF/Nikon F",
        "Weight": "950g",
        "Filter Size": "77mm",
        "Warranty": "3 years"
      }
    },
    {
      id: 5,
      name: "Minimalist Desk Lamp",
      description: "Modern LED desk lamp with adjustable brightness and sleek design. Perfect for work, study, or ambient lighting with energy-efficient LED technology.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      category: "Lighting",
      features: [
        "Adjustable brightness",
        "Touch controls",
        "USB charging port",
        "Flexible arm",
        "Energy efficient LED",
        "Modern design"
      ],
      specifications: {
        "Light Source": "LED",
        "Power": "12W",
        "Color Temperature": "3000K-6500K",
        "Brightness": "Up to 1000 lumens",
        "USB Port": "5V/1A",
        "Warranty": "2 years"
      }
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with rich sound and waterproof design. Perfect for outdoor adventures, parties, or home listening with powerful bass and clear highs.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop",
      category: "Electronics",
      features: [
        "360-degree sound",
        "Waterproof IPX7",
        "12-hour battery",
        "Wireless stereo pairing",
        "Built-in microphone",
        "Compact design"
      ],
      specifications: {
        "Output Power": "20W",
        "Battery Life": "12 hours",
        "Bluetooth": "5.0",
        "Water Rating": "IPX7",
        "Dimensions": "7 x 3 x 3 inches",
        "Weight": "1.2 lbs"
      }
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      description: "Premium mechanical keyboard with RGB lighting and tactile switches.",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
      category: "Electronics",
      features: [
        "Mechanical switches",
        "RGB backlighting",
        "Programmable keys",
        "USB-C connection",
        "Aluminum frame",
        "Gaming optimized"
      ],
      specifications: {
        "Switch Type": "Cherry MX Blue",
        "Backlighting": "RGB",
        "Connection": "USB-C",
        "Layout": "Full size",
        "Material": "Aluminum",
        "Warranty": "2 years"
      }
    },
    {
      id: 8,
      name: "Coffee Maker Deluxe",
      description: "Professional-grade coffee maker with programmable settings and thermal carafe.",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      category: "Kitchen",
      features: [
        "Programmable brewing",
        "Thermal carafe",
        "Built-in grinder",
        "Auto shut-off",
        "Water filtration",
        "Easy cleaning"
      ],
      specifications: {
        "Capacity": "12 cups",
        "Carafe": "Thermal stainless steel",
        "Grinder": "Built-in burr grinder",
        "Timer": "24-hour programmable",
        "Filter": "Permanent gold-tone",
        "Warranty": "3 years"
      }
    }
  ];

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const foundItem = mockItems.find(item => item.id === parseInt(params.id));
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Item not found");
        }
      } catch (err) {
        setError("Failed to fetch item details");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchItem();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  const isInWishlist = wishlist.some(wishItem => wishItem.id === item?.id);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading item details...</p>
        </motion.div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-white text-lg mb-4">{error || "Item not found"}</p>
          <Link
            href="/items"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Back to Items
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div {...fadeInUp} className="mb-8">
          <Link
            href="/items"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Items
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-lg font-semibold">
                {item.category}
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div {...fadeInUp} className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {item.name}
              </h1>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                ${item.price}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Specifications</h3>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="space-y-3">
                  {Object.entries(item.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-gray-400 font-medium">{key}</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>🛒</span>
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={handleAddToWishlist}
                className={`flex-1 border py-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isInWishlist 
                    ? 'border-red-500 text-red-400 bg-red-500/10' 
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                }`}
              >
                <span>{isInWishlist ? '❤️' : '🤍'}</span>
                <span>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}