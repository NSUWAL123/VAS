export const setUsernameLS = (username: string): boolean => {
    localStorage.setItem('username', username)
    return true
}

export const getUsernameLS = (): any => {
    const username = localStorage.getItem('username')
    return username
}

export const removeUsernameLS = (): boolean => {
    localStorage.removeItem('username')
    return true
}