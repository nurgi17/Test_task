module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      middle_name: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };