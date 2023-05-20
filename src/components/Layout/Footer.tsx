import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

export default function Footer() {
  return (
    <footer className="bg-foregroundStrong text-white">
      <div className="px-20 py-10 border-b border-[#3f3f3f] grid grid-cols-5">
        <div className="col-span-3 flex items-center text-[18px]">
          <div>
            <img src="/assets/logo.png" alt="Factly Logo" />
            <div className="mt-[18px]">A Factly Product.</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm leading-6 justify-center">
          <span>Usecases</span>
          <span>Know your sources</span>
          <span>Other Data Initiatives</span>
          <span>Data Maps</span>
        </div>
        <div className="flex flex-col gap-3 text-sm leading-6 justify-center">
          <span>About Us</span>
          <span>FAQs</span>
          <span>Contact Us</span>
          <span>Terms and Conditions</span>
        </div>
        <div></div>
      </div>
      <div className="px-16 py-10 flex justify-between items-center">
        <div>© 2014-2023 Factly Media & Research. All rights reserved.</div>
        <div className="flex gap-6 text-2xl">
          <FaTwitter />
          <FaLinkedinIn />
          <FaFacebookF />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
}
