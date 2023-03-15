            
            <template>
           

           <div id="tab-1" class="tab-contents">
                                    <div class="custom-form">
                                            <Form @submit.prevent="handleLogin" :validation-schema="schema" name="registerform">
                                            <label>Username ddor Email Adddress * </label>
                                            <input name="username" type="text"  value="">
                                            <label>Password * </label>
                                            <input name="password" type="password" value="">
 
                                                <span v-if="errorMessage">
                                                    <strong v-for="message in messages" :key="message" style="color:red">* {{message }}<br></strong>
                                                </span>

                                            <!-- <button type="submit" class="log-submit-btn"><span>Log In</span></button> -->
                                            <div class="form-group">
                                            <button type="submit" class="log-submit-btn" :disabled="loading">
                                                <span
                                                v-show="loading"
                                                class="spinner-border spinner-border-sm"
                                                ></span>
                                                <span>Login</span>
                                            </button>
                                            </div>


                                            <div class="clearfix"></div>
                                            <div class="filter-tags">
                                                <input id="check-a" type="checkbox" name="check">
                                                <label for="check-a">Remember me</label>
                                            </div>
                                        </form>
                                        <div class="lost_password">
                                          
                                            <a href="#">Lost Your Password?</a>
                                        </div>
                                       

                                        
                                    </div>
                                </div>






        </template>


<script>

import * as yup from "yup";

export default {
  name: "Login",
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      messages: [],
      errorMessage:false,
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {
    handleLogin(user) {
      this.loading = true;
      let data= 
      {
        username: user.target.elements.username.value,
        password: user.target.elements.password.value,

      };
      this.$store.dispatch("auth/login", data).then(response =>{
        console.log("response page",response);

        if(response.status){
            this.errorMessage=false;
            console.log("success");
            this.loading = false;
            this.$router.push("/dashboard");
        }
        else{
            console.log("failed")
            this.errorMessage=true;
            this.loading = false;
            this.messages = response.message
        }
 
    });
    },
  },
};
</script>