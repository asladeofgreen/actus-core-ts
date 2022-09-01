/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: FUTUR -> Future.
 *
 *  Keeps track of value changes for any basic CT as underlying (PAM, ANN etc. but also FXOUT, STK, COM). Handles margining calls.
 *
 */
export class FutureTermset extends core.Termset {
    // Business Day Convention.
    businessDayConvention: enums.BusinessDayConvention = enums.BusinessDayConvention.NOS;

    // Calendar.
    calendar: enums.Calendar = enums.Calendar.NC;

    // Clearing House.
    clearingHouse?: enums.ClearingHouse;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Structure.
    contractStructure?: Array<core.ContractReference> = [];

    // Counterparty Identifier.
    counterpartyID?: string;

    // Creator Identifier.
    creatorID?: string;

    // Currency.
    currency?: string;

    // Cycle Anchor Date Of Margining.
    cycleAnchorDateOfMargining?: Date;

    // Cycle Of Margining.
    cycleOfMargining?: core.Cycle;

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

    // Futures Price.
    futuresPrice?: number;

    // Grace Period.
    gracePeriod: core.Period;

    // Initial Margin.
    initialMargin?: number = 0.0;

    // Maintenance Margin Lower Bound.
    maintenanceMarginLowerBound?: number;

    // Maintenance Margin Upper Bound.
    maintenanceMarginUpperBound?: number;

    // Market Object Code.
    marketObjectCode?: string;

    // Market Value Observed.
    marketValueObserved?: number;

    // Maturity Date.
    maturityDate?: Date;

    // Non Performing Date.
    nonPerformingDate?: Date;

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

    // Variation Margin.
    variationMargin?: number;

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        super(contractID, contractType, contractRole, contractPerformance);
    }
}
