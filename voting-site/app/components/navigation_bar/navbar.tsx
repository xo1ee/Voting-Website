import Image from "next/image";
import Link from "next/link";
import vsa_logo from "../../assets/vsa-logo.webp";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link style={{ padding: 5 }} href="/">
              <Image className="logo" src={vsa_logo} alt="VSA Logo"></Image>
            </Link>
          </li>
          <li>
            <a style={{ padding: 15 }} href="#">
              Vote Now
            </a>
          </li>
          <li>
            <a style={{ padding: 15 }} href="#">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
