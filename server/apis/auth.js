const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
let User = require('../../modals/user');


//NOTE  Registration route
router.post('/register', async (req,res)=>{
    const {name, email, password, contactNumber, cpassword} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error: "Please fill the fields properly!!"});
    }
    
    try{
        const userExist = User.findOne({email:email});
        
        if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }else if(password != cpassword){
            return res.status(400).json({error: "Passwords do not match"});
        }else{
            const user = new User({
                name: name,
                email: email,
                contactNumber: contactNumber,
                password: password,
                cpassword: cpassword
            });
            const userRegistered = await user.save();
            if(userRegistered){
                res.status(201).json({message: "User registered successfully"});
            }else{
                res.status(500).json({error:"Failed to register"});
            }
        }
    }catch(err){
        console.log(err);
    }

});

// Login Router
router.post('/login', async (req,res)=>{
    try{
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "Please fill all the fields"});
        }
        const userLogin = await User.findOne({email:email});

        
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = userLogin.generateAuthToken();

            res.cookie("jsontoken", token, {
                expires: new Date(Date.now()+25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "Invalid credentials"});
            }else{
                res.status(201).json({message: "User logged in successfully"});
            }
        }else{
            res.status(400).json({error: "User not found"});
        }

    }catch(err){
        console.log(err);
    }
});

// Username validation Router
registrationRoutes.route("/validete")
    .post(function(req, res) {
        Registration.findOne({ user_name: req.body.user_name })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    });

// Get allData
registrationRoutes.route("/data").get(function(req, res) {
    Registration.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = router;