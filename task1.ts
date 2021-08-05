// 1
interface User {
    id: string,
    firstName: string,
    lastName: string,
    isOnline: boolean,
    role: string,
    age?: number,
    address: {
        city:  string,
        country:  string,
        zip:  string
    } | null
}

// 2
interface Address {
    city:  string,
    country:  string,
    zip:  string
}

interface User {
    id: string,
    firstName: string,
    lastName: string,
    isOnline: boolean,
    role: string,
    age?: number,
    address: Address | null
}

