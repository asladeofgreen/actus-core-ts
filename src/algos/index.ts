/**
 *  N.B. Auto-generated using actus-mp
 */

import { Event, Termset } from '../types/core';
import { ContractType } from '../types/enums';
import * as ann from './ann';
import * as anx from './anx';
import * as bndcp from './bndcp';
import * as bndwr from './bndwr';
import * as capfl from './capfl';
import * as cdswp from './cdswp';
import * as cec from './cec';
import * as ceg from './ceg';
import * as clm from './clm';
import * as clnte from './clnte';
import * as com from './com';
import * as csh from './csh';
import * as futur from './futur';
import * as fxout from './fxout';
import * as lam from './lam';
import * as lax from './lax';
import * as mar from './mar';
import * as nam from './nam';
import * as nax from './nax';
import * as optns from './optns';
import * as pam from './pam';
import * as pbn from './pbn';
import * as rep from './rep';
import * as scrcr from './scrcr';
import * as scrmr from './scrmr';
import * as stk from './stk';
import * as swaps from './swaps';
import * as swppv from './swppv';
import * as trswp from './trswp';
import * as ump from './ump';

// Map: contract type <-> function handle.
const _HANDLERS = new Map<ContractType, object>([
    [ContractType.ANN, ann],
    [ContractType.ANX, anx],
    [ContractType.BNDCP, bndcp],
    [ContractType.BNDWR, bndwr],
    [ContractType.CAPFL, capfl],
    [ContractType.CDSWP, cdswp],
    [ContractType.CEC, cec],
    [ContractType.CEG, ceg],
    [ContractType.CLM, clm],
    [ContractType.CLNTE, clnte],
    [ContractType.COM, com],
    [ContractType.CSH, csh],
    [ContractType.FUTUR, futur],
    [ContractType.FXOUT, fxout],
    [ContractType.LAM, lam],
    [ContractType.LAX, lax],
    [ContractType.MAR, mar],
    [ContractType.NAM, nam],
    [ContractType.NAX, nax],
    [ContractType.OPTNS, optns],
    [ContractType.PAM, pam],
    [ContractType.PBN, pbn],
    [ContractType.REP, rep],
    [ContractType.SCRCR, scrcr],
    [ContractType.SCRMR, scrmr],
    [ContractType.STK, stk],
    [ContractType.SWAPS, swaps],
    [ContractType.SWPPV, swppv],
    [ContractType.TRSWP, trswp],
    [ContractType.UMP, ump],
]);

/**
 *  Applies a set of contract events to the current financial contract state.
 *  
 *  @param contractType - type of financial contract being processed.
 *  @param events - list of contract events that should be applied in time sequence.
 *  @param terms - contract term set.
 *  @param observer - observer for external events & data.
 *  @returns - evaluated events and post-event contract states.
 *  
 */
export const executeStep = (
    contractType: ContractType,
    events: Array<Event>,
    terms: Termset,
    observer: object
    ): Array<Event> => {
    throw new Error("Not Implemented");
}

/**
 *  Evaluates next contract event sequence within a certain time period.
 *  
 *  The set of contract attributes are mapped to the stream of next contract events
 *  within a specified time period according to the legal logic of the respective
 *  Contract Type and contingent to the risk factor dynamics provided with the
 *  risk factor model.  The contract's status date is used as the reference time
 *  as from which the code period is evaluated.
 *  
 *  Note, the stream of the next non-contingent contract events matches the portion
 *  of the stream of the next contingent events up to the first contingent event.
 *  Furthermore, for a contract with purely non-contingent events
 *  (e.g. a PrincipalAtMaturity without a RateReset, Scaling, CreditDefault, etc.)
 *  contingent and non-contingent event streams are the same.
 *  
 *  @param contractType - type of financial contract being processed.
 *  @param toDate - time up to which the events are to be evaluated.
 *  @param terms - contract term set.
 *  @returns - An event sequence upto toDate.
 *  
 */
export const getSchedule = (contractType: ContractType, toDate: Date, terms: Termset): Array<Event> => {
    throw new Error("Not Implemented");
}
