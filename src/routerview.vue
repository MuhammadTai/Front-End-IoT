<template>
  <div id="start">
    <router-view></router-view>
      
</div>
</template>

<script>
export default {
  
  name: 'start',
  data () {

    return {

    }
  },

  
}
</script>

<style lang="scss">
body {
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
  background-color: #ABB2B9 !important;
}

a {
  color: #F1C40F;
}

p{
  padding-left: 30px;
}

iframe{
  padding-left: 30px;
}

/*
h1{
  padding-left: 30px;
}
*/

/*
 * Top Nav Bar
 */

.navbar-brand{
  color: #F1C40F;
}

.navbar-nav a{
  color: #dfd9d9;
}

.navbar-nav .nav-item.nav-link:hover, .navbar-brand:hover{
  color: #F1C40F !important;
}



/*
 * Sidebar
 */

 .sidebar {
  position: static;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  padding: 48px 0 0; /* Height of navbar */
}

.sidebar-sticky {
  position: relative;
  height: calc(100vh - 70px);
  top: 70px;
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #1F618D;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}


</style>
