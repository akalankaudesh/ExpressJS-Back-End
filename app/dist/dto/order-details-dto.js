"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetails = /** @class */ (function () {
    function OrderDetails(orderid, itemcode, itemdescription, unitprice, ordrqty) {
        this.orderid = orderid;
        this.itemcode = itemcode;
        this.itemdescription = itemdescription;
        this.unitprice = unitprice;
        this.ordrqty = ordrqty;
    }
    return OrderDetails;
}());
exports.OrderDetails = OrderDetails;
