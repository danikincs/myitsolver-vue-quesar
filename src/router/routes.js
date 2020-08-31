
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/list',
    component: () => import('layouts/ArticleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/article.vue') }
    ]
  },
  {
    path: '/list/:id',
    component: () => import('layouts/DetailedArticle.vue'),
    children: [
      { path: '', component: () => import('pages/article.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
