"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

// Define type for props
interface WiggleImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Wrap next/image with motion
const MotionImage = motion(Image);

const WiggleImage: React.FC<WiggleImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const wiggle = async () => {
      await controls.start({
        rotate: [0, -10, 10, -10, 10, 0], // Define wiggle rotation
        transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2 }, // Animation settings
      });
    };
    wiggle();
  }, [controls]);

  return (
    <MotionImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      animate={controls} // Apply animation to the motion Image
      style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
    />
  );
};

export default WiggleImage;
