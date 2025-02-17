import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../services/userService";

export function useUserProfile() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });
}
