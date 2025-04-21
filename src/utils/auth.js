// Retrieves the 'user' object from localStorage and parses it into a JavaScript object
export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));

}

// Checks if a user is authenticated by verifying if the 'user' object exists in localStorage
export const isAuthenticated = () => {
    const user = getUser();
    return !!user;// Returns true if the user exists, otherwise false
}

// Retrieves the role of the authenticated user from the 'user' object
export const getUserRole = () => {
    const user =getUser();
    return user ?.role || null;// Returns the user's role if exists, or null if the role is not defined
}