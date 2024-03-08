const baseRoute = `${process.env.NEXT_PUBLIC_DOMAIN}/api`;

export const USER_API_ROUTES = {
  LOGIN: `${baseRoute}/login`,
  UserById: (id) => `${baseRoute}/user/${id}`,
};
