<template>
  <div class="container" v-bind:style="{height: this.$q.screen.height+'px'}">
    <div id="information_header" style="opacity:1">
      <div class="header" v-bind:style="{height: this.$q.screen.height*0.6+'px'}">
        <div class="img">
          <img :src="imageProfile" class="profile-img" />
        </div>
        <div class="name">{{first_name}} {{last_name}}</div>
        <div class="user-data">
          <div class="info">
            <div class="bottom">
              <div class="text-red q-gutter-md" style="font-size: 1.2em">
                <q-icon name="fas fa-tint" />
              </div>
            </div>
            <div class="subdata">
              <div class="points">3</div>
              <div class="title">Doações</div>
            </div>
          </div>
          <div class="info middle">
            <div class="bottom">
              <div class="text-red q-gutter-md" style="font-size: 1.2em">
                <q-icon name="far fa-heart" />
              </div>
            </div>
            <div class="subdata">
              <div class="points">5</div>
              <div class="title">Vidas salvas</div>
            </div>
          </div>
          <div class="info">
            <div class="bottom">
              <div class="text-red q-gutter-md" style="font-size: 1.2em">
                <q-icon name="fas fa-award" />
              </div>
            </div>
            <div class="subdata">
              <div class="points">7</div>
              <div class="title">Conquistas</div>
            </div>
          </div>
        </div>
      </div>
      <div class="badges" v-bind:style="{height: this.$q.screen.height*0.4+'px'}">
        <div class="title">Conquistas</div>
        <div class="bcards">
          <div class="bcard"></div>
          <div class="bcard"></div>
          <div class="bcard"></div>
          <div class="bcard"></div>
          <div class="bcard"></div>
          <div class="bcard"></div>
          <div class="bcard"></div>
          <div class="bcard"></div>
        </div>
      </div>
    </div>
    <div
      class="content panel"
      :style="{ top: currentPosition+'px'}"
      v-touch-pan.vertical.prevent.mouse="handlePan"
      ref="contentPanel"
    >
      <div class="menu">
        <div class="tab-name">doe sangue</div>
        <div class="tab-name">minhas doações</div>
        <div class="tab-name">locais</div>
      </div>
      <div class="card text-center" v-bind:style="{height: this.$q.screen.height+'px'}">
        <span>Ola</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore harum quibusdam quidem error! Modi deleniti vel eum quo magnam, animi, voluptates sed voluptatibus sint in ratione aspernatur velit esse.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore harum quibusdam quidem error! Modi deleniti vel eum quo magnam, animi, voluptates sed voluptatibus sint in ratione aspernatur velit esse.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore harum quibusdam quidem error! Modi deleniti vel eum quo magnam, animi, voluptates sed voluptatibus sint in ratione aspernatur velit esse.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore harum quibusdam quidem error! Modi deleniti vel eum quo magnam, animi, voluptates sed voluptatibus sint in ratione aspernatur velit esse.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore harum quibusdam quidem error! Modi deleniti vel eum quo magnam, animi, voluptates sed voluptatibus sint in ratione aspernatur velit esse.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore harum quibusdam quidem error! Modi deleniti vel eum quo magnam, animi, voluptates sed voluptatibus sint in ratione aspernatur velit esse.</p>

      </div>
    </div>
  </div>
</template>

<script>
import { firebase, db, auth } from "../../config/firebase";
import Router from "vue-router";

