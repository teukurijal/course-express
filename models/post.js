'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    is_done: DataTypes.BOOLEAN,
    created_by: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    post.belongsTo(models.user, {
      as: 'createdBy',
      foreignKey: 'created_by',
    })
  };
  return post;
};