'use client';

import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function AIImage({ prompt, alt, className, fill, width, height }: AIImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function generateImage() {
      if (!prompt) return;
      
      try {
        setLoading(true);
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error('API Key missing');
        }

        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
        });

        if (!isMounted) return;

        let foundImage = false;
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }

        if (!foundImage) {
          throw new Error('No image in response');
        }
      } catch (err) {
        console.error('Image generation error:', err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    generateImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (error) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center p-4 ${className}`}>
        Failed to load image
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        ) : (
          imageUrl && (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={imageUrl}
                alt={alt}
                fill={fill}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
