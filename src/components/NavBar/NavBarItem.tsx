import { UnstyledButton } from "@mantine/core";
import { IconHome2, IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import classes from "./NavBarItem.module.css";

interface NavBarItemProps {
  icon?: typeof IconHome2;
  label: string;
  to: string;
  size?: number;
  children?: NavBarItemProps[];
}

export const NavBarItem = ({
  icon: Icon,
  label,
  to,
  size,
  children,
}: NavBarItemProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(true);
  const isActive = to ? location.pathname === to : false;
  const hasChildren = children && children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <UnstyledButton
        component={Link}
        to={to}
        className={classes.link}
        data-active={isActive || undefined}
        onClick={handleClick}
      >
        <div className={classes.linkContent}>
          {Icon && <Icon className={classes.icon} stroke={1.5} />}
          <span className={classes.linkLabel}>{label}</span>
        </div>
        {hasChildren && (
          <IconChevronDown
            size={18}
            stroke={1.5}
            style={{
              transform: isOpen ? "rotate(180deg)" : "none",
              transition: "transform 0.2s ease",
            }}
          />
        )}
      </UnstyledButton>

      {hasChildren && (
        <div className={`${classes.nestedLinks} ${isOpen ? classes.open : ""}`}>
          <div className={classes.nestedLinksScroller}>
            {children.map((child) => (
              <NavBarItem key={child.label} {...child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
