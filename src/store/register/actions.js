export const eraseAllData = context => {
  context.commit("setDistanceToDonation", null);
  context.commit("setWantGetNotification", null);
  context.commit("setKilograms", null);
  context.commit("setBloodType", null);
  context.commit("setName", null);
};
