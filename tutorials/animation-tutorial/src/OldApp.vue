<template>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div :class="{ animate: animatedBlock }" class="block"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      name="para"
      @before-enter="beforeEnterFonksiyon"
      @before-leave="beforeLeaveFonksiyon"
      @enter="enterFonksiyon"
      @after-enter="afterEnterFonksiyon"
      @leave="leaveFonksiyon"
      @after-leave="afterLeaveFonksiyon"
      @enter-cancelled="enterCancelledFonksiyon"
      @leave-cancelled="leaveCancelledFonksiyon"
    >
      <p v-if="paraIsVisible">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        laboriosam porro, quas corrupti similique autem dolor. Odio consequatur
        nam magni.
      </p>
    </transition>
    <button @click="toggleParagraph">Toggle PAragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData';

export default {
  components: {
    ListData
  },
  data() {
    return {
      animatedBlock: false,
      paraIsVisible: false,
      dialogIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    beforeEnterFonksiyon(element) {
      console.log(element);
      console.log('beforeEnter Fonksiyonu');
      element.style.opacity = 0;
    },
    beforeLeaveFonksiyon(element) {
      console.log(element);
      console.log('beforeLeave Fonksiyonu');
      element.style.opacity = 1;
    },
    enterFonksiyon(element, done) {
      console.log(element);
      console.log('enter Fonksiyonu');
      let round = 1;
      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 200);
    },
    afterEnterFonksiyon(element) {
      console.log(element);
      console.log('afterEnter Fonksiyonu');
    },
    leaveFonksiyon(element, done) {
      console.log(element);
      console.log('leave Fonksiyonu');
      let round = 10;
      this.leaveInterval = setInterval(() => {
        element.style.opacity = round * 0.1;
        round--;
        if (round < 0) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 200);
    },
    afterLeaveFonksiyon(element) {
      console.log(element);
      console.log('afterLeave Fonksiyonu');
    },
    enterCancelledFonksiyon() {
      clearInterval(this.enterInterval);
    },
    leaveCancelledFonksiyon() {
      clearInterval(this.leaveInterval);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /*transform: translateX(100px);*/
  animation: slide-scale ease-in-out 0.3s forwards;
}

.v-enter-from {
  /*opacity: 0;
  transform: translateY(-30px);*/
}
.para-enter-active {
  /*transition: all 0.3s ease-in-out;
  animation: slide-scale 0.5s ease-in-out;*/
}
.v-enter-to {
  /*opacity: 1;
  transform: translateY(0);*/
}

.v-leave-from {
  /*opacity: 1;
  transform: translateY(0);*/
}
.para-leave-active {
  /*transition: all 0.3s ease-in-out;
  animation: slide-scale 0.5s ease-in-out;*/
}
.v-leave-to {
  /*opacity: 0;
  transform: translateY(30px);*/
}

@keyframes slide-scale {
  0% {
    transform: translateX(x) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
</style>
