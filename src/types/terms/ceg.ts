/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: CEG -> Guarantee.
 *
 *  Guarantee creates a relationship between a guarantor, an obligee and a debtor, moving the exposure from the debtor to the guarantor.
 *
 */
export class GuaranteeTermset extends core.Termset {
    // Business Day Convention.
    businessDayConvention: enums.BusinessDayConvention = enums.BusinessDayConvention.NOS;

    // Calendar.
    calendar: enums.Calendar = enums.Calendar.NC;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Structure.
    contractStructure?: Array<core.ContractReference> = [];

    // Counterparty Identifier.
    counterpartyID?: string;

    // Coverage Of Credit Enhancement.
    coverageOfCreditEnhancement: number = 1.0;

    // Creator Identifier.
    creatorID?: string;

    // Credit Event Type Covered.
    creditEventTypeCovered: Array<enums.CreditEventTypeCovered> = [];

    // Currency.
    currency?: string;

    // Cycle Anchor Date Of Fee.
    cycleAnchorDateOfFee?: Date;

    // Cycle Of Fee.
    cycleOfFee?: core.Cycle;

    // Delinquency Period.
    delinquencyPeriod: core.Period;

    // Delinquency Rate.
    delinquencyRate?: number = 0.0;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Exercise Amount.
    exerciseAmount?: number;

    // Exercise Date.
    exerciseDate?: Date;

    // Fee Accrued.
    feeAccrued?: number;

    // Fee Basis.
    feeBasis?: enums.FeeBasis;

    // Fee Rate.
    feeRate?: number;

    // Grace Period.
    gracePeriod: core.Period;

    // Guaranteed Exposure.
    guaranteedExposure?: enums.GuaranteedExposure;

    // Maturity Date.
    maturityDate?: Date;

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
