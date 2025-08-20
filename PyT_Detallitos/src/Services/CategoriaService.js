const mongoose = require('mongoose');
const Item = require('../Models/Categoria');

class ItemService {
  async createItem(data) {
    const item = new Item(data);
    await item.save();
    return item;
  }

  async getAllItems() {
    return await Item.find();
  }

  async getItem(id) {
    if (!mongoose.isValidObjectId(id)) return null;
    return await Item.findById(id);
  }

  async getItemByNombre(nombre) {
    if (!nombre) return null;
    const pattern = new RegExp(`^${String(nombre).trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i');
    return await Item.findOne({ nombre: pattern });
  }
  
  async updateItem(id, data) {
    if (!mongoose.isValidObjectId(id)) return null;
    return await Item.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async deleteItem(id) {
    if (!mongoose.isValidObjectId(id)) return null;
    return await Item.findByIdAndDelete(id);
  }
}

module.exports = new ItemService();
