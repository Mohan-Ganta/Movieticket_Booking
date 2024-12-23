const User = require('../models/User');


//C- creaate ,, r  - read , u - update , d - delate (CRUD)

// awit , async 

module.exports={
    getAllUsers : async (req, res )=> {
        try {
             const users = await User.find();
             res.json(users);
        }
        catch (err) {
            res.status(500).send("Error Geting Data of useers..")

        }
    },
    addUser : async (req,res) =>{
        const {name , email, age} = req.body;
        try {
            const newUser = new User({name,email,age});
            await newUser.save()
            res.status(201).json(newUser);
        }
        catch (err) {
            res.status(500).send('Error ading user ..');
        }
    }
}
