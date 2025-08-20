const Item = require('../Models/Pedido');

class ItemService {
  async createItem(data) {

    const item = new Item(data);
    await item.save();
    return item;
  }
   
  async getAllItems(opts = {}) {
    const { estado, order = 'desc' } = opts;

    const filter = {};
    if (estado) filter.estado = estado;

    const direction = String(order).toLowerCase() === 'asc' ? 1 : -1;

    return await Item.find(filter).sort({ fechaPedido: direction });
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