<template>


    <div class="inner-pages maxw1600 m0a dashboard-bd">
        <!-- Wrapper -->
        <div id="wrapper" class="int_main_wraapper">
            <div class="dash-content-wrap">
        <Header/>
            </div>
            <div class="clearfix"></div>
            <section class="user-page section-padding pt-55">
                <div class="container-fluid">
                    <div class="row">
                        <SideMenu/>
    
                        <div class="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">
                            
                            <div class="col-lg-12 mobile-dashbord dashbord">
                                <div class="dashboard_navigationbar dashxl">
                                    <div class="dropdown">
                                        <button onclick="myFunction()" class="dropbtn"><i class="fa fa-bars pr10 mr-2"></i> Dashboard Navigation</button>
                                        <ul id="myDropdown" class="dropdown-content">
                                            <li>
                                                <a href="dashboard.html">
                                                    <i class="fa fa-map-marker mr-3"></i> Dashbohhard
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-profile.html">
                                                    <i class="fa fa-user mr-3"></i>Profilejjjjhh
                                                </a>
                                            </li>
                                            <li>
                                                <a href="my-listings.html">
                                                    <i class="fa fa-list mr-3" aria-hidden="true"></i>My Properties
                                                </a>
                                            </li>
                                            <li>
                                                <a href="favorited-listings.html">
                                                    <i class="fa fa-heart mr-3" aria-hidden="true"></i>Favorited Properties
                                                </a>
                                            </li>
                                            <li>
                                                <a class="active" href="add-property.html">
                                                    <i class="fa fa-list mr-3" aria-hidden="true"></i>Add Property
                                                </a>
                                            </li>
                                            <li>
                                                <a href="payment-method.html">
                                                    <i class="fas fa-credit-card mr-3"></i>Payments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="invoice.html">
                                                    <i class="fas fa-paste mr-3"></i>Invoices
                                                </a>
                                            </li>
                                            <li>
                                                <a href="change-password.html">
                                                    <i class="fa fa-lock mr-3"></i>Change Password
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    <i class="fas fa-sign-out-alt mr-3"></i>Log Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                        <router-view/>
    
                        </div>
                    </div>
                </div>
            </section>
    
<Footer/>
            
        <a data-scroll href="#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
        <!-- END FOOTER -->

        <!-- START PRELOADER -->
        <div id="preloader">
            <div id="status">
                <div class="status-mes"></div>
            </div>
        </div>
    
    
    </div>
    </div>
      </template>
    
  
  <script lang="ts">
  

  
  import Header from "./Header.vue";
  import SideMenu from "./SideMenu.vue";
  import Footer from "./Footer.vue";
  
  
  export default {
  
  
    components: {
      Header,
      SideMenu,
      Footer
    },

    created() {
    
    var scripts = [
      "../frontend/js/jquery-3.5.1.min.js",
      "../frontend/js/rangeSlider.js",
      "../frontend/js/tether.min.js",
      "../frontend/js/moment.js",
      "../frontend/js/bootstrap.min.js",
      "../frontend/js/mmenu.min.js",
      "../frontend/js/mmenu.js",
      "../frontend/js/aos.js",
      "../frontend/js/aos2.js",
      "../frontend/js/nice-select.js",
      "../frontend/js/slick.min.js",
      "../frontend/js/fitvids.js",
      "../frontend/js/jquery.waypoints.min.js",
      "../frontend/js/jquery.counterup.min.js",
      "../frontend/js/imagesloaded.pkgd.min.js",
      "../frontend/js/isotope.pkgd.min.js",
      "../frontend/js/smooth-scroll.min.js",
      "../frontend/js/lightcase.js",
      "../frontend/js/search.js",
      "../frontend/js/owl.carousel.js",
      "../frontend/js/jquery.magnific-popup.min.js",
      "../frontend/js/ajaxchimp.min.js",
      "./frontend/js/newsletter.js",
      "../frontend/js/jquery.form.js",
      "../frontend/js/jquery.validate.min.js",
      "../frontend/js/searched.js",
      "../frontend/js/forms-2.js",
      "../frontend/js/range.js",
      "../frontend/js/color-switcher.js",
      "../frontend/revolution/js/jquery.themepunch.tools.min.js",
      "../frontend/revolution/js/jquery.themepunch.revolution.min.js",
      "../frontend/js/popper.min.js",
      "../frontend/js/slick4.js",
      "../frontend/js/timedropper.js",
      "../frontend/js/datedropper.js",
      "../frontend/js/inner.js",
      "../frontend/js/script.js",
      "../frontend/js/popup.js",
      "../frontend/js/leaflet.js",
      "../frontend/js/leaflet-gesture-handling.min.js",
      "../frontend/js/leaflet-providers.js",
      "../frontend/js/leaflet.markercluster.js",
      "../frontend/js/map4.js",
      "../frontend/js/map-single.js",
      "../frontend/js/jquery-ui.js",
      "../frontend/js/swiper.min.js",
      "../frontend/js/swiper.js",
      "../frontend/js/slick2.js",
      "../frontend/js/dashbord-mobile-menu.js",
      "../frontend/js/dropzone.js",
    ];
    
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
    },
  }
  </script>