const asyncMiddleware = require("../middleware/asyncHandler");
const sellix = require("@sellix/node-sdk")("zmopKzD8gvAMQ5c8YLyK4wW99rXEmPWrW5TgIlyrOYYCBE8xMDyZ4nXOteBwlTFG", "lasthope-shop")

module.exports = {
    getAll: asyncMiddleware(async(req, res, next) => {
        try {
            const products = await sellix.products.list()
            res.json({success: true, products: products})
          } catch (e) {
            console.log(e)
          }
    }) 
}