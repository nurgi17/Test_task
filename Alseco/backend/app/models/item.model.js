module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("item", {
      name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DOUBLE
      }
    });

    return Item;
  };