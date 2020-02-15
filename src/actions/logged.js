const signIn = () => {
    return {
        type: "SIGN_IN"
    }
}

const logout = () => {
    return {
        type: "SIGN_OUT"
    }
}

export default {
    signIn,
    logout
}