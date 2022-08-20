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
 *  Set of applicable terms: CSH -> Cash.
 *
 *  Cash or cash equivalent position
 *
 */
export class TermsetOfCash {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.CSH;

    // Creator Identifier.
    creatorID?: string;

    // Currency.
    currency?: string;

    // Notional Principal.
    notionalPrincipal?: number;

    // Status Date.
    statusDate?: Date;

}
