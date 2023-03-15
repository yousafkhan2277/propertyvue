<template>









<div class="container">

<div class="row flex-lg-nowrap">
  
  <div class="col">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <div class="e-profile">
              <div class="row">
                <div class="col-12 col-sm-auto mb-3">
                  <div class="mx-auto" style="width: 140px;">
                    <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                      <span style="color: rgb(166, 168, 170); font: bold 8pt Arial;">140x140</span>
                    </div>
                  </div>
                </div>
                <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div class="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{ currentUser.data.data.first_name + currentUser.data.data.last_name }}</h4>
                    <p class="mb-0">{{ currentUser.data.data.email }}</p>
                    <div class="mt-2">
                        <input type="file" class="btn btn-primary" @change="onFileChange"/>
                      <!-- <button class="btn btn-primary" type="button">
                        <i class="fa fa-fw fa-camera"></i>
                        <span>Change Photo</span>
                      </button> -->
                    </div>
                  </div>

                </div>
              </div>
              <ul class="nav nav-tabs">
                <li class="nav-item"><a href="" class="active nav-link">Settings</a></li>
              </ul>
              <div class="tab-content pt-3">
                <div class="tab-pane active">
                  <div class="form"  >
                    <div class="row">
                      <div class="col">

                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>First Name</label>
                              <input class="form-control" v-model="currentUser.data.data.first_name"  type="text"  name="name">
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input class="form-control" v-model="currentUser.data.data.last_name" type="text" name="username">
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Email</label>
                              <input class="form-control" v-model="currentUser.data.data.email" type="text" name="name" disabled >
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Phone Number</label>
                              <input class="form-control" v-model="currentUser.data.data.phone_no" type="text" name="username" >
                            </div>
                          </div>
                        </div>


                        <div class="row">
                      <div class="col-12 col-sm-6 mb-3">
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Social Media Profile Link</label>
                              <input class="form-control" v-model="currentUser.data.data.social_id" type="password" >
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div class="row">
                      <div class="col-12 col-sm-6 mb-3">
                        <div class="row">
                          <div class="col">
                            <div class="form-group d-flex justify-content-start">

                                <div class="col"><label >Gender </label></div>


              <div class="col"> <input v-model.number="gender"  name="gender" :checked="currentUser.data.data.gender == 2" value="2" type="radio" > Male</div>
              <div class="col"><input   name="gender"  :checked="currentUser.data.data.gender == 1" value="1" type="radio" > Female</div>
           

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>






                        <div class="row">
                          <div class="col mb-3">
                            <div class="form-group">
                              <label>About</label>
                              <textarea class="form-control" v-model="currentUser.data.data.about_me" rows="5" ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-12 col-sm-6 mb-3">
                        <div class="row">
                          <div class="col">
                            <div class="form-group d-flex justify-content-start">

                                <div class="col-5"><label >Are you a licensed agent?</label></div>


              <div class="col"> <input  name="gender" value="2" type="radio" > Yes</div>
              <div class="col"><input  name="gender" value="1" type="radio" > No</div>
           

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Driving License/ID Card Copy <span>Accepted Formats:GIF,JPG,PNG,PDF</span> </label>
                              <input class="form-control" type="file" name="name" >
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                                <label>Real State Agent Documentation <span>Accepted Formats:GIF,JPG,PNG,PDF</span> </label>
                              <input class="form-control" type="file" name="username" >
                            </div>
                          </div>
                        </div>




                    <div class="row">
                      <div class="col d-flex justify-content-end">


                        <div class="form-group ">
                                            <button @click="updateProfile()" class="btn btn-primary" :disabled="loading">
                                                <span
                                                v-show="loading"
                                                class="spinner-border spinner-border-sm"
                                                ></span>
                                                <span>Save Changes</span>
                                            </button>
                                            </div>

                        <!-- <button class="btn btn-primary" @click="updateProfile()" >Save Changes</button> -->
                      </div>
                    </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>

  </div>
</div>


 </div>

</template>


<script>

import axios from 'axios';

const API_URL = 'https://api.staging.afiye.net/api/';


export default {
name:'Master',

data() {


    return {
      loading: false,
    };
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
  },

  methods: {

   

     updateProfile() {
        this.loading=true;

        console.log("urrentUser.data.data",this.currentUser.data.data.first_name);



let data = {
id: this.currentUser.data.data.id,
first_name: this.currentUser.data.data.first_name,
last_name: this.currentUser.data.data.last_name,
phone_no: this.currentUser.data.data.phone_no,
social_id: this.currentUser.data.data.social_id,
gender: this.currentUser.data.data.gender,
about_me: this.currentUser.data.data.about_me,
email:this.currentUser.data.data.email
}

console.log("data",data);




axios.post(API_URL + 'user/edit', data).then(response =>{
        console.log("response page",response.data); 
        if(response.data.status){
        this.loading=false;
        alert(response.data.message)
        }
        else{
          alert(response.data.message)
        }
    });

    }
  }


}

</script>