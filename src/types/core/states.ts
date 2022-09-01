/**
 *  N.B. Auto-generated using actus-mp
 */

import * as enums from '../enums';

/**
 *
 *  A data structure representing various states of a contract.  The states of a 
 *  contract contain important information used when evaluating payoff. Furthermore, 
 *  states themselves contain atomic analytical elements such as the nominal value 
 *  or accrued interest for a lending instrument. On the other hand, states are 
 *  updated throughout an instrument's lifetime through evaluation of state 
 *  transition function in the various contract events.
 *
 */
export class StateSpace {
    // IPAC :: Accrued Interest :: The current value of accrued interest.
    accruedInterest: number;

    // IPAC2 :: Accrued Interest 2 :: The current value of accrued interest of the second leg.
    accruedInterest2: number;

    // PRF :: Contract Performance :: Indicates the current Contract Performance status. Different states of the contract range from performing to default..
    contractPerformance: enums.ContractPerformance;

    // XA :: Exercise Amount :: The amount fixed for a the contingent event/obligation exercised at Exercise Date.
    exerciseAmount: number;

    // XD :: Exercise Date :: The timestamp at which a contingent event/obligation is exercised.
    exerciseDate: Date;

    // FEAC :: Fee Accrued :: The current value of accrued fees.
    feeAccrued: number;

    // ICBA :: Interest Calculation Base Amount :: The basis at which interest is being accrued. Potentially different from NVL..
    interestCalculationBaseAmount: number;

    // SCIP :: Interest Scaling Multiplier :: The multiplier being applied to interest cash flows.
    interestScalingMultiplier: number;

    // MD :: Maturity Date :: The timestamp as per which the contract matures according to the initial terms or as per unscheduled events.
    maturityDate: Date;

    // PRNXT :: Next Principal Redemption Payment :: The value at which principal is being repaid. This may be including or excluding of interest depending on the Contract Type.
    nextPrincipalRedemptionPayment: number;

    // IPNR :: Nominal Interest Rate :: The applicable nominal rate.
    nominalInterestRate: number;

    // IPNR2 :: Nominal Interest Rate 2 :: The applicable nominal rate.
    nominalInterestRate2: number;

    // NPD :: Non Performing Date :: The date of the (uncovered) payment event responsible for the current value of the Contract Performance state variable..
    nonPerformingDate: Date;

    // NT :: Notional Principal :: The outstanding nominal value.
    notionalPrincipal: number;

    // NT2 :: Notional Principal 2 :: The outstanding nominal value of the second leg.
    notionalPrincipal2: number;

    // SCNT :: Notional Scaling Multiplier :: The multiplier being applied to principal cash flows.
    notionalScalingMultiplier: number;

    // SD :: Status Date :: The timestamp as per which the state is captured at any point in time.
    statusDate: Date;

    // TD :: Termination Date :: The timestamp of unscheduled termination of a contract.
    terminationDate: Date;
}
