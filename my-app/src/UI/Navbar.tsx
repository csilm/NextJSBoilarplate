// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LightLogo from '../../public/LightBG Logo.png';
import LightMobileLogo from '../../public/LightBG Mobile Logo.png';

interface MenuItem {
  name: string;
  href: string;
}

interface NavbarProps {
  menuItems: MenuItem[];
  isSticky?: boolean;
}

export default function Navbar({ menuItems, isSticky = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={`w-full top-0 z-50 bg-white shadow-md ${isSticky ? 'sticky' : ''},`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image className='hidden sm:block' src={LightLogo} alt="Logo" width={150} height={100} />
              <Image className='block sm:hidden' src={LightMobileLogo} alt="Logo" width={50} height={50} />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map(item => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`font-medium text-primary hover:text-primary-light active:text-primary-dark transition duration-300`}

              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          {menuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 text-gray-700 hover:text-blue-600 ${pathname === item.href ? 'text-blue-600' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
