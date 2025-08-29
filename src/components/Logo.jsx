import logo from "../assets/QuickFox-Interactive_Logo_2026.png";

export default function Logo({ className = "h-8 w-8" }) {
  return <img src={logo} alt="QuickFox logo" className={className} />;
}
