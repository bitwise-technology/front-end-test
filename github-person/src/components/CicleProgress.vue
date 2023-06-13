<template>
    <div class="circle-progress">
      <div class="progress-circle" :style="{ transform: progressRotation }"></div>
    </div>
</template>
  
<script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100
      }
    },
    computed: {
      progressRotation() {
        const rotation = (this.progress / 100) * 360;
        return `rotate(${rotation}deg)`;
      }
    }
  };
</script>
  
<style scoped>
  .circle-progress {
    width: 24px;
    height: 24px;
    background-color: transparent;
  }
  
  .progress-circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white; /* Aqui você pode definir a cor do círculo de progresso */
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }
</style>