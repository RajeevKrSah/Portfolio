import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaMapPin, FaPhone, FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
interface QuickLink {
  name: string;
  href: string;
}
const QuickLink: QuickLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]
const ProjectLink: QuickLink[] = [
  { name: "Web Development", href: "/projects/web-development" },
  { name: "Mobile App Development", href: "/projects/mobile-app-development" },
]

const Footer = () => {
  return (
    <footer className="bg-black backdrop-blur-sm relative">
      <div className="container mx-auto py-10 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-7 h-7 bg-white rounded-[2px] flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-[1px]"></div>
              </div>
              <div className="text-[11px] font-light tracking-[0.1em] leading-tight">
                <div>Rajeev Kumar</div>
                <div>Portfolio</div>
              </div>
            </div>
            <p className="text-[13px] mb-8 font-light leading-relaxed">
              Building scalable, accessible, and high-performance applications for the modern web.
            </p>
            <div className="flex space-x-5">
              <FaInstagram className="w-6 h-6 hover:text-[#e6007a] transition-all duration-300 cursor-pointer" />
              <FaTwitter className="w-6 h-6 hover:text-[#e6007a] transition-all duration-300 cursor-pointer" />
              <FaLinkedin className="w-6 h-6 hover:text-[#e6007a] transition-all duration-300 cursor-pointer" />
              <FaFacebook className="w-6 h-6 hover:text-[#e6007a] transition-all duration-300 cursor-pointer" />
              <FaGithub className="w-6 h-6 hover:text-[#e6007a] transition-all duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light mb-6 text-sm tracking-[-0.01em]">Quick Links</h4>
            <ul className="space-y-3 text-xs font-light">
              {QuickLink.map((ql) => (
                <li key={ql.name}>
                  <Link
                    href={ql.href}
                    className="hover:text-[#e6007a] transition-colors duration-300 tracking-[0.05em]"
                  >
                    {ql.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Projects */}
          <div>
            <h4 className="font-light mb-6 text-sm tracking-[-0.01em]">Top Projects</h4>
            <ul className="space-y-3 text-xs font-light">
              {ProjectLink.map((pl) => (
                <li key={pl.name}>
                  <Link
                    href={pl.href}
                    className="hover:text-[#e6007a] transition-colors duration-300 tracking-[0.05em]"
                  >
                    {pl.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light mb-6 text-[14px] tracking-[-0.01em]">Stay Connected</h4>
            <div className="space-y-4 text-[12px]  mb-8 font-light">
              <div className="flex items-start space-x-2">
                <FaMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="tracking-[0.05em]">
                  <p>Delhi, India</p>
                  <p>Pincode: 110037</p>
                </div>
              </div>
              <a href="mailto:rajeev855107@gmail.com" className="flex items-center space-x-2">
                <FaMailBulk className="w-4 h-4" />
                <span className="tracking-[0.05em]">rajeev855107@gmail.com</span>
              </a>
              <div>
                <a href="tel:+919508690371" className="flex items-center space-x-2">
                  <FaPhone className="w-4 h-4" />
                  <span className="tracking-[0.05em]">+91 9508690371</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[11px] opacity-50 tracking-[0.05em] font-light">
            © 2024 <span className="text-[#e6007a]">Rajeev Kumar </span>. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[11px] opacity-50 font-light">
            <a href="#" className="hover:text-[#e6007a] transition-colors duration-300 tracking-[0.05em]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#e6007a] transition-colors duration-300 tracking-[0.05em]">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#e6007a] transition-colors duration-300 tracking-[0.05em]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
