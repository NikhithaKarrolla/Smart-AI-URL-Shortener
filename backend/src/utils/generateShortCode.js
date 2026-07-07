const { nanoid } = require("nanoid");

const generateShortCode = () => {
    return nanoid(7);
};

module.exports = generateShortCode;