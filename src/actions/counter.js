const increment = () => {
    return {
        type: "INCREMENT"
    }
}
const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
const multiply = () => {
    return {
        type: "MULTIPLY",
        data: 5
    }
}

export default {
    increment,
    decrement,
    multiply
}