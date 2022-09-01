/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: STK -> Stock.
 *
 *  Any instrument which is bought at a certain amount (market price normally) and then follows an index.
 *
 */
export class StockTermset extends core.Termset {
    // Business Day Convention.
    businessDayConvention: enums.BusinessDayConvention = enums.BusinessDayConvention.NOS;

    // Calendar.
    calendar: enums.Calendar = enums.Calendar.NC;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Counterparty Identifier.
    counterpartyID?: string;

    // Creator Identifier.
    creatorID?: string;

    // Currency.
    currency?: string;

    // Cycle Anchor Date Of Dividend.
    cycleAnchorDateOfDividend?: Date;

    // Cycle Of Dividend.
    cycleOfDividend?: core.Cycle;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Ex Dividend Date.
    exDividendDate?: Date;

    // Market Object Code.
    marketObjectCode?: string;

    // Market Value Observed.
    marketValueObserved?: number;

    // Next Dividend Payment Amount.
    nextDividendPaymentAmount?: number = 0.0;

    // Non Performing Date.
    nonPerformingDate?: Date;

    // Notional Principal.
    notionalPrincipal?: number;

    // Price At Purchase Date.
    priceAtPurchaseDate?: number;

    // Price At Termination Date.
    priceAtTerminationDate?: number;

    // Purchase Date.
    purchaseDate?: Date;

    // Quantity.
    quantity: number = 1.0;

    // Seniority.
    seniority?: enums.Seniority;

    // Settlement Currency.
    settlementCurrency?: string;

    // Status Date.
    statusDate?: Date;

    // Termination Date.
    terminationDate?: Date;

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        super(contractID, contractType, contractRole, contractPerformance);
    }
}
