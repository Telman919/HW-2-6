const arr = ['1','2','3','4'];

const result = arr.find((item) => item === '3');
console.log(result);


const peopleList = [
    {
        name: 'Max',
        age: 25,
        id: 1
    },
    {
        name: 'Nik',
        age: 30,
        id: 3
    },
    {
        name: 'Jack',
        age: 32,
        id: 4
    },
    {
        name: 'Harry',
        age: 10,
        id: 5
    },
];

const filteredArr = peopleList.filter(({id}) => id > 2);
console.log(filteredArr);

const filterCharacters = (charactersList) =>
    charactersList.filter(({id}) => id > 5 && id < 20 );

const getCharacters= async () => {
    try {
        const res =await fetch('https://rickandmortyapi.com/api/character');
        const characters =await res.json();
        console.log(filterCharacters(characters.results)); 
    } catch (error) {
        console.log(error);
    }
};

getCharacters();

const obj = {
    name: 'Jacob',
    age: 20,
    id: 1
};

Object.entries(obj).forEach(([key, value]) => {
    alert(`${key}, ${value}`);
});