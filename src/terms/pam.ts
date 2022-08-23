/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: PAM -> Principal at Maturity.
 *
 *  Principal payment fully at Initial Exchange Date (IED) and repaid at Maturity Date (MD). Fixed and variable rates.
 *
 */
export class PrincipalAtMaturityTermset extends core.Termset {
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
    cycleOfFee?: core.Cycle;

    // Cycle Of Interest Payment.
    cycleOfInterestPayment?: core.Cycle;

    // Cycle Of Optionality.
    cycleOfOptionality?: core.Cycle;

    // Cycle Of Rate Reset.
    cycleOfRateReset?: core.Cycle;

    // Cycle Of Scaling Index.
    cycleOfScalingIndex?: core.Cycle;

    // Cycle Point Of Interest Payment.
    cyclePointOfInterestPayment: enums.CyclePointOfInterestPayment = enums.CyclePointOfInterestPayment.E;

    // Cycle Point Of Rate Reset.
    cyclePointOfRateReset: enums.CyclePointOfRateReset = enums.CyclePointOfRateReset.B;

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

    // Fixing Period.
    fixingPeriod: core.Period;

    // Grace Period.
    gracePeriod: core.Period;

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
    penaltyRate?: number = 0.0;

    // Penalty Type.
    penaltyType: enums.PenaltyType = enums.PenaltyType.N;

    // Period Cap.
    periodCap?: number;

    // Period Floor.
    periodFloor?: number;

    // Premium Discount At IED.
    premiumDiscountAtIED?: number = 0.0;

    // Prepayment Effect.
    prepaymentEffect: enums.PrepaymentEffect = enums.PrepaymentEffect.N;

    // Prepayment Period.
    prepaymentPeriod: core.Period;

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

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        super(contractID, contractType, contractRole, contractPerformance);
    }
}
