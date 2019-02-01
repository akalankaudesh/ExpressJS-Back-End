import {CustomerDAOImpl} from "./custom/impl/customer-dao-impl";
import {PoolConnection} from "mysql";
import {ItemDaoImpl} from "./custom/impl/item-dao-impl";

export enum DAOTypes{
    CUSTOMER, ITEM,ORDER,ORDER_DETAILS
}

export function getDAO(daoType: DAOTypes, connection: PoolConnection){
    switch (daoType) {
        case DAOTypes.CUSTOMER:
            return new CustomerDAOImpl(connection);
        case DAOTypes.ITEM:
            return new ItemDaoImpl(connection);
        case DAOTypes.ORDER:
            // return new ItemDaoImpl(connection);
        default:
            return null;
    }
}