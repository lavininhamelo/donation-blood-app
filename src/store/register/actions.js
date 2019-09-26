import { firebase, db, auth } from "../../config/firebase";
export const eraseAllData = context => {
  context.commit("setDistanceToDonation", null);
  context.commit("setWantGetNotification", null);
  context.commit("setKilograms", null);
  context.commit("setBloodType", null);
  context.commit("setName", null);
};

export const signUp = function(context, data) {
  return new Promise((resolve, reject) => {
    console.log(data);
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(created => {
        db.collection("Users")
          .doc(created.user.uid)
          .set({
            name: data.name,
            email: data.email,
            address: data.address,
            kilograms: data.kilograms,
            bloodType: data.bloodType,
            hasInfection: data.hasInfection,
            wantGetNotification: data.wantGetNotification,
            wantShareData: data.wantShareData
          });
      })
      .then(() => {
        resolve();
      })
      .catch(function(error) {
        reject(error);
      });
  });
};
