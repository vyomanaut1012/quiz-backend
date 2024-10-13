const Admin = require('../../models/admin/admin.js');
const bcrypt = require("bcrypt");

exports.signin = async (req, res) => {

    const { email, password } = req.body;

    try {

        const alreadyExist = await Admin.findOne({ email });

        if (!alreadyExist) {
            return res.status(200).json({
                resCode: 404,
                resType: 'danger',
                resMessage: 'email is not register'
            });
        }

        if (await bcrypt.compare(password, alreadyExist.password)) {
            return res.status(200).json({
                resCode: 200,
                resType: 'success',
                resMessage: 'login successfully',
                name: alreadyExist.name,
                adminId: alreadyExist.adminId
            });
        } else {
            return res.status(200).json({
                resCode: 401,
                resType: 'danger',
                resMessage: 'wrong password'
            });
        }
    }
    catch (error) {
        res.status(200).json({
            resCode: 500,
            resType: 'danger',
            resMessage: 'something is going wrong during signin'
        })
        console.error('something is going wrong during signin');
    }
}