const mongoose = require('mongoose');
const Item = require('../Models/Inventario');

class ItemService {
  async createItem(data) {
    const payload = {
      ...data,
      productoId: toObjectId(data.productoId),
      pedidoId: toObjectId(data.pedidoId),
    };

    const item = new Item(payload);
    await item.save();
    return item;
  }
   
  async getAllItems() {
    return await Item.aggregate([
      {
        $lookup: {
          from: 'Producto',             
          localField: 'productoId',     
          foreignField: '_id',          
          as: 'producto'
        }
      },
      { $unwind: '$producto' }          
    ]);
  }

  async getItem(id) {
    if (!mongoose.isValidObjectId(id)) return null;
    const result = await Item.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'Producto',
          localField: 'productoId',
          foreignField: '_id',
          as: 'producto'
        }
      },
      { $unwind: '$producto' }
    ]);
    return result[0] || null;
  }

  async updateItem(id, data) {
    if (!mongoose.isValidObjectId(id)) return null;

    const update = { ...data };
    if (data.productoId !== undefined) update.productoId = toObjectId(data.productoId);
    if (data.pedidoId   !== undefined) update.pedidoId   = toObjectId(data.pedidoId);

    return await Item.findByIdAndUpdate(id, update, { new: true });
  }

  async deleteItem(id) {
    if (!mongoose.isValidObjectId(id)) return null;
    return await Item.findByIdAndDelete(id);
  }
}

module.exports = new ItemService();
