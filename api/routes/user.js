const ntdmn = require('number-to-date-month-name');
const { hashPassword, verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../func');
const User = require('../models/User');

const router = require('express').Router();
//UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = hashPassword(req.body.password);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ADMIN
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});
//GET ALL USER
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(3) : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    const result = [];
    const data = await User.aggregate([
        {
            $match: {
                createdAt: { $gte: lastYear },
            },
        },
        {
            $project: {
                month: { $month: '$createdAt' },
            },
        },
        {
            $group: {
                _id: '$month',
                amount: { $sum: 1 },
            },
        },
    ]);
    data.map((item) => {
        let obj = {
            month: ntdmn.toMonth(item._id),
            amount: item.amount,
        };
        result.push(obj);
    });
    res.status(200).json(result);
});
module.exports = router;