<template>
  <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="info-container">
      <q-img
        src="../assets/rectangle5.png"
        class="rectangle5"
      />
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
