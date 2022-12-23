'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade' });
      this.belongsTo(models.Post, { foreignKey: 'postId', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade' });
    }
  }
  Comment.init({
    content: DataTypes.STRING,
  }, 
  {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};