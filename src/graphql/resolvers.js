const will = {
    name:  "will",
    age: 24,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => will
    }
};

export default resolvers;