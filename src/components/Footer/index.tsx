// import { FaTelegramPlane, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#545151] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/footer-icon.svg" alt="footer icon" width={200}  />
          </div>
          <div className="flex gap-4 mt-4">
            <a className='w-[47px] h-[47px] bg-white flex justify-center items-center rounded-full' href="#">
							<img src="/telegram.svg" alt="Telegram" />
						</a>
            <a className='w-[47px] h-[47px] bg-white flex justify-center items-center rounded-full' href="#">
							<img src="/instagram.svg" alt="Instagram" />
						</a>
            <a className='w-[47px] h-[47px] bg-white flex justify-center items-center rounded-full' href="#">
							<img src="/twitter.svg" alt="Twitter" />
						</a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-2 manrope-regular">
          <a href="#" className="hover:underline">Lorem ipsum</a>
          <a href="#" className="hover:underline">Lorem ipsum</a>
          <a href="#" className="hover:underline">Lorem ipsum</a>
          <a href="#" className="hover:underline">Lorem ipsum</a>
          <a href="#" className="hover:underline">Lorem ipsum</a>
        </div>

        {/* Right Section */}
        <div>
          <p className="font-semibold mb-2">Contact:</p>
          <p className="text-sm mb-1">example@gmail.com</p>
          <p className="text-sm mb-1">+998 123 45 67</p>
          <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
