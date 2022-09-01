/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: LAX -> Exotic Linear Amortizer.
 *
 *  Exotic version of LAM. However step ups with respect to (i) Principal, (ii) Interest rates are possible. Highly flexible to match totally irregular principal payments. Principal can also be paid out in steps.
 *
 */
export class ExoticLinearAmortizerTermset extends core.Termset {
    // Accrued Interest.
    accruedInterest?: number;

    // Array Cycle Anchor Date Of Interest Payment.
    arrayCycleAnchorDateOfInterestPayment?: Array<Date> = [];

    // Array Cycle Anchor Date Of Principal Redemption.
    arrayCycleAnchorDateOfPrincipalRedemption?: Array<Date> = [];

    // Array Cycle Anchor Date Of Rate Reset.
    arrayCycleAnchorDateOfRateReset?: Array<Date> = [];

    // Array Cycle Of Interest Payment.
    arrayCycleOfInterestPayment?: Array<core.Cycle>;

    // Array Cycle Of Principal Redemption.
    arrayCycleOfPrincipalRedemption?: Array<core.Cycle>;

    // Array Cycle Of Rate Reset.
    arrayCycleOfRateReset?: Array<core.Cycle>;

    // Array Fixed Variable.
    arrayFixedVariable?: Array<enums.ArrayFixedVariable> = [];

    // Array Increase Decrease.
    arrayIncreaseDecrease?: Array<enums.ArrayIncreaseDecrease> = [];

    // Array Next Principal Redemption Payment.
    arrayNextPrincipalRedemptionPayment?: Array<number> = [];

    // Array Rate.
    arrayRate?: Array<number> = [];

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

    // Currency.
    currency?: string;

    // Cycle Anchor Date Of Fee.
    cycleAnchorDateOfFee?: Date;

    // Cycle Anchor Date Of Interest Calculation Base.
    cycleAnchorDateOfInterestCalculationBase?: Date;

    // Cycle Anchor Date Of Optionality.
    cycleAnchorDateOfOptionality?: Date;

    // Cycle Anchor Date Of Scaling Index.
    cycleAnchorDateOfScalingIndex?: Date;

    // Cycle Of Fee.
    cycleOfFee?: core.Cycle;

    // Cycle Of Interest Calculation Base.
    cycleOfInterestCalculationBase?: core.Cycle;

    // Cycle Of Optionality.
    cycleOfOptionality?: core.Cycle;

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

    // Interest Calculation Base.
    interestCalculationBase: enums.InterestCalculationBase = enums.InterestCalculationBase.NT;

    // Interest Calculation Base Amount.
    interestCalculationBaseAmount?: number;

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
