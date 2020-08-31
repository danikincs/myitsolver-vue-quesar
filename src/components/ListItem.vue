<template>
    <q-item clickable v-ripple @click.native="getId">
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="imageUrl">
          </q-avatar>
        </q-item-section>
        <q-item-section>
            {{ title }}
        <q-item-section v-if="detailed !== 0 ? detailed === id : false"> {{ text }}</q-item-section>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    detailed: {
      type: Number,
      required: true
    },
    method: { type: Function }
  },
  methods: {
    getId: function () {
      this.method(this.id)
    }
  },
  data () {
    return { value: 'id' }
  }
}
</script>
