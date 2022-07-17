const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { model: 'BlogPosts', key: 'id' },
    },
    categoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { model: 'Categories', key: 'id' },
    },
  },
    { timestamps: false }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts'
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      as: 'categories'
    });
  }

  return PostCategory;
};

module.exports = PostCategory;
