// Átmeneti megoldás (adatbázis mock)
const userStore = [
    {
        id: 1,
        email: 'admin@admin.com',
        name: 'Admin Admin',
        password: 'admin'
    },
    {
        id: 2,
        email: 'lorem@ipsum.com',
        name: 'Lorem Ipsum',
        password: 'lorem'
    },
    {
        id: 3,
        email: 'average@joe.com',
        name: 'Average Joe',
        password: '1234'
    }
];

const getUsers = () => {
    return userStore;
};

const getUser = (id) => {
    userStore.forEach((user) => {
        if (user.id === id) {
            return user;
        }
    });
    return null;
};

const addUser = (user) => {
    userStore.push(user);
};

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.addUser = addUser;