export default {
  name: "Profile",
  data() {
    return {
      info: null,
      panning: false,
      currentSide: "down",
      currentPosition: this.$q.screen.height * 0.85,
      email: auth.currentUser.email,
      first_name: null,
      last_name: null,
      blood_type: null,
      years: null,
      bio: null,
      imageProfile: auth.currentUser.photoURL,
      displayName: null
    };
  },
  methods: {
    movePanel(toUp) {
      const marginBottom = 0.85;
      const limit = this.$q.screen.height * marginBottom;
      const elem = this.$refs.contentPanel;
      const velocity = 10.5;
      if (toUp) {
        let id = setInterval(() => {
          if (this.currentPosition <= 0) {
            this.currentPosition = 0;
            clearInterval(id);
          } else {
            this.currentPosition -= velocity;
          }
        }, 1);
      } else {
        let id = setInterval(() => {
          if (this.currentPosition >= limit) {
            this.currentPosition = limit;
            clearInterval(id);
          } else {
            this.currentPosition += velocity;
          }
        }, 1);
      }
    },
    handlePan({ evt, ...info }) {
      const marginBottom = 0.85;
      const limit = this.$q.screen.height * marginBottom;
      this.info = info;

      // native Javascript event
      // console.log(evt)

      if (evt.type == "touchmove") {
        this.currentPosition = info.position.top;
        if (this.currentPosition <= 0) {
          this.currentPosition = 0;
        } else if (this.currentPosition >= limit) {
          this.currentPosition = limit;
        }

        // if (this.panning === false) {
        //   console.log("Cabo");

        //   }
        // }
      } else if (evt.type == "touchend") {
        if (info.offset.y > 0) {
          this.movePanel(false);
          this.currentSide = "down";
        } else {
          this.movePanel(true);
          this.currentSide = "up";
        }
      }

      if (info.isFirst) {
        this.panning = true;
      } else if (info.isFinal) {
        this.panning = false;
      }
    },
    logout() {
      const r = this;
      auth
        .signOut()
        .then(() => r.$router.push("/"))
        .catch(function(error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        });
    },
    userData() {
      const user = auth.currentUser;
      if (user) {
        db.collection("Users")
          .doc(user.uid)
          .get()
          .then(doc => {
            this.email = user.email;
            this.first_name = doc.data().first_name;
            this.last_name = doc.data().last_name;
            this.displayName = user.displayName;
            this.blood_type = doc.data().blood_type;
            this.years = doc.data().years;
            this.bio = doc.data().bio;
            console.log(user);
          })
          .catch(function(error) {
            const e = `${error.code} - ${error.message}`;
            console.log(e);
          });
      } else {
        this.$router.push("/");
      }
    }
  },
  mounted() {
    this.userData();
  }
};
</script>
<style lang="stylus" scoped>


.panel {
  width: 600px;
  height: 600px;
  position: absolute;
}

.container {
  background: #EA5A44;
  background: #E3391F;
  width: 0 auto;
  position: fixed;
  width: 100%;
}

.container .header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #EA5A44;
  -webkit-clip-path: ellipse(110% 50% at 50% 40%);
  clip-path: ellipse(110% 50% at 50% 40%);
}

.header .profile-img {
  background: #EA5A44;
  width: 100px;
  height: 100px;
  border: 3.5px solid #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
}

.header .name {
  margin-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header .user-data {
  display: flex;
  justify-content: space-around;
  width: 90%;
}

.header .user-data .info {
  display: flex;
  flex-direction: column;
}

.header .user-data .info .bottom {
  margin-top: 10px;
  width: 45px;
  height: 45px;
  background: #FFFFFF;
  border: 2px solid #EA5A44;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(170, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .user-data .middle {
  margin-top: 20px;
}

.header .user-data .info .subdata {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -15px;
}

.header .user-data .info .subdata .title {
  margin-left: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 7px;
  text-transform: uppercase;
  line-height: 8px;
  text-align: center;
  max-width: 20px;
  margin-top: 5px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header .user-data .info .subdata .points {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
  margin-top: 5px;
}

.badges {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E3391F;
}

.badges .title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
}

.badges .bcards {
  margin-top: 25px;
  display: flex;
  width: 85%;
  justify-content: flex-start;
  overflow: auto;
}

::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255,0,0,0.8);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

.badges .bcards .bcard {
  min-width: 60px;
  width: 60px;
  height: 60px !important;
  margin: 5px;
  background: rgba(191, 40, 17, 0.83);
  border-radius: 12px;
}

.content {
  position: absolute;
  width: 100%;
  top: 80%;
  z-index: 10;
}

.content .menu {
  margin: 20px 0px 20px 0px;
  width: 100%;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  justify-content: space-around;
  text-transform: uppercase;
  width: 0 auto;
  color: #FFFFFF;
}

.content .card {
  background: #fff;
  width: 100%;
  border-radius: 5% 5% 0% 0%;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}
</style>
