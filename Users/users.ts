type UserRole = 'guest' | 'member' | 'admin';

type User = {
  id: number;
  userName: string;
  role: UserRole;
};

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, userName: 'john_doe', role: 'member' },
  { id: nextUserId++, userName: 'jane_doe', role: 'admin' },
  { id: nextUserId++, userName: 'guest_doe', role: 'guest' },
];

function fetchUserDetails(userName: string) {
  const user = users.find(user => user.userName === userName);
  if (!user) {
    throw new Error(`User with userName ${userName} not found`);
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

addNewUser({ userName: 'nina_richi', role: 'member' });
console.log(users);
