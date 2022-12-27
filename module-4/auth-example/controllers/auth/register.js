const {User} = require("../../models")
const {Conflict} = require("http-errors");

const register = async(req, res)=>{
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if (user){

    }

}

module.exports = register;