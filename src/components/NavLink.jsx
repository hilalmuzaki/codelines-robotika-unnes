import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({
  to,
  label,
  end = false,
  onClick,
  mobile = false,
}) {
  if (mobile) {
    return (
      <li className="w-full body-style">
        <RouterNavLink
          to={to}
          end={end}
          onClick={onClick}
          className={({ isActive }) =>
            `flex w-full py-4 justify-center items-center hover:bg-tertiary ${
              isActive ? "bg-tertiary font-semibold" : ""
            }`
          }
        >
          {label}
        </RouterNavLink>
      </li>
    );
  }

  return (
    <li className="py-5 body-style  hover:text-tertiary hover:cursor-pointer">
      <RouterNavLink
        to={to}
        end={end}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "text-tertiary font-semibold"
            : ""
        }
      >
        {label}
      </RouterNavLink>
    </li>
  );
}