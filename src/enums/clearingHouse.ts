/**
 *  N.B. Auto-generated using actus-mp
 */

/**
 *  MRCLH :: Clearing House.
 *
 *  Indicates wheter CRID takes a clearing house function or not. In other word, whether CRID receive margins (MRIM, MRVM).
 */
export enum ClearingHouse {
    // Is Clearing House: Contract creator is the clearing house.
    Y = 0,

    // Is Not Clearing House: Contract creator is not the clearing house.
    N = 1,
}
