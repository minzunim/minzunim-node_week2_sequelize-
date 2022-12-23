'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', targetkey: "id", onDelete: 'cascade', onUpdate: 'cascade' });
      this.hasMany(models.Comment, { foreignKey: 'postId', sourceKey: "id", onDelete: 'cascade', onUpdate: 'cascade' });
    } 
  }
  Post.init({
    content: DataTypes.STRING,
  }, 
  {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};