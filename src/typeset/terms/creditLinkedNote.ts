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
 *  Set of applicable terms: CLNTE -> Credit Linked Note.
 *
 *  A credit linked note is a security with an embedded CDSWP
 *
 */
export class TermsetOfCreditLinkedNote {
    // Contract Identifier.
    contractID: string;

    // Contract Role.
    contractRole: ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: ContractType = ContractType.CLNTE;

    // WARNING:: This contract type has not yet been formally defined.  This class is thus simply a placeholder.
    // raise NotImplementedError("WARNING: Standard does not yet support this contract type.")
}
