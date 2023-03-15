<template>


  <!--register form -->
  <div class="login-and-register-form modal">
                <div class="main-overlay"></div>
                <div class="main-register-holder">
                    <div class="main-register fl-wrap">
                        <div class="close-reg"><i class="fa fa-times"></i></div>
                        <h3>Welcome to <span>Find<strong>Houses</strong></span></h3>
            
                        <div id="tabs-container">
                            <ul class="tabs-menu">
                                <li class="current"><a href="#tab-1">Login</a></li>
                                
                                <li><a href="#tab-2">Register</a></li>
                            </ul>
                            <div class="tab">

                                <Login/>

                                <div class="tab">
                                    <Register/>
                                </div>

<!--                                
                                <div class="tab">
                                    <div id="tab-3" class="tab-contents">
                                    <div class="custom-form">
                                            <Form  name="registerform">
                                            <label>Please enter your email to rest password </label>
                                            <input name="username" type="text"  value="">
                                            
                                        </form>
                                    </div>
                                    <div class="lost_password">
                                           <span>Have an account</span> <a href="#tab-1">Login</a>
                                        </div>
                                </div>
                                </div> -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--register form end -->



</template>




<script>
import Login from "./Login.vue";
import Register from "./Register.vue";



export default {
name:'Master',
components: {
    Login,
    Register
  },



}

</script>