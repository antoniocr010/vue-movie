<template>
  <div id="spinner"></div>
</template>

<script>
export default {};
</script>

<style scoped>
#spinner {
  border: 8px solid #363636;
  border-left-color: #42b883;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
