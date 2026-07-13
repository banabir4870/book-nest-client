"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  images: string[];
};

const BookGallery = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-6">

      {/* Main Image */}

      <motion.div
        layout
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative h-150 overflow-hidden rounded-3xl border bg-white shadow-xl"
      >
        <Image
          src={selectedImage}
          alt="Book"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="absolute left-5 top-5 rounded-full bg-[#3b1a08] px-5 py-2 text-sm font-semibold text-white shadow-lg"
        >
          Bestseller
        </motion.div>
      </motion.div>

      {/* Thumbnails */}

      <div className="grid grid-cols-4 gap-4">

        {images.map((image, index) => (
          <motion.button
            key={index}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setSelectedImage(image)}
            className={`relative h-32 overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              selectedImage === image
                ? "border-[#3b1a08]"
                : "border-gray-200"
            }`}
          >
            <Image
              src={image}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </motion.button>
        ))}

      </div>
    </div>
  );
};

export default BookGallery;