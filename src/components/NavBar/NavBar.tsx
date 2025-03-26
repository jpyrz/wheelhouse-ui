import {
  IconLogout2,
  IconArticle,
  IconHash,
  IconUserCircle,
  IconMessage,
} from "@tabler/icons-react";
import { Flex, Stack, UnstyledButton, Text, Divider } from "@mantine/core";
import classes from "./NavBar.module.css";
import { useUserProfile } from "../../hooks/useUserProfile";
import { logOut } from "../../firebaseUtils";
import LogoHeader from "../Logo/LogoHeader";
import { NavBarItem } from "./NavBarItem";
import { UserCard } from "../Library/UserCard/UserCard";

// Temporary mock data for demo purposes
const navItems = [
  {
    icon: IconArticle,
    label: "Feed",
    to: "/feed",
  },
  {
    icon: IconHash,
    label: "Topics",
    to: "/topics",
    children: [
      { label: "design-system", to: "/topics/design-system" },
      { label: "web-dev-tutorials", to: "/topics/web-dev-tutorials" },
      { label: "backend-services", to: "/topics/backend-services" },
      { label: "mobile-app", to: "/topics/mobile-app" },
      { label: "api-development", to: "/topics/api-development" },
      { label: "devops", to: "/topics/devops" },
      { label: "machine-learning", to: "/topics/machine-learning" },
      { label: "data-analytics", to: "/topics/data-analytics" },
      { label: "customer-portal", to: "/topics/customer-portal" },
      { label: "internal-tools", to: "/topics/internal-tools" },
      { label: "marketing-website", to: "/topics/marketing-website" },
      { label: "e-commerce-platform", to: "/topics/e-commerce-platform" },
      { label: "user-research", to: "/topics/user-research" },
      { label: "security", to: "/topics/security" },
      {
        label: "performance-optimization",
        to: "/topics/performance-optimization",
      },
      { label: "cloud-infrastructure", to: "/topics/cloud-infrastructure" },
      { label: "content-management", to: "/topics/content-management" },
      { label: "customer-support", to: "/topics/customer-support" },
      { label: "sales-tools", to: "/topics/sales-tools" },
      { label: "hr-systems", to: "/topics/hr-systems" },
    ],
  },
  {
    icon: IconMessage,
    label: "Messages",
    to: "/messages",
    children: [
      { label: "Casey Boatman", to: "/messages/casey-boatman" },
      { label: "Dorothy Young", to: "/messages/dorothy-young" },
      { label: "Lena Holland", to: "/messages/lena-holland" },
      { label: "Marianne Smith", to: "/messages/marianne-smith" },
      { label: "Ruthie Mccoy", to: "/messages/ruthie-mccoy" },
    ],
  },
];

export function NavBar() {
  return (
    <Flex direction="column" justify="space-between" className={classes.navbar}>
      <Stack justify="center" gap={8} className={classes.linkStack}>
        {/* Logo header */}
        <LogoHeader logoWidth={130} logoHeight={60} className={classes.logo} />

        {/* Navigation items */}
        {navItems.map((link) => (
          <NavBarItem {...link} key={link.label} />
        ))}
      </Stack>

      <div className={classes.navbarFooter}>
        <Divider size="xs" />
        <UserCard />
      </div>
    </Flex>
  );
}
