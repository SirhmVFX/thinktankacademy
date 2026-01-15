import Link from "next/link";
import PartnerNav from "./navigations/partnerNav";
import PoliciesNav from "./navigations/policesNav";
import ResourcesNav from "./navigations/resourcesNav";
import SchoolsDropdown from "./navigations/schoolNav";
import WhyThinkTank from "./navigations/whyThinkTank";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full flex items-center justify-between bg-blue-900 px-8 py-4 text-white">
      
      <div className="text-xl font-bold">
        ThinkTank
      </div>

      <ul className="hidden md:flex items-center gap-8 text-sm">
        <li className="cursor-pointer hover:text-gray-300"><Link href="/">Home</Link></li>
        <li><SchoolsDropdown /></li>
        <li><WhyThinkTank /></li>
        <li><PartnerNav /></li>
        <li><ResourcesNav /></li>
        <li><PoliciesNav /></li>
      </ul>

      <div className="flex items-center gap-6">
        <span className="cursor-pointer hover:text-gray-300">Login</span>
        <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
          Signup Now
        </button>
      </div>
    </nav>
  );
}
