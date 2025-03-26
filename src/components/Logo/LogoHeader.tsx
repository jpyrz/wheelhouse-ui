import React from "react";
import { Flex, useMantineTheme } from "@mantine/core";
import styles from "./LogoHeader.module.css";
import Logo from "./Logo";

interface LogoHeaderProps {
  logoWidth?: number;
  logoHeight?: number;
  logoColor?: string;
  className?: string;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({
  logoWidth = 300,
  logoHeight = 200,
  logoColor,
  className,
}) => {
  const theme = useMantineTheme();
  const color = logoColor || theme.colors.blue[6];

  return (
    <Flex
      className={`${styles.logoContainer} ${className || ""}`}
      direction="column"
      gap="xs"
    >
      <Logo
        width={logoWidth}
        height={logoHeight}
        color={color}
        className={styles.logo}
      />
    </Flex>
  );
};

export default LogoHeader;
