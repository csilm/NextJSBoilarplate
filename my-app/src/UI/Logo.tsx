// Import necessary modules and components
import LightLogo from '../../public/LightBG Logo.png';
import LightMobileLogo from '../../public/LightBG Mobile Logo.png';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className="flex-shrink-0">
            <Link href="/">
              <Image className='hidden sm:block' src={LightLogo} alt="Logo" width={150} height={100} />
              <Image className='block sm:hidden' src={LightMobileLogo} alt="Logo" width={50} height={50} />
            </Link>
          </div>
    );
}


export default Logo;