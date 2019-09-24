//Rules to reject
const MIN_KILOGRAMS = 50;
const ALLOW_INFECTION = false;

export const getReasonReject = state => {
  let allReasons = [];
  if (state.kilograms < MIN_KILOGRAMS) {
    allReasons.push("kilograms");
  }
  if (state.hasInfection == !ALLOW_INFECTION) {
    allReasons.push("hasInfection");
  }
  return allReasons;
};
