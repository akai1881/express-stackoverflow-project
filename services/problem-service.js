const { Problem } = require('./../models');
const ErrorHandler = require('./../utils/error-handler');

const create = async (title, description, userId) => {
    await Problem.create({ title, description, userId });
};

module.exports = {
    create,
};
