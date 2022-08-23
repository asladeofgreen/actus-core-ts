import * as enums from '../enums';

/**
 *  Reference between contracts in a hierarchy.
 */
export class ContractReference {
    // Contract Identifier :: Unique identifier of a contract.  If the system is used on a single firm level, an internal unique ID can be generated. If used on a national or globally level, a globally unique ID is required.
    contractID: string;    
}

/**
 *  Set of terms applicable to a financial contract.
 */
 export abstract class Termset {
    // Contract Identifier :: Unique identifier of a contract.  If the system is used on a single firm level, an internal unique ID can be generated. If used on a national or globally level, a globally unique ID is required.
    contractID: string;

    // Contract Performance :: the current contract performance status. Different states of the contract range from performing to default.
    contractPerformance: enums.ContractPerformance;

    // Contract Role :: defines which position the CRID ( the creator of the contract record ) takes in a contract. For example, whether the contract is an asset or liability, a long or short position for the CRID. Most contracts are simple on or off balance sheet positions which are assets, liabilities. Such contracts can also play a secondary role as a collateral. The attribute is highly significant since it determines the direction of all cash flows. The exact meaning is given with each CT in the ACTUS High Level Specification document.
    contractRole: enums.ContractRole;

    // Contract Type :: The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.
    contractType: enums.ContractType;

    // Instance constructor.
    constructor(
        contractID: string,
        contractType: enums.ContractType,
        contractRole: enums.ContractRole,
        contractPerformance: enums.ContractPerformance) {
        this.contractID = contractID;
        this.contractRole = contractRole;
        this.contractType = contractType;
        this.contractPerformance = contractPerformance;
    }
}

