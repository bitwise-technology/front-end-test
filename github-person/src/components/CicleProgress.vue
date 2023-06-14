<template>
    <div class="loader">
      <div class="loader-progress"></div>
    </div>
</template>
  
<style scoped>
  .loader {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color:transparent;
    position: relative;
    animation: spin 1s infinite linear;
    border: #42163A 1px solid;
    overflow: hidden;
  }

  .loader-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    border: 4px solid #fff;
    border-right-color: transparent;
    transform-origin: right center;
    animation: progress 2s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes progress {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
</style>