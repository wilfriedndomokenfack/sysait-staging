
<template>
  <div class="breadcrumb" v-if="activeBreadcrumbs.length">

    <div>
      <router-link active-class="active" :to="{ path: '/' }">
        <q-icon color="primary" name="fas fa-home" />
      </router-link>
    </div>

    <div
      v-for="(crumb, i) in activeBreadcrumbs"
      :key="i">
      <router-link active-class="active" :to="{ path: crumb.parsedPath }"
        :tag="i != activeBreadcrumbs.length - 1 ? 'a' : 'span'"
        >{{ getBreadcrumb(crumb.meta.breadcrumb) }}</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Breadcrumbs',
    data () {
    return {

    }
  },
  computed: {
    breadcrumbs () {
        return this.$route.matched
    },
    activeBreadcrumbs () {
      return Object.assign([], this.breadcrumbs).filter(crumb => {
        crumb.parsedPath = crumb.path == '' ? '/' : crumb.path
        crumb.path = crumb.path.replace(/\/:[^/:]*$/, '')
        return crumb.meta && crumb.meta.breadcrumb
      })
      },
    },
    methods: {
      getBreadcrumb (bc) {
        return typeof bc === 'function' ? bc.call(this, this.$route.params) : bc;
      }
    },
  }
</script>
<style lang="scss" scoped>
  .breadcrumb {
    list-style-type: none;
    margin-bottom: 10px;
    div {
      display: inline;

      a, span {
        padding-left: 15px;
        padding-right: 15px;
        display: inline-block;
      }

      & + div {
        border-left: 1px solid #ccc;
      }
    }
  }
</style>

