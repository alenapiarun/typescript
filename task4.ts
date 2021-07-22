// 1
interface UserValues {
    [key:string]: any
}

function updateUser(user: UserValues, newValues: UserValues) : UserValues {
    return { ...user, ...newValues };
}

let user = {}

const updatedUser = updateUser(user, { isOnline: true });
const updatedUser2 = updateUser(user, { age: 25, lastName: "Petrov" });


// 2
interface User2 {
    id: string,
    firstName: string,
    lastName: string,
    isOnline: boolean,
    age: number
}

function updateUser2(user: User2, newValues: Partial<User2>) : User2 {
    return { ...user, ...newValues };
}

let user2 = {
    id: "222",
    firstName: "Ivan",
    lastName: "Ivanov",
    isOnline: false,
    age: 20
}

const updatedUser3 = updateUser(user2, { isOnline: true });
const updatedUser4 = updateUser(user2, { age: 25, lastName: "Petrov" });