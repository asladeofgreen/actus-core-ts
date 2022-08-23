import { EventType } from '../enums';
import { StateSpace } from './states';
import { PayoffFunction, StateTransitionFunction } from './funcs';

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
export class Event {
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
 