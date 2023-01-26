const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'created_at',
  },
};

class UserModel extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'UserModel',
      timestamps: false,
    };
  }

  static associate(models) {
    this.hasMany(models.TaskModel, {
      foreignKey: 'userId',
      as: 'tasks',
    });
  }
}

module.exports = {
  USER_TABLE,
  UserSchema,
  UserModel,
};
