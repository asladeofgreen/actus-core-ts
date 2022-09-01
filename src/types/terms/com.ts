/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: COM -> Commodity.
 *
 *  This is not a financial contract in its propper sense. However it traks movements of commodities such as oil, gas or even houses. Such commodities can serve as underlyings of commodity futures, guarantees or simply asset positions.
 *
 */
export class CommodityTermset extends core.Termset {
    // Contract Deal Date.
    contractDealDate?: Date;

    // Counterparty Identifier.
    counterpartyID?: string;

    // Creator Identifier.
    creatorID?: string;

    // Currency.
    currency?: string;

    // Market Object Code.
    marketObjectCode?: string;

    // Market Value Observed.
    marketValueObserved?: number;

    // Price At Purchase Date.
    priceAtPurchaseDate?: number;

    // Price At Termination Date.
    priceAtTerminationDate?: number;

    // Purchase Date.
    purchaseDate?: Date;

    // Quantity.
    quantity: number = 1.0;

    // Status Date.
    statusDate?: Date;

    // Termination Date.
    terminationDate?: Date;

    // Unit.
    unit?: enums.Unit;

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        super(contractID, contractType, contractRole, contractPerformance);
    }
}
