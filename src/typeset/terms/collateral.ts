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
 *  Set of applicable terms: CEC -> Collateral.
 *
 *  Collateral creates a relationship between a collateral an obligee and a debtor, covering the exposure from the debtor with the collateral.
 *
 */
export class TermsetOfCollateral {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.CEC;

    // Business Day Convention.
    businessDayConvention: enums.BusinessDayConvention = enums.BusinessDayConvention.NOS;

    // Calendar.
    calendar: enums.Calendar = enums.Calendar.NC;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Structure.
    contractStructure?: typing.List[contracts.ContractReference];

    // Counterparty Identifier.
    counterpartyID?: string;

    // Coverage Of Credit Enhancement.
    coverageOfCreditEnhancement: number = 1.0;

    // Creator Identifier.
    creatorID?: string;

    // Credit Event Type Covered.
    creditEventTypeCovered: typing.List[enums.CreditEventTypeCovered] = enums.CreditEventTypeCovered.DF;

    // End Of Month Convention.
    endOfMonthConvention: enums.EndOfMonthConvention = enums.EndOfMonthConvention.SD;

    // Exercise Amount.
    exerciseAmount?: number;

    // Exercise Date.
    exerciseDate?: Date;

    // Guaranteed Exposure.
    guaranteedExposure?: enums.GuaranteedExposure;

    // Settlement Period.
    settlementPeriod: auxiliary.Period = null;

    // Status Date.
    statusDate?: Date;

}
