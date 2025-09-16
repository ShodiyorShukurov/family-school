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
            <a className='w-[47px] h-[47px] bg-white flex justify-center items-center rounded-full' href="https://t.me/otaonalarakademiyasi#">
							<img src="/telegram.svg" alt="Telegram" />
						</a>
            <a className='w-[47px] h-[47px] bg-white flex justify-center items-center rounded-full' href="https://www.instagram.com/otaonalarakademiyasi?igsh=MXR5enM4eHozcHZuMg==">
							<img src="/instagram.svg" alt="Instagram" />
						</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
