<template>


                <div class="bg-white lg:min-w-0 lg:flex-1">
                  <div class="h-full w-full  px-6 sm:px-6 lg:px-8 ">
                    <!-- Start main area-->
                    <div class="relative h-full w-full  sm:pt-10  items-center">
                      
                      <div class="pb-5 pt-10 border-b text-center border-gray-200">
                        <h3 class="text-3xl text-teal-800 leading-6 font-bold  ">
                          Datos del usuario
                        </h3>
                          <p class="mt-4 max-w-4xl text-sm text-gray-500">Ingrese los datos de contacto.</p>
                     
                      </div>

                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                          <div class=" overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                               
                  
                                <div class="col-span-6 ">
                                  <label for="correoUsuario" class="block text-sm font-medium text-gray-700">Correo electronico <span class="text-red-700">*</span> </label>
                                  <input required type="text" v-on:keyup.enter="mailLogin" placeholder="Ingrese su correo y presione ENTER" v-model="inversionista.correoUsuario" name="correoUsuario" id="correoUsuario" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                  <span class="text-xs text-red-700" v-text="mensajeCorreo"></span>
                                </div>
                  
                               <div class="col-span-6 sm:col-span-3">
                                  <label for="nombreContacto" class="block text-sm font-medium text-gray-700">Nombres <span class="text-red-700">*</span></label>
                                  <input type="text"   :disabled="isDisabled"   v-model="inversionista.nombreContacto" name="nombreContacto" id="nombreContacto" autocomplete="nombre" class="disabled:opacity-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="apellidoContacto" class="block text-sm font-medium text-gray-700">Apellidos <span class="text-red-700">*</span></label>
                                  <input type="text"  :disabled="isDisabled"  v-model="inversionista.apellidoContacto" name="apellidoContacto" id="apellidoContacto" autocomplete="apellido" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 ">
                                  <label for="telefonoContacto" class="block text-sm font-medium text-gray-700">Telefono o celular <span class="text-red-700">*</span></label>
                                  <input type="text"  :disabled="isDisabled"  v-model="inversionista.telefonoContacto" name="telefonoContacto" id="telefonoContacto" autocomplete="telefonoContacto" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>


                                <div class="col-span-6 sm:col-span-3">
                                  <label for="contrasenhaUsuario" class="block text-sm font-medium text-gray-700">Contrasenha <span class="text-red-700">*</span></label>
                                  <input type="password" :disabled="isDisabled"  v-model="inversionista.contrasenhaUsuario" name="contrasenhaUsuario" id="contrasenhaUsuario" autocomplete="contrasenhaUsuario" class="disabled:opacity-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                   <password  v-model="inversionista.contrasenhaUsuario"  :toggle="true" :secureLength="7" :strength-meter-only="true"/>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="repetirContrasenha" class="block text-sm font-medium text-gray-700">Repetir contrasenha <span class="text-red-700">*</span></label>
                                  <input type="password" :disabled="isDisabled" v-model="repetirContrasenha" name="repetirContrasenha" id="repetirContrasenha" autocomplete="repetirContrasenha" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  

                                <span class="col-span-6 text-xs text-center w-full text-red-700" v-text="mensajeError"></span>
                                <div class="col-span-6 text-center">
                                 
                                  <button type="button"  @click="step2" :disabled="isDisabled" class="disabled:opacity-50 inline-flex items-center px-4 py-2 m-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Siguiente
                                  </button>
                                </div>
                              </div>
                            </div>
                           
                          </div>
                        </form>
                      </div>


                    </div>
                    <!-- End main area -->
                  </div>
                </div>
              
</template>

<script>
import Password from 'vue-password-strength-meter'
export default {
   layout: 'inversionistaLayout',
   components: { Password },
    data: () => ({
        mensajeCorreo : '',
        mensajeError : '',
        inversionista : {},
        repetirContrasenha : ''
    }),
    computed: {
      isDisabled: function(){
        return !this.$store.state.authenticated;
      }
    },
    mounted() {
     
      if (this.$store.state.authenticated) {
        this.inversionista  = JSON.parse ( JSON.stringify (this.$store.state.inversionista) )  ;
      }
    },
    methods: {
      async mailLogin() {
        
        this.mensajeError = '';
        if (!this.inversionista.correoUsuario) {
          this.mensajeError  = 'El correo electrónico es obligatorio.';
        } else if (!this.validEmail(this.inversionista.correoUsuario)) {
          this.mensajeError = 'El correo electrónico debe ser válido.';
        }

        if(this.mensajeError != '')
        {
          return false;
        }

        //verificacion de email
        const usuario = await this.$store.dispatch('server/getusuario', this.inversionista.correoUsuario)
        console.log(usuario);
        if(usuario !== '')
        {
          this.mensajeCorreo = 'Su correo ' + this.inversionista.correoUsuario + ' ya existe, porfavor use otro.';
          this.inversionista.correoUsuario = "";
          return false;
        }

        this.$store
          .dispatch('login', {
            email: this.inversionista.correoUsuario,
          })
          .then(() => {
           
            this.mensajeCorreo = "Correo validado correctamente";
            this.$store
              .dispatch('updateInversionista', 
            {inversionista:  JSON.parse ( JSON.stringify (this.inversionista) )  ,  step : 'step1'}
          );
            
          })
          .catch((err) => {
            this.mensajeCorreo = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
          })

           

      },

      step2(){

        this.mensajeError = '';
        if (!this.inversionista.correoUsuario) {
          this.mensajeError +=' El correo es obligatorio. ';
        }
        if (!this.inversionista.nombreContacto) {
          this.mensajeError +=' El nombre es obligatorio. ';
        }
        if (!this.inversionista.apellidoContacto) {
          this.mensajeError +=' El apellido es obligatorio. ';
        }
        if (!this.inversionista.telefonoContacto) {
          this.mensajeError +=' El celular es obligatorio. ';
        }
        if (this.inversionista.contrasenhaUsuario !=  this.repetirContrasenha) {
          this.mensajeError +=' Las contrasenhas deben coincidir. ';
        }

        if(this.mensajeError != '')
        {
          return false;
        }

         this.$store
          .dispatch('updateInversionista', 
            {inversionista:  JSON.parse ( JSON.stringify (this.inversionista) )  ,  step : 'step2'}
          ).then(() => {
          
            this.$router.push('/inversionistas/step2')
          })
          .catch((err) => {
            this.mensajeError = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
          })
      },

      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
