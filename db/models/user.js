const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const { findByPid } = require('./interfaces');


module.exports = (db, userStatuses, userTypes) => {
    const Users = db.define('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
        },
        firstName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        lastName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(60)
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    }, {
        hooks: {
            beforeCreate: async user => {
                const hash = await bcrypt.hash(user.password, 10);

                user.password = hash;
                user.email = user.email.toLowerCase()
            }
        },
        paranoid: true //when it deletes data, it does a soft delete so it can keep a record of previously deleted stuff. this data will not show up on any data calls
    });

    Users.belongsTo(userStatuses);
    Users.belongsTo(userTypes);

    Users.prototype.comparePasswords = function(candidatePassword){
        return new Promise( (resolve, reject) => {
            bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
                if(err) {
                    return reject(err); // reject sends the error to the catch
                }

                resolve(isMatch);
            })
        });
    }

    Users.findByPid = findByPid;

    return Users
}
