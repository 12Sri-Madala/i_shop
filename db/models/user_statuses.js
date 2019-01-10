const Sequelize = require('sequelize');
const { findbyMid } = require('./interfaces')

module.exports = db => {
    const UserStatuses = db.define('userStatuses', {
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

    UserStatuses.findbyMid = findbyMid;
    // machineID (mid): admin, super_admin
    return UserStatuses
}