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
 *  Set of applicable terms: CAPFL -> Cap Floors.
 *
 *  Interest rate option expressed in a maximum or minimum interest rate.
 *
 */
export class TermsetOfCapFloor {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.CAPFL;

    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Performance.
    contractPerformance: enums.ContractPerformance = enums.ContractPerformance.PF;

    // Contract Structure.
    contractStructure?: typing.List[contracts.ContractReference];

    // Counterparty Identifier.
    counterpartyID?: string;

    // Creator Identifier.
    creatorID?: string;

    // Currency.
    currency?: string;

    // Delinquency Period.
    delinquencyPeriod: auxiliary.Period = null;

    // Delinquency Rate.
    delinquencyRate?: number;

    // Grace Period.
    gracePeriod: auxiliary.Period = null;

    // Life Cap.
    lifeCap?: number;

    // Life Floor.
    lifeFloor?: number;

    // Market Object Code.
    marketObjectCode?: string;

    // Market Value Observed.
    marketValueObserved?: number;

    // Non Performing Date.
    nonPerformingDate?: Date;

    // Price At Purchase Date.
    priceAtPurchaseDate?: number;

    // Price At Termination Date.
    priceAtTerminationDate?: number;

    // Purchase Date.
    purchaseDate?: Date;

    // Seniority.
    seniority?: enums.Seniority;

    // Settlement Currency.
    settlementCurrency?: string;

    // Status Date.
    statusDate?: Date;

    // Termination Date.
    terminationDate?: Date;

}
