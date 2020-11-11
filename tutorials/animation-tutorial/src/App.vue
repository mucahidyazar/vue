<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style>
.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}
.route-leave-active {
  animation: slide-scale 0.4s ease-in;
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
</style>
