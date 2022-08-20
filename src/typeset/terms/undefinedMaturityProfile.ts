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
 *  Set of applicable terms: UMP -> Undefined Maturity Profile.
 *
 *  Principal paid in and out at any point in time without prefixed schedule. Interest calculated on outstanding and capitalized periodically. Needs link to a behavioral function describing expected flows.
 *
 */
export class TermsetOfUndefinedMaturityProfile {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.UMP;

    // Accrued Interest.
    accruedInterest?: number;

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

    // Cycle Anchor Date Of Fee.
    cycleAnchorDateOfFee?: Date;

    // Cycle Anchor Date Of Interest Payment.
    cycleAnchorDateOfInterestPayment?: Date;

    // Cycle Anchor Date Of Rate Reset.
    cycleAnchorDateOfRateReset?: Date;

    // Cycle Of Fee.
    cycleOfFee?: auxiliary.Cycle;

    // Cycle Of Interest Payment.
    cycleOfInterestPayment?: auxiliary.Cycle;

    // Cycle Of Rate Reset.
    cycleOfRateReset?: auxiliary.Cycle;

    // Day Count Convention.
    dayCountConvention?: enums.DayCountConvention;

    // Delinquency Period.
    delinquencyPeriod: auxiliary.Period = null;

    // Delinquency Rate.
    delinquencyRate?: number;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Fee Accrued.
    feeAccrued?: number;

    // Fee Basis.
    feeBasis?: enums.FeeBasis;

    // Fee Rate.
    feeRate?: number;

    // Grace Period.
    gracePeriod: auxiliary.Period = null;

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
    prepaymentPeriod: auxiliary.Period = null;

    // Price At Termination Date.
    priceAtTerminationDate?: number;

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

    // X Day Notice.
    xDayNotice?: auxiliary.Period;

}
