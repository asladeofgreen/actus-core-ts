/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: UMP -> Undefined Maturity Profile.
 *
 *  Principal paid in and out at any point in time without prefixed schedule. Interest calculated on outstanding and capitalized periodically. Needs link to a behavioral function describing expected flows.
 *
 */
export class UndefinedMaturityProfileTermset extends core.Termset {
    // Accrued Interest.
    accruedInterest?: number;

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

    // Cycle Anchor Date Of Fee.
    cycleAnchorDateOfFee?: Date;

    // Cycle Anchor Date Of Interest Payment.
    cycleAnchorDateOfInterestPayment?: Date;

    // Cycle Anchor Date Of Rate Reset.
    cycleAnchorDateOfRateReset?: Date;

    // Cycle Of Fee.
    cycleOfFee?: core.Cycle;

    // Cycle Of Interest Payment.
    cycleOfInterestPayment?: core.Cycle;

    // Cycle Of Rate Reset.
    cycleOfRateReset?: core.Cycle;

    // Day Count Convention.
    dayCountConvention?: enums.DayCountConvention;

    // Delinquency Period.
    delinquencyPeriod: core.Period;

    // Delinquency Rate.
    delinquencyRate?: number = 0.0;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Fee Accrued.
    feeAccrued?: number;

    // Fee Basis.
    feeBasis?: enums.FeeBasis;

    // Fee Rate.
    feeRate?: number;

    // Grace Period.
    gracePeriod: core.Period;

    // Initial Exchange Date.
    initialExchangeDate?: Date;

    // Market Object Code Of Rate Reset.
    marketObjectCodeOfRateReset?: string;

    // Maximum Penalty Free Disbursement.
    maximumPenaltyFreeDisbursement?: number;

    // Nominal Interest Rate.
    nominalInterestRate?: number;

    // Non Performing Date.
    nonPerformingDate?: Date;

    // Notional Principal.
    notionalPrincipal?: number;

    // Prepayment Period.
    prepaymentPeriod: core.Period;

    // Price At Termination Date.
    priceAtTerminationDate?: number;

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

    // X Day Notice.
    xDayNotice?: core.Period;

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        super(contractID, contractType, contractRole, contractPerformance);
    }
}
