<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white header">
      <q-toolbar>
        <q-toolbar-title>
          <div class="header-container">
            <div class="row">
              <div class="col-lg-8 col-sm-12 col-xs-12 btn-group">
                <div class="row" style="text-align:center">
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <q-btn class="header-button" flat style="color: #E9E5DC" label="ARTICLE LISTA" />
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                    <q-btn class="header-button" flat style="color: #E9E5DC" label="Akciók" />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <q-btn class="header-button" flat style="color: #E9E5DC" label="Burkolási modulok" />
                  </div>
                   <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <q-btn class="header-button" flat style="color: #E9E5DC" label="Elérhetőség" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12 col-xs-12 search">
                <div class="cart">
                  <q-icon class="cart-icon" name="shopping_cart" />
                </div>
                 <q-input class="header-input" label="Keresés">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="main-container">
          <div class="img-container">
            <div class="row">
              <div class="col-lg-4 col-sm-4 col-xs-12 logo-container">
                <q-img
                  src="../assets/logo.png"
                  class="logo"
                />
              </div>
              <div class="col-lg-8 col-sm-8 col-xs-12 cover-container">
                 <q-img
                  src="../assets/coverphoto.png"
                  class="cover photo"
                />
              </div>
            </div>
          </div>
           <EditableArticle
             v-for="article in editableArticleData"
              :key="article.title"
              v-bind="article"
            />
            <div class="full-width-container">
              <div class="component-container">
                <div class="row">
                  <div class="col-lg-4 col-sm-12">
                    <p class="header">Termékek</p>
                    <p>Alábbi képekre kattintva, megtekinthetőek a termékek és a hozzátartozó árak.</p>
                  </div>
                </div>
                <div class="row">
                   <Products
                      v-for="product in productsData"
                      :key="product.title"
                      v-bind="product"
                    />
                </div>
              </div>
            </div>
            <EditableArticle
             v-for="article in editableArticleData"
              :key="article.title"
              v-bind="article"
            />
    </q-page-container>

    <q-footer class="bg-primary text-white footer" reveal>
      <q-toolbar>
        <q-toolbar-title>
          <div class="footer-container">
            <p class="footer-title">MyITSolver Kft</p>
            <p class="footer-details">Web-és Appfejlesztés.</p>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
// Imports here
import Products from 'components/Products.vue'
import EditableArticle from 'components/EditableArticle.vue'

const productsData = [
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  },
  {
    title: 'Csempék és padlólapok'
  }
]

const editableArticleData = [
  {
    title: 'Szerkeszthető cím',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque vel ipsum vitae iaculis. Quisque porta venenatis felis, ac consequat tortor porta a. Sed faucibus pharetra leo, et auctor massa iaculis ut. Praesent turpis risus, vulputate vitae nulla nec, rutrum viverra massa. Vivamus vitae vehicula nunc. Morbi risus magna, pulvinar quis dictum posuere, aliquam porttitor ipsum. Phasellus ac aliquam diam, rutrum feugiat massa. Pellentesque et diam ac ante bibendum gravida ultrices at magna. Duis tincidunt odio vitae odio finibus rutrum. Nam vitae arcu urna. In vel semper ante. Aliquam suscipit, nunc quis interdum laoreet, lectus justo sagittis tellus, sed lacinia dui ex sit amet neque.'
  }
]

export default {
  name: 'MainLayout',
  components: { Products, EditableArticle },
  data () {
    return {
      leftDrawerOpen: false,
      productsData: productsData,
      editableArticleData: editableArticleData,
      text: '',
      ph: '',
      dense: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      drawer: true
    }
  }
}
</script>
