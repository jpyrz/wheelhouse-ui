import { IconUserCircle, IconDotsVertical } from "@tabler/icons-react";
import { useUserProfile } from "../../../hooks/useUserProfile";
import classes from "./UserCard.module.css";
import { UnstyledButton } from "@mantine/core";

export const UserCard = () => {
  const { data: userProfile } = useUserProfile();

  return (
    <div className={classes.userCard}>
      <div className={classes.user}>
        <IconUserCircle className={classes.avatar} stroke={1} />
        <div className={classes.userDetails}>
          <div className={classes.userName}>{userProfile?.displayName}</div>
          <div className={classes.email}>hardcoded@gmail.com</div>
        </div>
      </div>
      <div className={classes.options}>
        <UnstyledButton onClick={() => console.log("opening user settings")}>
          <IconDotsVertical size={20} />
        </UnstyledButton>
      </div>
    </div>
  );
};
