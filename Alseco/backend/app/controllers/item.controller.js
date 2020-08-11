const db = require("../models");
const Item = db.items;

// Create and Save a new Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.price || !req.body.user_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Item
  const item = {
    name: req.body.name,
    price: req.body.price,
    userId: req.body.user_id
  };

  // Save Item in the database
  Item.create(item)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Item."
      });
    });
};

// Update a Item by the id in the request
exports.update = (req, res) => {
  // Validate request  
  if (!req.body.name || !req.body.price || !req.body.user_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  Item.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Item with id=" + id
      });
    });
};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Item.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Item with id=" + id
      });
    });
};
