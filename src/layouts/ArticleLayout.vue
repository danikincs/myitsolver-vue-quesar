<template>
    <div class="row">
      <div class="col">
        <q-btn class="detailed-redirect-button" flat v-on:click="backward" label="<" />
        <span style="padding:10px">{{ pageNum }}</span>
        <q-btn class="detailed-redirect-button" flat v-on:click="forward" label=">" />
        <q-list bordered separator>
            <ListItem
             v-for="article in articleList"
              :key="article.id"
              v-bind="article"
             :method="showDetails"
             :detailed="detailed"
            />
        </q-list>
      </div>
      <q-dialog v-model="auth">
            <q-card>
                <q-card-section>
                <div class="text-h6">Nincs jogosultság</div>
                </q-card-section>
                <q-card-actions align="right">
                <q-btn v-if="missingToken" flat label="Jogosultság igénylése" color="primary" v-close-popup v-on:click="getToken"/>
                <q-btn v-if="expiredToken" flat label="Jogosultság frissitése" color="primary" v-close-popup v-on:click="getToken"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
// Imports here
// import Products from 'components/Products.vue'
import ListItem from 'components/ListItem.vue'

export default {
  name: 'ArticleLayout',
  components: { ListItem },
  data () {
    return {
      articleList: [],
      pageNum: 1,
      pageSize: 10,
      missingToken: false,
      expiredToken: false,
      auth: false,
      createArticlePrompt: false,
      title: '',
      text: '',
      detailed: 0
    }
  },
  methods: {
    forward: function (event) {
      this.pageNum++
    },
    backward: function (event) {
      if (this.pageNum > 1) {
        this.pageNum--
      }
    },
    newArticle: function () {
      this.createArticlePrompt = !this.createArticlePrompt
    },
    showDetails: function (id) {
      if (localStorage.token) {
        this.$router.push('/list/' + id)
      } else {
        this.$axios
          .get('/article/get/' + id, {
            headers: {
              'X-AUTH-TOKEN': localStorage.token
            }
          })
          .then(response => (this.$router.push('/list/' + id)))
          .catch(error => {
            if (error.response) {
              if (error.response.data.errorCode === 401) {
                this.auth = true
                this.missingToken = true
              }
              if (error.response.data.errorCode === 402) {
                this.auth = true
                this.expiredToken = true
              }
            }
          })
      }
    },
    getToken: function () {
      this.$axios
        .get('/token/createToken', { params: { page: this.pageNum, pageSize: this.pageSize } })
        .then(response => (localStorage.token = response.data.token))
    },
    renewToken: function () {
      this.$axios
        .post('/token/renewToken', {
          headers: {
            'X-AUTH-TOKEN': localStorage.token
          }
        })
        .then(response => (localStorage.token = response.data.token))
    }
  },
  mounted () {
    this.$axios
      .get('/article/list', { params: { page: this.pageNum, pageSize: this.pageSize } })
      .then(response => (this.articleList = response.data.list))
  },
  watch: {
    pageNum: function (val) {
      this.$axios
        .get('/article/list', { params: { page: this.pageNum, pageSize: this.pageSize } })
        .then(response => (this.articleList = response.data.list))
    }
  }
}
</script>
