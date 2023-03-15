<template>


<!-- START FOOTER -->
<footer class="first-footer">
            <div class="second-footer">
                <div class="container">
                    <p>2021 © Copyright - All Rights Reserved.</p>
                    <p>Made With <i class="fa fa-heart" aria-hidden="true"></i> By Code-Theme</p>
                </div>
            </div>
        </footer>


</template>


<script lang="ts">
  

  



export default {


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