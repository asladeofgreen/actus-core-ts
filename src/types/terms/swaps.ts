/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: SWAPS -> Swap.
 *
 *  Exchange of two basic CT´s (PAM, ANN etc.). Normally one is fixed, the other variable. However all variants possible including different currencies for cross currency swaps, basic swaps or even different principal exchange programs.
 *
 */
export class SwapTermset extends core.Termset {
    // Contract Deal Date.
    contractDealDate?: Date;

    // Contract Structure.
    contractStructure?: Array<core.ContractReference> = [];

    // Counterparty Identifier.
    counterpartyID?: string;

    // Creator Identifier.
    creatorID?: string;

    // Currency.
    currency?: string;

    // Delinquency Period.
    delinquencyPeriod: core.Period;

    // Delinquency Rate.
    delinquencyRate?: number = 0.0;

    // Delivery Settlement.
    deliverySettlement: enums.DeliverySettlement = enums.DeliverySettlement.D;

    // Grace Period.
    gracePeriod: core.Period;

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

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        super(contractID, contractType, contractRole, contractPerformance);
    }
}
