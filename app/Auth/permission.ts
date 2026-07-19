import { Role } from "./role";

export const routePermissions: Record<string, Role[]> = {
  "/admin": [Role.ADMIN],
  "/rider": [Role.RIDER],
  "/dashboard": [Role.ADMIN, Role.RIDER, Role.SENDER],
};
