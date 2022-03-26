const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

///*
router.post('/register', async (req, res) => {
    // validation
    let nameLen = req.body.name.length > 5;
    let emailLen = req.body.email.length > 6;
    let passLen = req.body.password.length > 6;

    if (!nameLen) {
        return res.status(400).send('name must be greater then 5 characters');
    }
    if (!emailLen) {
        return res.status(400).send('email must be greater then 6 characters');
    }
    if (!passLen) {
        return res
            .status(400)
            .send('password must be greater then 6 characters');
    }

    const emailExist = await User.findOne({
        email: req.body.email,
    });

    if (emailExist) {
        return res.status(400).send('Email already exists');
    }
    // end validation

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: crypto
            .createHash('sha256')
            .update(req.body.password)
            .digest('hex'),
    });

    console.log(newUser);

    const user = await newUser.save();

    if (!user) {
        return res.status(400).send('Error creating profile');
    }

    /* // just leaving this for now, returns the 
      // whole user object fyi
  const email = await User.findOne({
    email: req.body.email
  });

  console.log(`email on register: ${email}`);
  */

    // create jwt
    // https://www.npmjs.com/package/jsonwebtoken
    const token = jwt.sign(
        {
            _id: user._id,
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: '1h',
        }
    );

    res.set('auth-token', token);
    res.status(200).send(user);
});
//*/

router.post('/login', async (req, res) => {
    console.log(req.body.password.length);
    // Validation w/o library
    let emailLen = req.body.email.length > 6;
    let passLen = req.body.password.length > 6;

    if (!emailLen) {
        return res.status(400).send('email must be greater then 6 characters');
    }
    if (!passLen) {
        return res
            .status(400)
            .send('password must be greater then 6 characters');
    }

    const user = await User.findOne({
        email: req.body.email,
    });

    if (!user) {
        return res.status(400).send('Invalid Credentials');
    }

    const validPass = await User.findOne({
        password: crypto
            .createHash('sha256')
            .update(req.body.password)
            .digest('hex'),
    });

    if (!validPass) {
        return res.status(400).send('Invalid Credentials');
    }
    // end validation

    // create jwt
    // https://www.npmjs.com/package/jsonwebtoken
    const token = jwt.sign(
        {
            _id: user._id,
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: '1h',
        }
    );

    // organize the user until a better method comes to me
    let userObj = {
        name: user.name,
        token: token,
    };

    res.set('auth-token', token);
    res.status(200).send(user);
    console.log(`user data: ${user}`);
});

module.exports = router;
