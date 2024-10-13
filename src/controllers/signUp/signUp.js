const Admin = require('../../models/admin/admin.js');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");


exports.signup = async (req, res) => {

    const { name, email, password } = req.body;
    let hashedCode = await bcrypt.hash(password, 10);
    const adminID = uuidv4();
    const requestData = {
        adminId: adminID,
        name: name,
        email: email,
        password: hashedCode
    }

    const alreadyExist = await Admin.findOne({ email });

    if (alreadyExist) {
        return res.status(200).json({
            resCode: 200,
            resMessage: 'exists',
            resType: 'danger'
        });
    }

    try {
        const admin = await Admin.create(requestData);
        res.status(200).json({
            adminId: adminID,
            resCode: 200,
            resMessage: 'admin has been created Successfully',
            resType: 'success'
        });
    }
    catch (error) {
        res.status(200).json({
            resCode: 401,
            resType: 'danger',
            resMessage: 'something is going wrong during signup'
        })
        console.error('something is going wrong during signup');
    }

}