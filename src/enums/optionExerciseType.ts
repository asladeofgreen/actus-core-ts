/**
 *  N.B. Auto-generated using actus-mp
 */

/**
 *  OPXT :: Option Exercise Type.
 *
 *  Defines whether the option is European (exercised at a specific date), American (exercised during a span of time) or Bermudan (exercised at certain points during a span of time).
 */
export enum OptionExerciseType {
    // European: European-type exercise.
    E = 0,

    // Bermudan: Bermudan-type exercise.
    B = 1,

    // American: American-type exercise.
    A = 2,
}
