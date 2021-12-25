const ProblemService = require('./../services/problem-service');
const { CREATE_SUCCESS } = require('../utils/consts');

const create = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const { id } = req.user;
        await ProblemService.create(title, description, id);
        res.json({ message: CREATE_SUCCESS });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
};
