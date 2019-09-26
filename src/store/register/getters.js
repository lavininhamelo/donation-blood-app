export const getReasonReject = state => {
  //Rules to reject
  const MIN_KILOGRAMS = 50;
  const ALLOW_INFECTION = false;
  let allReasons = [];
  if (state.kilograms < MIN_KILOGRAMS) {
    allReasons.push("kilograms");
  }
  if (state.hasInfection == !ALLOW_INFECTION) {
    allReasons.push("hasInfection");
  }
  return allReasons;
};

export const name = state => {
  return state.name;
};
export const email = state => {
  return state.email;
};
export const password = state => {
  return state.password;
};
export const kilograms = state => {
  return state.kilograms;
};
export const bloodType = state => {
  return state.bloodType;
};
export const hasInfection = state => {
  return state.hasInfection;
};
export const wantGetNotification = state => {
  return state.wantGetNotification;
};
export const wantShareData = state => {
  return state.wantShareData;
};
export const distanceToDonation = state => {
  return state.distanceToDonation;
};
export const address = state => {
  return null;
};
