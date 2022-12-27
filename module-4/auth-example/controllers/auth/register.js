const {User} = require("../../models");
const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs")

const register = async(req, res)=>{
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if (user){
        throw new Conflict(`User with ${email} already exists`)
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    
    const result = User.create({name, email, password: hashPassword})
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                name,
                email,
            }
        }

    })

}

module.exports = register;