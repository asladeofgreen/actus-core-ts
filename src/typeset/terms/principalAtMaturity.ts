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
 *  Set of applicable terms: PAM -> Principal at Maturity.
 *
 *  Principal payment fully at Initial Exchange Date (IED) and repaid at Maturity Date (MD). Fixed and variable rates.
 *
 */
export class TermsetOfPrincipalAtMaturity {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.PAM;

    // Accrued Interest.
    accruedInterest?: number;

    // Business Day Convention.
    businessDayConvention: enums.BusinessDayConvention = enums.BusinessDayConvention.NOS;

    // Calendar.
    calendar: enums.Calendar = enums.Calendar.NC;

    // Capitalization End Date.
    capitalizationEndDate?: Date;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Performance.
    contractPerformance: enums.ContractPerformance = enums.ContractPerformance.PF;

    // Counterparty Identifier.
    counterpartyID?: string;

    // Creator Identifier.
    creatorID?: string;

    // Credit Line Amount.
    creditLineAmount?: number;

    // Currency.
    currency?: string;

    // Cycle Anchor Date Of Fee.
    cycleAnchorDateOfFee?: Date;

    // Cycle Anchor Date Of Interest Payment.
    cycleAnchorDateOfInterestPayment?: Date;

    // Cycle Anchor Date Of Optionality.
    cycleAnchorDateOfOptionality?: Date;

    // Cycle Anchor Date Of Rate Reset.
    cycleAnchorDateOfRateReset?: Date;

    // Cycle Anchor Date Of Scaling Index.
    cycleAnchorDateOfScalingIndex?: Date;

    // Cycle Of Fee.
    cycleOfFee?: auxiliary.Cycle;

    // Cycle Of Interest Payment.
    cycleOfInterestPayment?: auxiliary.Cycle;

    // Cycle Of Optionality.
    cycleOfOptionality?: auxiliary.Cycle;

    // Cycle Of Rate Reset.
    cycleOfRateReset?: auxiliary.Cycle;

    // Cycle Of Scaling Index.
    cycleOfScalingIndex?: auxiliary.Cycle;

    // Cycle Point Of Interest Payment.
    cyclePointOfInterestPayment: enums.CyclePointOfInterestPayment = enums.CyclePointOfInterestPayment.E;

    // Cycle Point Of Rate Reset.
    cyclePointOfRateReset: enums.CyclePointOfRateReset = enums.CyclePointOfRateReset.B;

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

    // Fixing Period.
    fixingPeriod: auxiliary.Period = null;

    // Grace Period.
    gracePeriod: auxiliary.Period = null;

    // Initial Exchange Date.
    initialExchangeDate?: Date;

    // Interest Scaling Multiplier.
    interestScalingMultiplier: number = 1.0;

    // Life Cap.
    lifeCap?: number;

    // Life Floor.
    lifeFloor?: number;

    // Market Object Code.
    marketObjectCode?: string;

    // Market Object Code Of Rate Reset.
    marketObjectCodeOfRateReset?: string;

    // Market Object Code Of Scaling Index.
    marketObjectCodeOfScalingIndex?: string;

    // Market Value Observed.
    marketValueObserved?: number;

    // Maturity Date.
    maturityDate?: Date;

    // Next Reset Rate.
    nextResetRate?: number;

    // Nominal Interest Rate.
    nominalInterestRate?: number;

    // Non Performing Date.
    nonPerformingDate?: Date;

    // Notional Principal.
    notionalPrincipal?: number;

    // Notional Scaling Multiplier.
    notionalScalingMultiplier: number = 1.0;

    // Option Exercise End Date.
    optionExerciseEndDate?: Date;

    // Penalty Rate.
    penaltyRate?: number;

    // Penalty Type.
    penaltyType: enums.PenaltyType = enums.PenaltyType.N;

    // Period Cap.
    periodCap?: number;

    // Period Floor.
    periodFloor?: number;

    // Premium Discount At IED.
    premiumDiscountAtIED?: number;

    // Prepayment Effect.
    prepaymentEffect: enums.PrepaymentEffect = enums.PrepaymentEffect.N;

    // Prepayment Period.
    prepaymentPeriod: auxiliary.Period = null;

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

    // Scaling Effect.
    scalingEffect: enums.ScalingEffect = enums.ScalingEffect.OOO;

    // Scaling Index At Contract Deal Date.
    scalingIndexAtContractDealDate?: number;

    // Seniority.
    seniority?: enums.Seniority;

    // Settlement Currency.
    settlementCurrency?: string;

    // Status Date.
    statusDate?: Date;

    // Termination Date.
    terminationDate?: Date;

}
