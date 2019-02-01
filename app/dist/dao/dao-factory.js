"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_dao_impl_1 = require("./custom/impl/customer-dao-impl");
var item_dao_impl_1 = require("./custom/impl/item-dao-impl");
var DAOTypes;
(function (DAOTypes) {
    DAOTypes[DAOTypes["CUSTOMER"] = 0] = "CUSTOMER";
    DAOTypes[DAOTypes["ITEM"] = 1] = "ITEM";
    DAOTypes[DAOTypes["ORDER"] = 2] = "ORDER";
    DAOTypes[DAOTypes["ORDER_DETAILS"] = 3] = "ORDER_DETAILS";
})(DAOTypes = exports.DAOTypes || (exports.DAOTypes = {}));
function getDAO(daoType, connection) {
    switch (daoType) {
        case DAOTypes.CUSTOMER:
            return new customer_dao_impl_1.CustomerDAOImpl(connection);
        case DAOTypes.ITEM:
            return new item_dao_impl_1.ItemDaoImpl(connection);
        case DAOTypes.ORDER:
        // return new ItemDaoImpl(connection);
        default:
            return null;
    }
}
exports.getDAO = getDAO;
