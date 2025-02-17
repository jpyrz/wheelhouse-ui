import React from "react";
import { Flex, Text, useMantineTheme } from "@mantine/core";
import styles from "./LogoHeader.module.css";
import Logo from "./Logo";

interface LogoHeaderProps {
  logoWidth?: string;
  logoHeight?: string;
  logoColor?: string;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({
  logoWidth = "300px",
  logoHeight = "75px",
  logoColor,
}) => {
  const theme = useMantineTheme();
  const color = logoColor || theme.colors.blue[6];

  return (
    <Flex className={styles.logoContainer}>
      <Logo
        width={logoWidth}
        height={logoHeight}
        color={color}
        className={styles.logo}
      />
      <Flex className={styles.textContainer} wrap="nowrap">
        <Text size="sm" fw={500} fs="italic">
          Build decks.
        </Text>
        <Text size="sm" fw={500} fs="italic" c={theme.colors.blue[2]}>
          Test 'em out.
        </Text>
        <Text size="sm" fw={500} fs="italic" c={theme.colors.blue[3]}>
          Show 'em off.
        </Text>
      </Flex>
    </Flex>
  );
};

export default LogoHeader;
