//Rules to reject
export const getReasonReject = state => {
  let allReasons = [];
  if (state.kilograms < 50) {
    allReasons.push("kilograms");
  }
  if (state.hasInfection) {
    allReasons.push("hasInfection");
  }
  return allReasons;
};
