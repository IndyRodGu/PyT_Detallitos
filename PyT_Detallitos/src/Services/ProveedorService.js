const Item = require('../Models/Proveedor');

class ItemService {
  async createItem(data) {

    const item = new Item(data);
    await item.save();
    return item;
  }
   
  async getAllItems() {
    return await Item.find();
  }

  async getAllItems2(opts = {}) {
    const { categoria } = opts;

    let filter = {};
    if (categoria) {
      filter = { categorías: { $in: [categoria] } };
    }
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