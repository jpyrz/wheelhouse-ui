import {
  useMantineColorScheme,
  AppShell,
  Burger,
  Flex,
  Group,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { NavBar } from "../NavBar/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Account from "../Account/Account";
import Feed from "../Feed/Feed";
import Topics from "../Topics/Topics";

export function ProtectedLayout() {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 100,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="xl"
    >
      <AppShell.Header p="sm">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Flex justify="space-between">
          <div>Wheelhouse</div>
          <Group>
            <Button
              onClick={() =>
                setColorScheme(colorScheme === "dark" ? "light" : "dark")
              }
            >
              {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
            </Button>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/topics" element={<Topics />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Navigate to="/topics" />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}
