const User = require("../modals/user");
const mongoose = require('mongoose');
const Warehouse = require("../modals/warehouse");
const Subunit = require("../modals/subunit");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config({path: "../config/config.env"});


const warehouseRegister = async (req,res) => {
    const { user_id,
        name,
        email,
        businessName,
        contactNumberMobile,
        businessAddress,
        city,
        state,
        zip,
        subUnits,
        features } = req.body;

    if(!user_id){
        return res.status(401).json("User not logged in");
    }

    if (!name&&!email&&!businessName&&!contactNumberMobile&&!businessAddress&&!city&&!state&&!zip&&!subUnits) {
        return res.status(422).json("Please fill all the fields");
    }
    // console.log(subUnits);
    try {
        const warehouse = new Warehouse({
            user_id: mongoose.Types.ObjectId(user_id),
            name: name,
            email: email,
            businessName: businessName,
            contactNumberMobile: contactNumberMobile,
            businessAddress: businessAddress,
            city: city,
            state: state,
            zip: zip,
            features: features
        });
        let warehouse_id = null;
        await warehouse.save()
        .then(res => warehouse_id = mongoose.Types.ObjectId(res._id))
        .catch(err => console.log(err))
        if(warehouse_id){
            subUnits.map(async (ele,ind) => {
                try{
                    ele.warehouse_id = warehouse_id;
                    const subunit = new Subunit(ele);
                    const resSubunitReg = await subunit.save();
                    if(resSubunitReg){
                        return res.status(200).json({message: 'WareHouse registered successfully'});
                    }else{
                        return res.status(401).json({message: "Subunits are not saved properly"});
                    }
                }catch(err){
                    console.log(err);
                }
            });
        }else{
            return res.status(401).json({message: "Subunits are not saved properly"});
        }
    } catch (err) {
        console.log(err);
    }
}

const getAllWarehouse = async (req,res) => {
    try{
        const data = await Warehouse.find({});
        res.send(data);
    }catch(err){
        res.send(err);
    }
}

const getAllMyWareHouses = async (req,res) => {
    const userID = req.body.data;
    try{
        const data = await Warehouse.find({user_id: userID}).lean();
        res.send(data);
    }catch(err){
        res.send(err);
    }
}

const getMyWareHouses = async (req,res) => {
    const id = req.body.data;
    try{
        const data = await Warehouse.findOne({_id: id}).lean();
        res.send(data);
    }catch(err){
        res.send(err);
    }
}


const verifyWarehouse = async (req,res) => {
    const id = req.body.id;
    try{
        const data = await Warehouse.updateOne({_id: id}, {$set:{
            isVerified: true
        }}, function(err){
            console.log(err);
        });
        res.send(data);
    }catch(err){
        res.send(err);
    }
}

const getSubunit = async (req,res) => {
    const id = req.body.id;
    try{
        const data = await Warehouse.findOne({"subUnits._id": id}).clone().lean();

        if(data){
            let tempArr;
            data.subUnits.map((ele) => {
                if(ele._id.toString() === id){
                    tempArr = ele;
                    tempArr.city = data.city
                    tempArr.state = data.state
                    tempArr.Name = data.name
                }
            });
            return res.status(200).json(tempArr);
        }else{
            res.status(400).json("Error!!");
        }
    }catch(err){
        res.send(err);
    }
} 

module.exports = {
    warehouseRegister,
    getAllWarehouse,
    getAllMyWareHouses,
    getMyWareHouses,
    verifyWarehouse,
    getSubunit
};
  