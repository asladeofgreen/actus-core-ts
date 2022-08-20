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
 *  Set of applicable terms: CEG -> Guarantee.
 *
 *  Guarantee creates a relationship between a guarantor, an obligee and a debtor, moving the exposure from the debtor to the guarantor.
 *
 */
export class TermsetOfGuarantee {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.CEG;

    // Business Day Convention.
    businessDayConvention: enums.BusinessDayConvention = enums.BusinessDayConvention.NOS;

    // Calendar.
    calendar: enums.Calendar = enums.Calendar.NC;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Performance.
    contractPerformance: enums.ContractPerformance = enums.ContractPerformance.PF;

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

    // Currency.
    currency?: string;

    // Cycle Anchor Date Of Fee.
    cycleAnchorDateOfFee?: Date;

    // Cycle Of Fee.
    cycleOfFee?: auxiliary.Cycle;

    // Delinquency Period.
    delinquencyPeriod: auxiliary.Period = null;

    // Delinquency Rate.
    delinquencyRate?: number;

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
    gracePeriod: auxiliary.Period = null;

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
    settlementPeriod: auxiliary.Period = null;

    // Status Date.
    statusDate?: Date;

    // Termination Date.
    terminationDate?: Date;

}
