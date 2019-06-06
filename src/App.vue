<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-expand-lg" style="background-color: #575757;"><a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#" style="font-size:30px; font-weight: bold;">Wesleyan</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" style="margin-left: 700px;"> <a class="nav-item nav-link active" href="/" style="font-size:20px; font-weight: bold; margin-right: 20px;">Home <span class="sr-only">(current)</span></a><a class="nav-item nav-link" href="/grafana" style="font-size:20px; font-weight: bold; margin-right: 20px;">Grafana</a>
            <a
                class="nav-item nav-link" href="custom" style="font-size:20px; font-weight: bold; margin-right: 20px;">Custom Graphs</a>
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
                    <li style = "font-size: 18px; font-weight: bold;" class="nav-item"><a class="nav-link" href="#"><span data-feather="file"></span>              Sensor List</a></li>
                    <li style="padding-left: 16px; font-size: 16px;"> {{ sensors }}</li>
                    
                    <li style="padding-top: 10px; font-size: 14px" class="nav-item"><a class="nav-link" href="#"><span data-feather="shopping-cart"></span>              Sensors Unoccupied: {{unoccupied}}</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="users"></span>              Sensors Occupied: {{occupied}}</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="bar-chart-2"></span>              Sensors Off: {{off}}</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span data-feather="layers"></span>              </a></li>
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
        <div class="col-md-9 ml-sm-auto col-lg-10 px-4"><img src="src/assets/wesleyan logo 1.PNG" height="50" width="350" style="margin-left: 350px; margin-top: 40px;" />
          
            <div class="div" style="background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(&quot;src/assets/wesleyan building.jpg&quot;); height: 600px; width: 1080px; background-repeat: repeat; background-size: cover;">
                  <p style="margin-top: 40px; padding-left: 350px; font-weight: bold; font-size: 25px; padding-top: 10px;"> Welcome to {{title}}</p>
          
                <!-- Large button groups (default and split)-->
                <!--.btn-group(style="margin-left: 30px; margin-bottom: 20px")-->
                <!--  button.btn.btn-secondary.btn-lg.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')-->
                <!--    | Device Name-->
                <!--  .dropdown-menu(aria-labelledby='dropdownMenuButton')-->
                <!--    a.dropdown-item(href='#') Action-->
                <!--    a.dropdown-item(href='#') Another action-->
                <!--    a.dropdown-item(href='#') Something else here-->
                <!--.btn-group(style="margin-left: 30px; margin-bottom: 20px")-->
                <!--  button.btn.btn-secondary.btn-lg.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')-->
                <!--    | Level-->
                <!--  .dropdown-menu(aria-labelledby='dropdownMenuButton')-->
                <!--    a.dropdown-item(href='#') Action-->
                <!--    a.dropdown-item(href='#') Another action-->
                <!--    a.dropdown-item(href='#') Something else here-->
                <!--.btn-group(style="margin-left: 30px; margin-bottom: 20px")-->
                <!--  button.btn.btn-secondary.btn-lg.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')-->
                <!--    | Desk-->
                <!--  .dropdown-menu(aria-labelledby='dropdownMenuButton')-->
                <!--    a.dropdown-item(href='#') Action-->
                <!--    a.dropdown-item(href='#') Another action-->
                <!--    a.dropdown-item(href='#') Something else here-->
                <div class="container">
                    <div class="row" style="padding-top: 30px;">
                        <div class="col-3"></div>
                        <div class="col-4">
                            <h1 style="font-size:30px; font-weight: bold; padding-left: 10px;">OFFICES</h1>
                        </div>
                        <div class="col-4">
                            <h1 style="font-size:30px; font-weight: bold;">SENSORS</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" style="height:150px; margin-bottom: 90px;">
                        <div class="col-3"></div>
                        <div class="col-4">
                          
                          <router-link to="/grafana">
                              <img src="src/assets/chair.png" height="150" width="150" /></router-link></div>
                        <a href="grafana"></a>
                            <div class="col-4"><img src="src/assets/motion-sensor (1).png" height="150" width="150" /></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-4">
                            <h1 style="font-size:28px; font-weight: bold;">ANALYTICS</h1>
                        </div>
                        <div class="col-4">
                            <h1 style="font-size:28px; font-weight: bold;">HELP/ABOUT</h1>
                        </div>
                    </div>
                </div>
                <div class="div" style="padding-left: 260px;"><img src="src/assets/analytics (1).jpg" height="150" width="200" /><img src="src/assets/info.png" height="150" width="150" style="margin-left: 200px;" /></div>
              
            </div>
          
            <!--wesleyan colors #40474F , #575757 , #FFC709-->
            
        </div>
    </div>
</div>
</div>
</template>

<script>
const Influx = require("influx");
export default {
  
  name: 'app',
  data () {

    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Wesleyan IoT App',
      measurement: "",
      unoccupied: 0,
      occupied: 0,
      off: 0,
      sensors: ""
    }
  },
  created: function(){
      const influx= new Influx.InfluxDB({
        host: '51.140.11.64',
        database: 'sensordb',
        port:8086,
      });
    let combined= this 
    let off = 0;
    let occupied = 0;
    let unoccupied = 0;
    influx.getMeasurements().then(function(names) {
    console.log('My measurement names are: ' + names.join(', '))
    let measurement = names.join(' ')
    combined.sensors =measurement;
    for (let i = 0; i <= names.length; i++) {
      influx
        .query(`select motion from ${names[i]}`)
        .then(result => {
          let motionTime = result[result.length-1].time;
          console.log(motionTime)

          let dt1 = new Date(motionTime); 
          let dt2 = new Date();
          console.log(combined.diff_minutes(dt1, dt2))
        
          if (combined.diff_minutes(dt1, dt2) > 15){ 
            combined.off += 1;
          }
  
          if (combined.diff_minutes(dt1, dt2) <= 15 && result[result.length-1].motion == 0) {
            combined.unoccupied += 1
          }
        
          if (combined.diff_minutes(dt1, dt2) <= 15 && result[result.length-1].motion == 1) {
            combined.occupied += 1
          }

        })
        .catch(error => console.log(error));
    }
    })
  
  },
  
  methods:{

  diff_minutes:function(dt2, dt1) {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  },

  
  
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
