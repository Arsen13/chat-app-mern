const signup = (req, res) => {
    console.log("SignUp user");
    res.send("SignUp Route")
}

const login = (req, res) => {
    console.log("Login user");   
}

const logout = (req, res) => {
    console.log("LogOut user");
}

module.exports = {login, logout, signup};