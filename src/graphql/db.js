export const people = [
    {
        id: 1,
        name: "will",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        name: "erin",
        age: 20,
        gender: "male"
    },
    {
        id: 3,
        name: "seungho",
        age: 21,
        gender: "male"
    },
    {
        id: 4,
        name: "koko",
        age: 22,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0]
}