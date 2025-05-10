
import Navbar from '../UI/Navbar';  

const menu = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];
export default function HomePage() {
  return (
    <>
      <Navbar menuItems={menu} isSticky={true} />
      <main className="mt-20 px-4">
        <h1 className="text-3xl font-bold text-brand-blue bg-brand-pink">Welcome to the site</h1>
      </main>
    </>
  );
}
