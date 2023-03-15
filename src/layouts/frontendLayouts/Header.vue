<template>


    <!-- Header Container
    ================================================== -->
    <header id="header-container">
        <!-- Header -->
        <div id="header">
            <div class="container container-header">
                <!-- Left Side Content -->
                <div class="left-side">
                    <!-- Logo -->
                    <div id="logo">
                        <a href="index.html"><img src="../../../public/frontend/images/logo-light-dark.svg" alt=""></a>
                    </div>
                    <!-- Mobile Navigation -->
                    <div class="mmenu-trigger">
                        <button class="hamburger hamburger--collapse" type="button">
                            <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <!-- Main Navigation -->
                    <nav id="navigation" class="style-1">
                        <ul id="responsive">
                            <li><a href="/">Home</a>
                                </li>
                                <li><a href="/about">About Us</a>
                                </li>
                                <li><a href="/agent-listing">Agents</a>
                                </li>
                                <li><a href="/agent-detail"> Agent detail </a>
                                </li>
                                <li><a href="/Properties">Properties</a></li>
                                <li><a href="contact-us">Contact us</a></li>
                                <li class="d-none d-xl-none d-block d-lg-block"><a href="login.html">Login</a></li>
                                <li class="d-none d-xl-none d-block d-lg-block"><a href="register.html">Register</a></li>
                        </ul>
                    </nav>
                    <!-- Main Navigation / End -->
                </div>


                    <!-- Right Side Content / End -->
                    <div v-if="currentUser" class="right-side d-none d-none d-lg-none d-xl-flex">
                        <!-- Header Widget -->
                        <div class="header-widget">
                            <a href="/dashboard" class="button border">Add Listing<i class="fas fa-laptop-house ml-2"></i></a>
                        </div>
                        <!-- Header Widget / End -->
                    </div>
                    <!-- Right Side Content / End -->

                    <!-- Right Side Content / End -->
                    <div v-if="currentUser" class="header-user-menu user-menu add">
                        <div class="header-user-name">
                            <span><img :src="currentUser.data.data.profile_media" alt=""></span>Hi, {{currentUser.data.data.first_name}}!
                        </div>
                        <ul>
                            <li><a href="user-profile.html"> Edit profile</a></li>
                            <li><a href="add-property.html"> Add Property</a></li>
                            <li><a href="payment-method.html">  Payments</a></li>
                            <li><a href="change-password.html"> Change Password</a></li>
                            <li><a href="#">Log Out</a></li>
                        </ul>
                    </div>
                    <!-- Right Side Content / End -->

                <!-- Left Side Content / End -->
                <div v-if="!currentUser" class="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                    <!-- Header Widget -->
                    <div class="header-widget sign-in">
                        <div class="show-reg-form modal-open"><a href="#">Sign In</a></div>
                    </div>
                    <!-- Header Widget / End -->
                </div>
                <!-- Right Side Content / End -->



            </div>
        </div>
        <!-- Header / End -->

    </header>



    


    <div class="clearfix"></div>
    <!-- Header Container / End -->

            <!--register form -->
        <authenticationModule/>
    <!--register form end -->


</template>





<script>
import authenticationModule from "../../components/authentication/index.vue";


export default {
name:'Master',
components: {
    authenticationModule,
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

computed: {
    currentUser() {
      console.log(this.$store.state.auth.user)
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    console.log("this.currentUser",this.currentUser)
    if (!this.currentUser) {
      this.$router.push('/');
    }
  }


}

</script>



