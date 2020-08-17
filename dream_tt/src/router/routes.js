import MainLayout from 'pages/MainLayout'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('pages/Product.vue'),
      },
    ],
  },
]

export default routes
