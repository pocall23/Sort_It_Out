const Item = require('../models/Item.js')


const createItem = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const item = new Item(body) 

    if(!item){
        res.status(400).json({ success: false, error: 'error' })
    }

    item.save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: item._id,
            message: 'Item added'
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: "Item was not added"
        })
    })
}

   const updateItem = async (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
                })
    }

    Item.findOne({ _id: req.paras.id}, (err, item) => {
        if(err){
            return res.status(404).json({
                err,
                message: 'Item not found'
            })
        }

    item.name = body.name
    item.quantity = body.quantity
    item.date = body.date

    item
    .save()
    .then(() => {
        return res.status(200).json({
            success: true,
            id: item._id,
            message: 'item updated'
        })
    })
    .catch(error => {
        return res.status(404).json({
            error,
            message: 'item has not been updated'
        })
    })


    })
   }

   const deleteItem = async (req,res) => {

    await Item.findOneAndDelete({ _id : req.params.id   }, (err, item) =>{
        if(err){
            return res.status(400).json({ success: false, error: err  })
        }

        if(!item){
            return res.status(404).json({ success: false, error: 'item not found'})
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
   }

   const getItemById = async (req,res) => {

    await Item.findOne({ _id : req.params.id   }, (err, item) =>{
        if(err){
            return res.status(400).json({ success: false, error: err  })
        }

        if(!item){
            return res.status(404).json({ success: false, error: 'item not found'})
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
   }


   

    module.exports = {
        createItem,
        updateItem,
        deleteItem,
        getItemById,


    }