const monsterHuner = {
  data: () => {
    return {
      playerHeal: 100,
      monsterHeal: 100,
      isGameOn: false,
      logs: [],
      attackMultiple: 10,
      specialAttackMultiple: 30,
      healUpMultiple: 20,
      monsterAttackMultiple: 20,
    };
  },
  methods: {
    startGame: function () {
      this.isGameOn = true;
    },
    attack: function () {
      let point = Math.ceil(Math.random() * this.attackMultiple);
      this.monsterHeal -= point;
      this.monsterAtack();
      this.addToLog({
        turn: "P",
        text: `Player attack (${point})`,
      });
    },
    specialAttack: function () {
      let point = Math.ceil(Math.random() * this.specialAttackMultiple);
      this.monsterHeal -= point;
      this.monsterAtack();
      this.addToLog({
        turn: "P",
        text: `( SPECIAL ) Player attack (${point})`,
      });
    },
    healUp: function () {
      let point = Math.ceil(Math.random() * this.healUpMultiple);
      this.playerHeal += point;
      this.addToLog({
        turn: "P",
        text: `Player heal up (${point})`,
      });
    },
    giveUp: function () {
      this.playerHeal = 0;
      this.addToLog({
        turn: "P",
        text: `Player give up`,
      });
    },
    monsterAtack: function () {
      let point = Math.ceil(Math.random() * this.monsterAttackMultiple);
      this.playerHeal -= point;
      this.addToLog({
        turn: "M",
        text: `Monster attack (${point})`,
      });
    },
    addToLog: function (log) {
      this.logs.push(log);
    },
  },
  watch: {
    monsterHeal: function (value) {
      if (value < 0) {
        if (confirm("You win. Do you wanna play again?")) {
          this.playerHeal = 100;
          this.monsterHeal = 100;
          this.isGameOn = false;
          this.logs = [];
        }
      }
    },
    playerHeal: function (value) {
      if (value <= 0) {
        if (confirm("You lose. Do you wanna play again?")) {
          this.playerHeal = 100;
          this.monsterHeal = 100;
          this.isGameOn = false;
          this.logs = [];
        }
      } else if (value > 100) {
        this.playerHeal = 100;
      }
    },
  },
  computed: {
    playerProgress: function () {
      return {
        width: this.playerHeal + "%",
      };
    },
  },
};

const app = Vue.createApp(monsterHuner);
app.mount("#app");
