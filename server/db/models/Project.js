module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Project.associate = (models) => {
  //   models.Project.belongsToMany(
  //     models.User,
  //     { through: 'UserProjects' },
  //   );
  // };

  return Project;
};
