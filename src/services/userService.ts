import { apiRequest } from "../api/api";

export async function fetchUserProfile() {
  return apiRequest<UserProfile>("users/profile");
}

interface UserProfile {
  displayName: string;
  email: string;
}
