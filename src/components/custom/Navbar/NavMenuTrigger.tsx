
import React from "react";
import NavDropdown from "./NavDropdown";
import { NavLink } from "../../../data/navLinks";

interface NavMenuTriggerProps {
  title: string;
  menuKey: string;
  activeDropdown: string | null;
  links: NavLink[];
  resourceLinks?: NavLink[];
  onMouseEnter: (dropdown: string) => void;
  onMouseLeave: () => void;
  onDropdownMouseEnter: () => void;
  onDropdownMouseLeave: () => void;
}

const NavMenuTrigger: React.FC<NavMenuTriggerProps> = ({
  title,
  menuKey,
  activeDropdown,
  links,
  resourceLinks,
  onMouseEnter,
  onMouseLeave,
  onDropdownMouseEnter,
  onDropdownMouseLeave
}) => {
  return (
    <div
      className="relative py-2 hover:bg-black/5 px-4 rounded-md transition-colors"
      onMouseEnter={() => onMouseEnter(menuKey)}
      onMouseLeave={onMouseLeave}
    >
      <button className="cursor-pointer">{title}</button>
      <NavDropdown
        isActive={activeDropdown === menuKey}
        links={links}
        resourceLinks={resourceLinks}
        onMouseEnter={onDropdownMouseEnter}
        onMouseLeave={onDropdownMouseLeave}
      />
    </div>
  );
};

export default NavMenuTrigger;
