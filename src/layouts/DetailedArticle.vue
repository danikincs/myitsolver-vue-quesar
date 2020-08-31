<template>
    <div>
        <div class="row detailed-article-row">
            <q-btn class="detailed-redirect-button" flat v-on:click="redirect" label="Back" />

            <div class="col-12">
                <q-card bordered class="bg-9 my-card">
                <q-card-section>
                    <div class="text-h6">{{ article.title }}</div>
                </q-card-section>

                <q-separator inset />
                <q-card-section>
                    <div class="col-12">
                        <q-img
                        :src="article.imageUrl"
                        />
                    </div>
                </q-card-section>
                <q-card-section>
                    {{ article.text }}
                </q-card-section>
            </q-card>
            </div>
        </div>
    </div>
</template>

<script>
// Imports here
// import Products from 'components/Products.vue'

export default {
  name: 'DetailedArticle',
  components: { },
  data () {
    return {
      article: {}
    }
  },
  methods: {
    redirect: function () {
      this.$router.push('/list')
    }
  },
  mounted () {
    this.$axios
      .get('/article/get/' + this.$route.params.id, {
        headers: {
          'X-AUTH-TOKEN': localStorage.token
        }
      })
      .then(response => (this.article = response.data))
      .catch(error => {
        if (error.response) {
          if (error.response.data.errorCode === 402) {
            localStorage.clear()
            this.$router.push('/list')
          }
        }
      })
  }
}
</script>
