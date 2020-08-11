module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Item
    router.post("/", item.create);
  
    // Update a Item with id
    router.put("/:id", item.update);
  
    // Delete a Item with id
    router.delete("/:id", item.delete);
  
    app.use('/api/item', router);
  };