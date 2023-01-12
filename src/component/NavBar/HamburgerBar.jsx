import { Link } from "react-router-dom";

function HamburgerBar() {
  return (
    <div className="absolute right-4 top-4">
      <div className="dropdown">
        <label tabIndex={0} className="btn bg-red-600 btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-normal dropdown-content text-white mt-0 p-2 -translate-x-20 shadow rounded-box w-fit"
        >
          <li>
            <Link className="px-4" to="/About">
              Om
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/Qualifications">
              Skills
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/Projects">
              Prosjekter
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/Contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerBar;
