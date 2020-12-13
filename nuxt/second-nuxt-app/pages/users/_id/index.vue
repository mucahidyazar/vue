<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  validate(data) {
    console.log(data);
    //data.params.id "1" ise sayfa acilacakdir
    //!return data.params.id === "1";
    //data.params.id sayi numara ise sayfa acilacakdir
    return /^d+$/.test(data.params.id);
  }
};
</script>
