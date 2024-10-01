type UserRole = 'guest' | 'member' | 'admin';

type User = {
  id: number;
  username: string;
  role: UserRole;
};

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: 'john_doe', role: 'member' },
  { id: nextUserId++, username: 'jane_doe', role: 'admin' },
  { id: nextUserId++, username: 'guest_doe', role: 'guest' },
];

function fetchUserDetails(username: string) {
  const user = users.find(user => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
}

function updateUser(id: number, newUser: User) {
  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    console.error('User not found');
    return;
  }

  Object.assign(foundUser, newUser);
}

function addNewUser(user: Omit<User, 'id'>): User {
  const newUser: User = {
    id: nextUserId++,
    ...user,
  };
  users.push(newUser);
  return newUser;
}

addNewUser({ username: 'nina_richi', role: 'member' });
console.log(users);
