import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  const links = [
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaXTwitter />, url: "https://twitter.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
  ];

  return (
    <div className="flex gap-4 text-2xl">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className="hover:text-white/80 bg-amber-100/20 p-3 rounded-xl transition-colors"
          target="_blank"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
