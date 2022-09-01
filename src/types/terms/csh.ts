/**
 *  N.B. Auto-generated using actus-mp
 */

import * as core from '../core';
import * as enums from '../enums';

/**
 *
 *  Set of applicable terms: CSH -> Cash.
 *
 *  Cash or cash equivalent position
 *
 */
export class CashTermset extends core.Termset {
    // Creator Identifier.
    creatorID?: string;

    // Currency.
    currency?: string;

    // Notional Principal.
    notionalPrincipal?: number;

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
