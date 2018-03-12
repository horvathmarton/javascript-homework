// Átmeneti megoldás (adatbázis mock)
const userStore = [
    {
        id: 0,
        email: 'admin@admin.com',
        password: 'admin'
    },
    {
        id: 1,
        email: 'lorem@ipsum.com',
        password: 'lorem'
    },
    {
        id: 2,
        email: 'average@joe.com',
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