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
 *  Set of applicable terms: BNDWR -> Warrant.
 *
 *  Bonds with a warrant. If option is exercised, underlying bond continues to exist.
 *
 */
export class TermsetOfWarrant {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.BNDWR;

    // WARNING:: This contract type has not yet been formally defined.  This class is thus simply a placeholder.
    // raise NotImplementedError("WARNING: Standard does not yet support this contract type.")
}
