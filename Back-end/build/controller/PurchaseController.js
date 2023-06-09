"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const PurchaseBusiness_1 = require("../busines/PurchaseBusiness");
class PurchaseController {
    constructor() {
        this.purchaseBusiness = new PurchaseBusiness_1.PurchaseBusiness();
        this.purchase = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const quantity = req.body.quantity;
                const clientId = req.params.clientId;
                const productId = req.params.productId;
                const newPurchase = {
                    quantity,
                    clientId,
                    productId,
                };
                yield this.purchaseBusiness.purchase(newPurchase);
                res.status(200).send({ message: "Compra realizada com sucesso." });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.PurchaseController = PurchaseController;
