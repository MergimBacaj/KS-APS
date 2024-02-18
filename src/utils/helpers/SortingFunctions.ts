import { User } from "../user";

export const sortByName = (users: User[]) => {
  const sortedUsers = [...users].sort((a, b) => {
    const nameA = a.firstName.toLowerCase();
    const nameB = b.firstName.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return sortedUsers;
};

// Function to sort users by email
export const sortByEmail = (users: User[]) => {
  const sortedUsers = [...users].sort((a, b) => {
    const emailA = a.email.toLowerCase();
    const emailB = b.email.toLowerCase();
    if (emailA < emailB) return -1;
    if (emailA > emailB) return 1;
    return 0;
  });
  return sortedUsers;
};
