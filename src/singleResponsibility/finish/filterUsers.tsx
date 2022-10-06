import { User } from "./types";

export const getOnlyActive = (users: any) => {
  const startingYear = new Date();
  const endingYear = new Date();
  startingYear.setFullYear(startingYear.getFullYear() - 22);
  endingYear.setFullYear(endingYear.getFullYear() - 20);

  return users.filter(
    (user: User) =>
      user &&
      user.year >= startingYear.getFullYear() &&
      user.year < endingYear.getFullYear()
  );
};
