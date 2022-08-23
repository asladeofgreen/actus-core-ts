/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: SWPPV -> Plain Vanilla Swap.
 *
 *  Plain vanilla swaps where the underlyings are always two identical PAM´s however with one leg fixed and the other variable.
 *
 */
export class PlainVanillaSwapTermset extends core.Termset {
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

    // Cycle Anchor Date Of Interest Payment.
    cycleAnchorDateOfInterestPayment?: Date;

    // Cycle Anchor Date Of Rate Reset.
    cycleAnchorDateOfRateReset?: Date;

    // Cycle Of Interest Payment.
    cycleOfInterestPayment?: core.Cycle;

    // Cycle Of Rate Reset.
    cycleOfRateReset?: core.Cycle;

    // Cycle Point Of Rate Reset.
    cyclePointOfRateReset: enums.CyclePointOfRateReset = enums.CyclePointOfRateReset.B;

    // Day Count Convention.
    dayCountConvention?: enums.DayCountConvention;

    // Delinquency Period.
    delinquencyPeriod: core.Period;

    // Delinquency Rate.
    delinquencyRate?: number = 0.0;

    // Delivery Settlement.
    deliverySettlement: enums.DeliverySettlement = enums.DeliverySettlement.D;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Fixing Period.
    fixingPeriod: core.Period;

    // Grace Period.
    gracePeriod: core.Period;

    // Initial Exchange Date.
    initialExchangeDate?: Date;

    // Market Object Code.
    marketObjectCode?: string;

    // Market Object Code Of Rate Reset.
    marketObjectCodeOfRateReset?: string;

    // Market Value Observed.
    marketValueObserved?: number;

    // Maturity Date.
    maturityDate?: Date;

    // Next Reset Rate.
    nextResetRate?: number;

    // Nominal Interest Rate.
    nominalInterestRate?: number;

    // Nominal Interest Rate 2.
    nominalInterestRate2?: number;

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

    // Rate Multiplier.
    rateMultiplier: number = 1.0;

    // Rate Spread.
    rateSpread?: number = 0.0;

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
