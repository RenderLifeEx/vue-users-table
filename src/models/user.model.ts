export interface Address {
    city: string;
    street: string;
}

export interface User {
    id: string;
    name: string;
    age: number;
    gender: string;
    department: string;
    address: Address;
}
