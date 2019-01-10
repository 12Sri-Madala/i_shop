const Sequelize = require('sequelize');
const { findbyMid } = require('./interfaces')

module.exports = db => {
    const UserTypes = db.define('userTypes', {
        description: {
            allowNull: true,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        mid: {
            allowNull: false,
            type: Sequelize.STRING
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    }, {
        paranoid: true,
    })

    UserTypes.findbyMid = findbyMid;
    // machineID (mid): admin, super_admin
    return UserTypes
}