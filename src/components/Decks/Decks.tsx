import {
  Image,
  Text,
  Button,
  Card,
  Group,
  Flex,
  ActionIcon,
  Autocomplete,
} from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";

export default function Decks() {
  const decks = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <Flex gap="xl" direction="column" align="center">
      <Autocomplete
        leftSection={<IconSearch size={16} stroke={1.5} />}
        placeholder="Search for a deck"
        data={["React", "Angular", "Vue", "Svelte"]}
        style={{ width: "50%" }}
      />
      <Flex gap="xl" wrap="wrap" justify="start">
        <ActionIcon
          size={200}
          variant="default"
          aria-label="ActionIcon with size as a number"
        >
          <IconPlus size={60} />
        </ActionIcon>
        {decks.map((card) => (
          <Card
            key={card}
            shadow="sm"
            padding="sm"
            radius="md"
            withBorder
            style={{ width: "200px", height: "200px" }}
          >
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={100}
                alt={`Card ${card}`}
              />
            </Card.Section>

            <Group justify="space-between" mt="sm" mb="xs">
              <Text fw={500}>Deck {card}</Text>
            </Group>

            <Button color="blue" fullWidth mt="sm" radius="md">
              Edit
            </Button>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
