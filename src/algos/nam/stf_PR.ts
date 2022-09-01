/**
 *  N.B. Auto-generated using actus-mp
 */

import { StateSpace } from '../../types/core';
import { NegativeAmortizerTermset as Termset } from '../../types/terms';

/*
 *  Executes a NAM contract PR state transition function.
 *  
 *  @param time - schedule time of this particular event.
 *  @param states - current set of contract states.
 *  @param terms - set of contract terms.
 *  @param riskFactorModel - external market model.
 *  @param dayCounter - day count convention used to calculate day count fractions.
 *  @param timeAdjuster - business day convention used to shift the schedule time.
 *  @returns - an array of post-event states of numerical contract states.
 */
export const execute = (
    time: Date,
    states: StateSpace,
    terms: Termset,
    riskFactorModel: object,
    dayCounter: object,
    timeAdjuster: object
) => {
    throw new Error("TODO: implement");
};
