/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: FXOUT -> Foreign Ex-change Outright.
 *
 *  Two parties agree to exchange two fixed cash flows in different currencies at a certain point in time in future.
 *
 */
export class ForeignExchangeOutrightTermset extends core.Termset {
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

    // Currency 2.
    currency2?: string;

    // Delinquency Period.
    delinquencyPeriod: core.Period;

    // Delinquency Rate.
    delinquencyRate?: number = 0.0;

    // Delivery Settlement.
    deliverySettlement: enums.DeliverySettlement = enums.DeliverySettlement.D;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Exercise Amount.
    exerciseAmount?: number;

    // Exercise Date.
    exerciseDate?: Date;

    // Grace Period.
    gracePeriod: core.Period;

    // Market Object Code.
    marketObjectCode?: string;

    // Market Value Observed.
    marketValueObserved?: number;

    // Maturity Date.
    maturityDate?: Date;

    // Non Performing Date.
    nonPerformingDate?: Date;

    // Notional Principal.
    notionalPrincipal?: number;

    // Notional Principal 2.
    notionalPrincipal2?: number;

    // Price At Purchase Date.
    priceAtPurchaseDate?: number;

    // Price At Termination Date.
    priceAtTerminationDate?: number;

    // Purchase Date.
    purchaseDate?: Date;

    // Seniority.
    seniority?: enums.Seniority;

    // Settlement Currency.
    settlementCurrency?: string;

    // Settlement Period.
    settlementPeriod: core.Period;

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
