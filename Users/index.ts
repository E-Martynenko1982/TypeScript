type UserRole = 'guest' | 'member' | 'admin';

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

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

function updateUser(id: any, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    console.error('User not found');
    return;
  }

  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, 'id'>): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

addNewUser({ username: 'nina_richi', role: 'member' });
console.log(users);
