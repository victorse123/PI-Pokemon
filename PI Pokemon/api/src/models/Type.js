const { dataTypes, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("type", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primarykey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },{timestamps: false});
};