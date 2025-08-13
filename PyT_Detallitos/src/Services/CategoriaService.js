const Item = require('../Models/Categoria');

class ItemService {
  async createItem(data) {

    const item = new Item(data);
    await item.save();
    return item;
  }
   
  async getAllItems(id) {
    return await Item.find();
  }

  async getItem(id) {
    return await Item.findById(id);
  }
   async updateItem(id, data) {
    return await Item.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteItem(id) {
    return await Item.findByIdAndDelete(id);
  }
}

module.exports = new ItemService();