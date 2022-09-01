/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: CEC -> Collateral.
 *
 *  Collateral creates a relationship between a collateral an obligee and a debtor, covering the exposure from the debtor with the collateral.
 *
 */
export class CollateralTermset extends core.Termset {
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

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Exercise Amount.
    exerciseAmount?: number;

    // Exercise Date.
    exerciseDate?: Date;

    // Guaranteed Exposure.
    guaranteedExposure?: enums.GuaranteedExposure;

    // Settlement Period.
    settlementPeriod: core.Period;

    // Status Date.
    statusDate?: Date;

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        super(contractID, contractType, contractRole, contractPerformance);
    }
}
