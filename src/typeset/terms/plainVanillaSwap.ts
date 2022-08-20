/**
 *  N.B. Auto-generated using actus-mp
 */

import {
    ContractRole,
    ContractType,
} from '../core/enums';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: SWPPV -> Plain Vanilla Swap.
 *
 *  Plain vanilla swaps where the underlyings are always two identical PAM´s however with one leg fixed and the other variable.
 *
 */
export class TermsetOfPlainVanillaSwap {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.SWPPV;

    // Business Day Convention.
    businessDayConvention: enums.BusinessDayConvention = enums.BusinessDayConvention.NOS;

    // Calendar.
    calendar: enums.Calendar = enums.Calendar.NC;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Performance.
    contractPerformance: enums.ContractPerformance = enums.ContractPerformance.PF;

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
    cycleOfInterestPayment?: auxiliary.Cycle;

    // Cycle Of Rate Reset.
    cycleOfRateReset?: auxiliary.Cycle;

    // Cycle Point Of Rate Reset.
    cyclePointOfRateReset: enums.CyclePointOfRateReset = enums.CyclePointOfRateReset.B;

    // Day Count Convention.
    dayCountConvention?: enums.DayCountConvention;

    // Delinquency Period.
    delinquencyPeriod: auxiliary.Period = null;

    // Delinquency Rate.
    delinquencyRate?: number;

    // Delivery Settlement.
    deliverySettlement: enums.DeliverySettlement = enums.DeliverySettlement.D;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Fixing Period.
    fixingPeriod: auxiliary.Period = null;

    // Grace Period.
    gracePeriod: auxiliary.Period = null;

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
    rateSpread?: number;

    // Seniority.
    seniority?: enums.Seniority;

    // Settlement Currency.
    settlementCurrency?: string;

    // Status Date.
    statusDate?: Date;

    // Termination Date.
    terminationDate?: Date;

}
