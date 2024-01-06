<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>

<style scss module>
.wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
