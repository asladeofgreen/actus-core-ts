/**
 *  N.B. Auto-generated using actus-mp
 */

import { StateSpace } from '../states';
import {
    PayoffFunction,
    StateTransitionFunction,
} from '../funcs';

/**
 *  Enumeration over set of financial contract event types.
 */
export enum EventType {
    // Monitoring: Monitoring of contract. Evaluates all contract states
    AD = 0,

    // Initial Exchange: Scheduled date of initial exchange of e.g. principal value in fixed income products
    IED = 1,

    // Fee Payment: Scheduled fee payments
    FP = 2,

    // Principal Redemption: Scheduled principal redemption payment
    PR = 3,

    // Principal Drawing: Drawing of principal amount e.g. in a credit line
    PD = 4,

    // Principal Payment Amount Fixing: Scheduled fixing of principal payment amount
    PRF = 5,

    // Penalty Payment: Scheduled payment of a penalty
    PY = 6,

    // Principal Prepayment: Unscheduled early repayment of principal
    PP = 7,

    // Interest Payment: Scheduled interest payment
    IP = 8,

    // Interest Capitalization: Scheduled capitalization of accrued interest
    IPCI = 9,

    // Credit Event: Credit event of counterparty to a contract
    CE = 10,

    // Rate Reset Fixing with Known Rate: Scheduled fixing of variable rate with known new rate
    RRF = 11,

    // Rate Reset Fixing with Unknown Rate: Scheduled fixing of variable rate with unknown new rate
    RR = 12,

    // Dividend Payment: Payment of dividends
    DV = 13,

    // Purchase: Purchase of a contract
    PRD = 14,

    // Margin Call: Scheduled margin call
    MR = 15,

    // Termination: Termination of a contract
    TD = 16,

    // Scaling Index Fixing: Scheduled fixing of a scaling index
    SC = 17,

    // Interest Calculation Base Fixing: Scheduled fixing of the interest calculation base
    IPCB = 18,

    // Maturity: Maturity of a contract
    MD = 19,

    // Exercise: Exercise of a contractual feature such as an optionality
    XD = 20,

    // Settlement: Settlement of an exercised contractual claim
    STD = 21,
}

/**
 *  Represent a single event generated during the lifetime of a contract.  Such events
 *  represent the atomic analytical elements comprising all events that possibly
 *  occur during the lifetime of a contract.  That is, contract events mark specific
 *  times at which either a state transition, a payoff, or both is generated from a contract.
 *  
 *  Contract events are a generic representation of a specific state transition function and
 *  pay off function with an event time according to which all events in a contract are ordered
 *  (in an series) and processed sequentially.  Thereby, processing an event in fact means that 
 *  it's state transition and payoff functions are evaluated.
 */
class Event {
    // The Contract ID of the contract which created the event.
    contractID: string;

    // The currency in which the event payoff is scheduled.
    currency: string;

    // Time offset within context of an epoch.
    epochOffset: number;

    // The timestamp of the event.
    eventTime: Date;

    // The type of the event. Different types have their own business logic in terms of payoff and state transition functions.
    eventType: EventType;

    // The associated event state-transition function.
    stateTransitionFunction: StateTransitionFunction;

    // The associated event pay-off function.
    payoffFunction: PayoffFunction;

    // The event payoff (if any). Is zero if no payoff needs be settled for the event.
    payoff: number;

    // The scheduled timestamp for updating event payoff and post-event state.
    scheduleTime: Date;

    // The post-event state. Results from applying the event’s state transition function to the pre-event state. 
    state: StateSpace;
}
