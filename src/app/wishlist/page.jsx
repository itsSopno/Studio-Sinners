"use client";

import { useApp } from "@/contexts/AppContext";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useApp();

  const handleAddToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#080808] text-white pt-32 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
            Your Wishlist is Empty
          </h1>
          <p className="text-gray-400 mb-10">
            Start adding items you love to your wishlist
          </p>
          <Link
            href="/items"
            className="inline-block text-sm tracking-[0.3em] border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all uppercase"
          >
            Browse Items
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 px-6 md:px-20 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
          Your Wishlist
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image || "/placeholder.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${item.price}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                      title="Add to Cart"
                    >
                      <FiShoppingCart className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/30 transition-colors"
                      title="Remove from Wishlist"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
