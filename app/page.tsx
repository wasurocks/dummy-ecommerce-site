import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ProductList />
      <LeadForm />
    </div>
  );
}
