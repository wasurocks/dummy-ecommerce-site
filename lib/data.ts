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
    image: 'https://picsum.photos/seed/hoodie/400/400',
    category: 'Apparel',
  },
  {
    id: 'prod_2',
    name: 'Android Bot Figurine',
    price: 12.50,
    description: 'Classic green Android bot figurine. A must-have for any Android developer.',
    image: 'https://picsum.photos/seed/android/400/400',
    category: 'Collectibles',
  },
  {
    id: 'prod_3',
    name: 'YouTube Creator Mug',
    price: 15.00,
    description: 'Start your day with a sip of creativity. Ceramic mug with YouTube logo.',
    image: 'https://picsum.photos/seed/mug/400/400',
    category: 'Accessories',
  },
  {
    id: 'prod_4',
    name: 'Pixel 9 Pro (Dummy)',
    price: 999.00,
    description: 'A non-functional replica of the Pixel 9 Pro for display purposes.',
    image: 'https://picsum.photos/seed/pixel/400/400',
    category: 'Tech',
  },
  {
    id: 'prod_5',
    name: 'Gopher Plushie',
    price: 25.00,
    description: 'Soft and cuddly Go Gopher plushie. The perfect debugging companion.',
    image: 'https://picsum.photos/seed/gopher/400/400',
    category: 'Toys',
  },
  {
    id: 'prod_6',
    name: 'Chrome Dino Tee',
    price: 28.00,
    description: 'No internet? No problem. Celebrate the offline dino game with this tee.',
    image: 'https://picsum.photos/seed/dino/400/400',
    category: 'Apparel',
  },
];
