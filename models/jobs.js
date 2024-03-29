const conenxion = require('../utils/database')
const Sequelize = require('sequelize')

const jobs = conenxion.define("jobs",{

    categoria:{
        type: Sequelize.STRING,
        allowNull: false
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    company:{
        type: Sequelize.STRING,
        allowNull: false
    },
    logo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    url:{
        type: Sequelize.STRING,
        allowNull: true
    },
    position:{
        type: Sequelize.STRING,
        allowNull: false
    },
    location:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = jobs;