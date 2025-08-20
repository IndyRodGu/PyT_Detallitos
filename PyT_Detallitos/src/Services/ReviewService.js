const Item = require('../Models/Review');
const mongoose = require('mongoose');

class ItemService {
  async createItem(data) {

    const item = new Item(data);
    await item.save();
    return item;
  }
   
  async getAllItems(id) {
    return await Item.find();
  }

  
  
  async getAllReviewsFull() {
    return await Item.aggregate([
      {
        $lookup: {
          from: "Cliente",             
          localField: "clienteId",
          foreignField: "_id",
          as: "cliente"
        }
      },
      { $unwind: "$cliente" },
      {
        $lookup: {
          from: "Producto",            
          localField: "productoId",
          foreignField: "_id",
          as: "producto"
        }
      },
      { $unwind: "$producto" },
      {
        $project: {
          _id: 1,
          calificacion: 1,
          comentario: 1,
          fechaReview: 1,
          "cliente.nombre": 1,
          "cliente.email": 1,
          "producto.nombre": 1,
          "producto.precio": 1
        }
      }
    ]);
  }


  
async getItemDetails(id) {
    if (!mongoose.isValidObjectId(id)) return null;

    const [doc] = await Item.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'Cliente',
          localField: 'clienteId',
          foreignField: '_id',
          as: 'cliente'
        }
      },
      { $unwind: '$cliente' },
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

    return doc || null;
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