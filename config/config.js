require('dotenv').config();

const config = {
    application: {
        port: process.env.PORT,
        domainName: process.env.DOMAIN_NAME
    },
};

module.exports = config;
