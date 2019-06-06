<template>
  <div id="grafana">
<nav class="navbar sticky-top navbar-expand-lg" style="background-color: #575757;"><a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#" style="font-size:30px; font-weight: bold;">Wesleyan</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" style="margin-left: 700px;"><a class="nav-item nav-link active" href="/" style="font-size:20px; font-weight: bold; margin-right: 20px;">Home <span class="sr-only">(current)</span></a><a class="nav-item nav-link" href="grafana" style="font-size:20px; font-weight: bold; margin-right: 20px;">Grafana</a>
            <a class="nav-item nav-link" href="custom" style="font-size:20px; font-weight: bold; margin-right: 20px;">Custom Graphs</a>
            <!--a.nav-item.nav-link.disabled(href='#', tabindex='-1', aria-disabled='true; margin-right: 20px') Disabled-->
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar" style="background-color: #FFC709;">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item"><a class="nav-link active" href="#"><span data-feather="home"></span>              Dashboard <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="file"></span>              Sensor List</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="shopping-cart"></span>              Floors Overview</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="users"></span>              Rooms Overview</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="bar-chart-2"></span>              Reports</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="layers"></span>              Integrations</a></li>
                </ul>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"><span>Coming Soon</span><a class="d-flex align-items-center text-muted" href="#"><span data-feather="plus-circle"></span></a></h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text"></span>              Machine Learning</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text"></span>              Chair Sensors</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text"></span>              Innovation</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text"></span>              About</a></li>
                </ul>
            </div>
        </nav>
        <div class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <h1 style="padding-left: 250px; margin-top: 20px; margin-bottom: 30px;"></h1>
            <!--p Grafana Sensor Data-->
            <p style="padding-left: 50px; margin-top: 30px; margin-bottom: 30px;"></p>
                <p style="font-weight: bold; font-size: 30px; padding-top: 20px;">All Sensors</p>
                <iframe src="http://51.140.11.64:3000/d-solo/klF2lPmZk/group?orgId=1&from=now-15m&to=now&refresh=10s&panelId=2" width="850" height="400" frameborder="0"></iframe>
                
                 <p style="font-weight: bold; font-size: 30px; margin-top: 30px;">Sensor 1</p>
                
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb8d7991&refresh=10s&panelId=4" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb8d7991&refresh=10s&panelId=8" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb8d7991&refresh=10s&panelId=6" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb8d7991&refresh=10s&panelId=2" width="850" height="400" frameborder="0"></iframe>
                <p style="font-weight: bold; font-size: 30px; margin-top: 30px;">Sensor 2</p>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=2" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=4" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=6" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=8" width="850" height="400" frameborder="0"></iframe>
                <p style="font-weight: bold; font-size: 30px; margin-top: 30px;">Sensor 3</p>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=2" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=4" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=6" width="850" height="400" frameborder="0"></iframe>
                <iframe src="http://51.140.11.64:3000/d-solo/OkQ0QxRZk/table?orgId=1&from=now-15m&to=now&var-measurements=b827eb6b9cae&refresh=10s&panelId=8" width="850" height="400" frameborder="0"></iframe>
        </div>
    </div>
</div>

</div>
</template>

<script>
export default {
  
  name: 'grafana',
  data () {

    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Grafana',
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
