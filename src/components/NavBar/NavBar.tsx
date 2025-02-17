import {
  IconHome2,
  IconLogout2,
  IconPlayCardStarFilled,
  IconPlayerPlayFilled,
  IconUserCircle,
} from "@tabler/icons-react";
import { Flex, Stack, Tooltip, UnstyledButton, Text } from "@mantine/core";
import classes from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useUserProfile } from "../../hooks/useUserProfile";
import { logOut } from "../../firebaseUtils";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  to: string;
  size?: number;
}

function NavbarLink({ icon: Icon, label, to, size }: NavbarLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 500 }}>
      <UnstyledButton
        component={Link}
        to={to}
        className={classes.link}
        data-active={isActive || undefined}
      >
        <Icon size={size ?? 28} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const navItems = [
  { icon: IconPlayerPlayFilled, label: "Play", to: "/play" },
  { icon: IconPlayCardStarFilled, label: "Decks", to: "/decks" },
];

export function NavBar() {
  const { data: userProfile } = useUserProfile();

  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      style={{ height: "100%" }}
    >
      <Stack justify="center" gap={8}>
        {navItems.map((link) => (
          <NavbarLink {...link} key={link.label} />
        ))}
      </Stack>

      <Stack justify="center" gap={0}>
        <NavbarLink
          icon={IconUserCircle}
          label="Account"
          to="/account"
          size={36}
        />
        <Text size="xs" ta="center">
          {userProfile?.displayName}
        </Text>
        <UnstyledButton
          className={`${classes.link} ${classes.logoutBtn}`}
          onClick={logOut}
        >
          <IconLogout2 size={32} stroke={1.5} />
        </UnstyledButton>
      </Stack>
    </Flex>
  );
}
