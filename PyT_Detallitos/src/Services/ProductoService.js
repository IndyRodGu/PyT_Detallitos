// src/Services/ProductoService.js
const mongoose = require('mongoose');
const Item = require('../Models/Producto');


const toObjectId = (v) =>
  (v && mongoose.isValidObjectId(v)) ? new mongoose.Types.ObjectId(v) : v;

class ItemService {
  async createItem(data) {
    const payload = {
      ...data,
      categoriaId: toObjectId(data.categoriaId),
      proveedorId: toObjectId(data.proveedorId),
    };
    const item = new Item(payload);
    await item.save();
    return item;
  }

  async getAllItems(opts = {}) {
    const {
      q,
      categoriaId,
      sort = 'nombre',     
      order = 'asc',       
    } = opts;

    const pipeline = [];

    const match = {};
    if (q && q.trim()) match.nombre = { $regex: q.trim(), $options: 'i' };
    if (categoriaId && mongoose.isValidObjectId(categoriaId)) {
      match.categoriaId = new mongoose.Types.ObjectId(categoriaId);
    }
    if (Object.keys(match).length) pipeline.push({ $match: match });

    pipeline.push(
      {
        $lookup: {
          from: 'Categoria',
          localField: 'categoriaId',
          foreignField: '_id',
          as: 'categoria'
        }
      },
      { $unwind: '$categoria' }
    );

    const direction = String(order).toLowerCase() === 'desc' ? -1 : 1;
    pipeline.push({ $sort: { [sort]: direction, _id: 1 } });

    return await Item.aggregate(pipeline);
  }

  async getItem(id) {
    if (!mongoose.isValidObjectId(id)) return null;
    const result = await Item.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'Categoria',
          localField: 'categoriaId',
          foreignField: '_id',
          as: 'categoria'
        }
      },
      { $unwind: '$categoria' }
    ]);
    return result[0] || null;
  }

  async updateItem(id, data) {
    if (!mongoose.isValidObjectId(id)) return null;

    const update = { ...data };
    if (data.categoriaId !== undefined) update.categoriaId = toObjectId(data.categoriaId);
    if (data.proveedorId !== undefined) update.proveedorId = toObjectId(data.proveedorId);

    return await Item.findByIdAndUpdate(id, update, { new: true, runValidators: true });
  }

  async deleteItem(id) {
    if (!mongoose.isValidObjectId(id)) return null;
    return await Item.findByIdAndDelete(id);
  }
}

module.exports = new ItemService();
