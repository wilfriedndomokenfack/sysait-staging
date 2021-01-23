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
            path: "product",
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
            component: () => import('pages/Products/EditProduct.vue'),
          }

        ]
      },
      {
        path: 'courses/',
        component: RouterContainer,
        children: [
          {
            path: "",
            name: 'courses',
            meta: { breadcrumb: 'Our courses' },
            component: () => import('pages/courses/Courses.vue'),
          },
          {
            path: "course",
            name: 'course',
            meta: { breadcrumb: 'product' },
            component: () => import('pages/courses/Course.vue'),
          },
          {
            path: "new",
            name: 'newCourse',
            meta: { breadcrumb: 'Create a new course' },
            component: () => import('pages/courses/NewCourse.vue'),
          },
          {
            path: "course/edit",
            name: 'editCourse',
            meta: { breadcrumb: 'Edit a course' },
            component: () => import('pages/courses/EditCourse.vue'),
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
            path: "job",
            name: 'job',
            meta: { breadcrumb: 'product' },
            component: () => import('pages/jobs/Job.vue'),
          },
          {
            path: "new",
            name: 'newJob',
            meta: { breadcrumb: 'Create a new course' },
            component: () => import('pages/jobs/NewJob.vue'),
          },
          {
            path: "job/edit",
            name: 'editJob',
            meta: { breadcrumb: 'Edit a job' },
            component: () => import('pages/jobs/EditJob.vue'),
          }

        ]
      }

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
