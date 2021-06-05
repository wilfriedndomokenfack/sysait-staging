import RouterContainer from '@/components/utils/RouterContainer.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          requireAuth: false,
          breadcrumb: 'Home page'
        },
        component: () => import('pages/Index.vue')
      },
      {
        path: 'about',
        name: 'about',
        meta: {

          breadcrumb: 'About us'
        },
        component: () => import('pages/About.vue')
      },
      {
        path: 'services/',
        meta: { breadcrumb: 'Our services' },
        component: RouterContainer,
        children: [
          {
            path: "",
            name: 'services',
            component: () => import('pages/services/Services.vue'),
          },
          {
            path: "service",
            name: 'service',
            meta: { breadcrumb: 'service' },
            component: () => import('pages/services/Service.vue'),
          },
          {
            path: "service/new",
            name: 'newService',
            meta: { breadcrumb: 'create a new service' },
            component: () => import('pages/services/NewService.vue'),
          },
          {
            path: "service/edit",
            name: 'editService',
            meta: { breadcrumb: 'Edit a service' },
            component: () => import('pages/services/EditService.vue'),
          }

        ]
      },
      {
        path: 'products/',
        component: RouterContainer,
        children: [
          {
            path: "",
            name: 'products',
            meta: { breadcrumb: 'Our products' },
            component: () => import('pages/products/Products.vue'),
          },
          {
            path: "product/:product_id",
            name: 'product',
            meta: { breadcrumb: 'product' },
            component: () => import('pages/products/Product.vue'),
          },
          {
            path: "new",
            name: 'newProduct',
            meta: { breadcrumb: 'Create a new product' },
            component: () => import('pages/products/NewProduct.vue'),
          },
          {
            path: "product/edit",
            name: 'editProduct',
            meta: { breadcrumb: 'Edit a product' },
            component: () => import('pages/products/EditProduct.vue'),
          }

        ]
      },
      {
        path: 'training/',
        component: RouterContainer,
        children: [
          {
            path: "",
            name: 'training',
            meta: { breadcrumb: 'Our courses' },
            component: () => import('pages/training/Training.vue'),
          },
          {
            path: "new",
            name: 'newTraining',
            meta: { breadcrumb: 'Create a new Training' },
            component: () => import('pages/training/NewTraining.vue'),
          },
          {
            path: ":training_id/edit",
            name: 'editTraining',
            meta: { breadcrumb: 'Edit a Training' },
            component: () => import('pages/training/EditTraining.vue'),
          }

        ]
      },
      {
        path: 'jobs/',
        component: RouterContainer,
        children: [
          {
            path: "",
            name: 'jobs',
            meta: { breadcrumb: 'Our open positions' },
            component: () => import('pages/jobs/Jobs.vue'),
          },
          {
            path: "job/:job_id",
            name: 'job',
            meta: { breadcrumb: 'job' },
            component: () => import('pages/jobs/Job.vue'),
          },
          {
            path: "new",
            name: 'newJob',
            meta: { breadcrumb: 'Create a new job' },
            component: () => import('pages/jobs/NewJob.vue'),
          },
          {
            path: ":job_id/edit",
            name: 'editJob',
            meta: { breadcrumb: 'Edit a job' },
            component: () => import('pages/jobs/EditJob.vue'),
          }

        ]
      },
      {
        path: 'customers/',
        component: RouterContainer,
        children: [
          {
            path: "",
            name: 'customers',
            meta: { breadcrumb: 'Our customers' },
            component: () => import('pages/customers/Customers.vue'),
          },
          {
            path: "customer",
            name: 'customer',
            meta: { breadcrumb: 'product' },
            component: () => import('pages/customers/Customer.vue'),
          },
          {
            path: "new",
            name: 'newCustomer',
            meta: { breadcrumb: 'Create a new customer' },
            component: () => import('pages/customers/NewCustomer.vue'),
          },
          {
            path: "customer/edit",
            name: 'editCustomer',
            meta: { breadcrumb: 'Edit a customer' },
            component: () => import('pages/customers/EditCustomer.vue'),
          }

        ]
      },
      {
        path: "contact",
        name: 'contact',
        meta: { breadcrumb: 'Contact us page' },
        component: () => import('pages/contacts/Contact.vue'),
      },
      {
        path: "signin",
        name: 'signin',
        meta: { breadcrumb: 'Sign in' },
        component: () => import('pages/SignIn.vue'),
      },
      {
        path: "signup",
        name: 'signup',
        meta: { breadcrumb: 'Sign up' },
        component: () => import('pages/SignUp.vue'),
      },
      {
        path: "admin",
        name: 'admin',
        meta: { breadcrumb: 'AdminPanel' },
        component: () => import('pages/AdminPanel.vue'),
      },
      {
        path: "/api/v1/users/:tokenDatas",
        name: 'confirmation',
        component: () => import('pages/user/EmailConfirmationPage.vue'),
      },
      {
        path: "/api/v1/users/password/:tokenDatas",
        name: 'resetPassword',
        component: () => import('pages/user/PasswordResetPage.vue'),
      }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/notAvailable',
    name: 'notAvailable',
    component: () => import('pages/Sitedown.vue')
  }
]

export default routes
