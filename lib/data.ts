export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 'prod_1',
    name: 'Google Cloud Hoodie',
    price: 45.00,
    description: 'Comfortable unisex hoodie with the Google Cloud logo. Perfect for coding sessions.',
    image: 'A high-quality studio photo of a premium navy blue hoodie with a small, clean Google Cloud logo on the chest, isolated on a white background.',
    category: 'Apparel',
  },
  {
    id: 'prod_2',
    name: 'Android Bot Figurine',
    price: 12.50,
    description: 'Classic green Android bot figurine. A must-have for any Android developer.',
    image: 'A cute, shiny green Android robot figurine standing on a wooden desk, soft studio lighting, high detail.',
    category: 'Collectibles',
  },
  {
    id: 'prod_3',
    name: 'YouTube Creator Mug',
    price: 15.00,
    description: 'Start your day with a sip of creativity. Ceramic mug with YouTube logo.',
    image: 'A minimalist white ceramic coffee mug with a red YouTube play button logo, sitting on a clean marble surface.',
    category: 'Accessories',
  },
  {
    id: 'prod_4',
    name: 'Pixel 9 Pro (Dummy)',
    price: 999.00,
    description: 'A non-functional replica of the Pixel 9 Pro for display purposes.',
    image: 'A sleek, modern smartphone that looks like a Google Pixel 9 Pro in Obsidian black, showing the back camera bar, professional product photography.',
    category: 'Tech',
  },
  {
    id: 'prod_5',
    name: 'Gopher Plushie',
    price: 25.00,
    description: 'Soft and cuddly Go Gopher plushie. The perfect debugging companion.',
    image: 'A soft, blue plush toy of the Go programming language Gopher mascot, cute and fluffy, white background.',
    category: 'Toys',
  },
  {
    id: 'prod_6',
    name: 'Chrome Dino Tee',
    price: 28.00,
    description: 'No internet? No problem. Celebrate the offline dino game with this tee.',
    image: 'A stylish grey t-shirt with a pixelated T-Rex dinosaur icon from the Chrome offline game, flat lay photography.',
    category: 'Apparel',
  },
];
