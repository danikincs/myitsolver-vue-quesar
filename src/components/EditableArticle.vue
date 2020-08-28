<template>
    <div class="row">
        <div class="row">
            <p class="main-header">{{ title }}</p>
        </div>
        <div class="article-container">
            <div class="row">
                <div class="col-lg-8 col-sm-12 col-xs-12">
                    <p>{{ body }}</p>
                </div>
                <div class="col-lg-4 col-sm-12 col-xs-12">
                    <q-img
                    src="../assets/rectangle3.png"
                />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EditableArtice',
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>
