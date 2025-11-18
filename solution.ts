type valueType = number | string | boolean

const formatValue = (value: valueType): valueType => {

    if (typeof value == 'number') {
        return (value * 10);
    }
    if (typeof value == 'string') {
        return value.toUpperCase();
    }
    if (typeof value == 'boolean') {
        return !value;
    }
    return value

}

type inputtype = string | (string | number)[]
const getLength = (input: inputtype): number => {
    if (typeof input === 'string') {
        return input.length
    }
    if (Array.isArray(input)) {
        return input.length
    }

    return input
}

class Person {
    name: string;
    age: number
    constructor(name: string,
        age: number) {
        this.name = name
        this.age = age
    }
    getDetails() {

        return (
            `'Name: ${this.name}, Age: ${this.age}'`
        )

    }
}

type books = {
    title: string;
    rating: number;
}[]
const filterByRating = (array: books): books => {
    const sortByRating = array.filter((item) => item.rating >= 4)
    return sortByRating
}

type usersType = { id: number; name: string; email: string; isActive: boolean; }[]
const filterActiveUsers = (user: usersType): usersType => {
    const isactive = user.filter(user => user.isActive === true)
    return isactive
}


interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean


}

const printBookDetails = (book: Book): string => {
    const { title, author, publishedYear, isAvailable } = book

    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`
}


const getUniqueValues = (array1: (number | string)[], array2: (number | string)[]): (number | string)[] => {

    let UniqueValues: (any)[] = []
    let UnicCount: number = 0

    for (let i = 0; i < array1.length; i++) {
        const currentValue = array1[i]
        let idDuplect = false

        for (let j = 0; j < UnicCount; j++) {


            if (currentValue === UniqueValues[j]) {
                idDuplect = true
            }
        }

        if (!idDuplect) {
            UniqueValues[UnicCount] = currentValue
            UnicCount++
        }
    }
    for (let i = 0; i < array2.length; i++) {
        const currentValue = array2[i]
        let idDuplect = false
        for (let j = 0; j < UnicCount; j++) {
            if (currentValue == UniqueValues[j]) {
                idDuplect = true
            }
        }
        if (!idDuplect) {
            UniqueValues[UnicCount] = currentValue
            UnicCount++
        }
    }

    return UniqueValues

}



type produtcType = { name: string; price: number; quantity: number; discount?: number; }[]
const calculateTotalPrice = (product: produtcType): number => {
    return product.reduce((total, product) => {
        const price = product.discount ? product.price - (product.price * product.discount / 100) : product.price
        return total + price * product.quantity
    }, 0)

}