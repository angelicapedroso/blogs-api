const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    published: {
      type: DataTypes.DATE
    },
    updated: {
      type: DataTypes.DATE
    },
  },
    { timestamps: false }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { key: 'id', as: 'user' } ) 
  }

  return BlogPost;
};

module.exports = BlogPost;
