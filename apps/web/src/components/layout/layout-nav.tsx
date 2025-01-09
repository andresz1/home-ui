import { allDocuments } from "content-collections";

import { Nav, NavProps } from "../nav";
import { NavLink } from "../nav-link";

export interface LayoutNavProps extends NavProps {
  onLinkClick?: () => void;
}

export const LayoutNav = ({ onLinkClick, ...others }: LayoutNavProps) => {
  return (
    <Nav {...others}>
      {allDocuments
        .filter((doc) => doc._meta.path.split("/").length === 2)
        .map((doc) => (
          <NavLink
            className="ml-md"
            key={doc.url}
            href={doc.url}
            onClick={onLinkClick}
          >
            {doc.title}
          </NavLink>
        ))}
    </Nav>
  );
};
