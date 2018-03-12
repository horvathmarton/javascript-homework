// Átmeneti megoldás (adatbázis mock)
const recipieStore = [
    {
        id: 0,
        name: 'Marhapörkölt',
        description: 'Lorem ipsum'
    },
    {
        id: 1,
        name: 'Lecsó',
        description: 'Lorem ipsum'
    },
    {
        id: 2,
        name: 'Kuglóf',
        description: 'Lorem ipsum'
    }
];

const getRecipies = () => {
    return recipieStore;
};

const getRecipie = (id) => {
    recipieStore.forEach((recipie) => {
        if (recipie.id === id) {
            return recipie;
        }
    });
    return null;
};

const addRecipie = (recipie) => {
    recipieStore.push(recipie);
};

module.exports.getRecipies = getRecipies;
module.exports.getRecipie = getRecipie;
module.exports.addRecipie = addRecipie;
