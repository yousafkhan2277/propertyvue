<template>


                                


     <div id="tab-2" class="tab-contents">
      <div class="custom-form">
        <form @submit.prevent="handleRegister" name="registerform" class="main-register-form" id="main-register-form2">
            <label>First Nhhhame * </label>
            <input name="name" type="text" value="">
            <label>Last Name *</label>
            <input name="name2" type="text" value="">
            <label>Email Address *</label>
             <input name="email" type="text"  value="">
             <label>Phone Number *</label>
             <input name="phone" type="text"  value="">
             <label>Gender *</label>
             <div class="row justify-content-md-center">
                
              <input class="col-2" name="gender" value="2" type="radio" > Male
              <input class="col-2" name="gender" value="1" type="radio" > Female
            </div>
             <label>Password *</label>
             <input name="password" type="password"  value="">
             <label>Confirm Password *</label>
             <input name="c_password" type="password" value="">

            <span v-if="errorMessage">
            <strong v-for="message in messages" :key="message" style="color:red">*  {{message }}<br></strong>
            </span>

              <div class="form-group">
                                            <button type="submit" class="log-submit-btn" :disabled="loading">
                                                <span
                                                v-show="loading"
                                                class="spinner-border spinner-border-sm"
                                                ></span>
                                                <span>Register</span>
                                            </button>
                                            </div>

        </form>
      </div>
    </div>
                                


</template>


<script>


export default {
  name: "Register",

  data() {


    return {
      successful: false,
      loading: false,
      messages: [],
      errorMessage:false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {
    handleRegister(user) {
      this.message = "";

      this.loading = true;
if(user.target.elements.password.value !== user.target.elements.c_password.value ){
    this.errorMessage=true;
    this.messages.push('password not match');
    return
}
      let data= 
      {
        first_name: user.target.elements.name.value,
        last_name: user.target.elements.name2.value,
        email: user.target.elements.email.value,
        password: user.target.elements.password.value,
        phone_no: user.target.elements.phone.value,
        gender: user.target.elements.gender.value,

      };

      console.log("data",data);





      this.$store.dispatch("auth/register", data).then(response=>{

        console.log("response",response);
        this.loading = false;

        if(response.status){
        
            this.errorMessage=false;
            console.log("success");
            this.loading = false;
            this.$router.push("/dashboard");
        
    }
    else{

        this.errorMessage=true;
            this.loading = false;
            this.messages = response.message
        
    }
    });
    },
  },
};
</script>