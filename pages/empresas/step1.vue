<template>


                <div class="bg-white lg:min-w-0 lg:flex-1">


                  <div v-if="showLoading" wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 class="text-center text-white text-xl font-semibold">Procesando...</h2>
                    <p class="w-1/3 pt-1 text-center text-white">Esto tomara unos segundos. No cierre la pagina porfavor.</p>
                  </div>


                  <div class="h-full w-full  px-6 sm:px-6 lg:px-8 ">
                    <!-- Start main area-->
                    <div class="relative h-full w-full  sm:pt-10  items-center">
                      
                      <div class="pb-5 pt-10 border-b text-center border-gray-200">
                        <h3 class="text-3xl text-blue-800 leading-6 font-bold  ">
                          Datos del usuario
                        </h3>
                          <p class="mt-4 max-w-4xl text-sm text-gray-500">Ingrese los datos de contacto.</p>
                     
                      </div>

                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                          <div class=" overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                               
                  
                                <div class="col-span-4 sm:col-span-4">
                                  <label for="correoUsuario" class="block text-sm font-medium text-gray-700">Correo electronico <span class="text-red-700">*</span> </label>
                                  <input required type="text" v-on:keyup.enter="mailLogin" placeholder="Ingrese su correo y presione ENTER, o presione el boton de validar" v-model="empresa.correoUsuario" name="correoUsuario" id="correoUsuario" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                  <span class="text-xs text-red-700" v-text="mensajeCorreo"></span>
                                </div>

                                <div class="col-span-2 sm:col-span-2">
                                   <label for="correoUsuario" class="block text-sm font-medium text-gray-700"> &nbsp;</label>
                                  <button type="button"  @click="mailLogin"  class=" content-center  items-center w-full px-4 py-2 m-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Validar correo
                                  </button>
                                </div>
                  
                               <div class="col-span-6 sm:col-span-3">
                                  <label for="nombreContacto" class="block text-sm font-medium text-gray-700">Nombres <span class="text-red-700">*</span></label>
                                  <input type="text"   :disabled="isDisabled"   v-model="empresa.nombreContacto" name="nombreContacto" id="nombreContacto" autocomplete="nombre" class="disabled:opacity-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="apellidoContacto" class="block text-sm font-medium text-gray-700">Apellidos <span class="text-red-700">*</span></label>
                                  <input type="text"  :disabled="isDisabled"  v-model="empresa.apellidoContacto" name="apellidoContacto" id="apellidoContacto" autocomplete="apellido" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 ">
                                  <label for="telefonoContacto" class="block text-sm font-medium text-gray-700">Telefono o celular <span class="text-red-700">*</span></label>
                                  <input type="text"  :disabled="isDisabled"  v-model="empresa.telefonoContacto" name="telefonoContacto" id="telefonoContacto" autocomplete="telefonoContacto" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>


                                <div class="col-span-6 sm:col-span-3">
                                  <label for="contrasenhaUsuario" class="block text-sm font-medium text-gray-700">Contrasenha <span class="text-red-700">*</span></label>
                                  <input type="password" :disabled="isDisabled"  v-model="empresa.contrasenhaUsuario" name="contrasenhaUsuario" id="contrasenhaUsuario" autocomplete="contrasenhaUsuario" class="disabled:opacity-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                   <password  v-model="empresa.contrasenhaUsuario"  :toggle="true" :secureLength="7" :strength-meter-only="true"/>
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
   layout: 'empresaLayout',
   components: { Password },
    data: () => ({
        mensajeCorreo : '',
        mensajeError : '',
        empresa : {},
        repetirContrasenha : '',
        showLoading : false
    }),
    computed: {
      isDisabled: function(){
        return !this.$store.state.authenticated;
      }
    },
    mounted() {
     
      this.showLoading = false;
      if (this.$store.state.authenticated) {
        this.empresa  = JSON.parse ( JSON.stringify (this.$store.state.empresa) )  ;
      }
    },
    methods: {
      async mailLogin() {
        
        
        this.mensajeError = '';
        if (!this.empresa.correoUsuario) {
          this.mensajeError  = 'El correo electrónico es obligatorio.';
        } else if (!this.validEmail(this.empresa.correoUsuario)) {
          this.mensajeError = 'El correo electrónico debe ser válido.';
        }

        if(this.mensajeError != '')
        {
          return false;
        }

        //verificacion de email
        const usuario = await this.$store.dispatch('server/getusuario', this.empresa.correoUsuario)
        console.log(usuario);
        if(usuario !== '')
        {
          this.mensajeCorreo = 'Su correo ' + this.empresa.correoUsuario + ' ya existe, porfavor use otro.';
          this.empresa.correoUsuario = "";
          return false;
        }

        this.showLoading = true;
        this.$store
          .dispatch('login', {
            email: this.empresa.correoUsuario,
          })
          .then(() => {
           
            this.mensajeCorreo = "Correo validado correctamente";
            this.$store
              .dispatch('updateEmpresa', 
            {empresa:  JSON.parse ( JSON.stringify (this.empresa) )  ,  step : 'step1'}
            );

            this.showLoading = false;
            
          })
          .catch((err) => {
            this.mensajeCorreo = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
            this.showLoading = false;
          })

           

      },

      step2(){

        this.mensajeError = '';
        if (!this.empresa.correoUsuario) {
          this.mensajeError +=' El correo es obligatorio. ';
        }
        if (!this.empresa.nombreContacto) {
          this.mensajeError +=' El nombre es obligatorio. ';
        }
        if (!this.empresa.apellidoContacto) {
          this.mensajeError +=' El apellido es obligatorio. ';
        }
        if (!this.empresa.telefonoContacto) {
          this.mensajeError +=' El celular es obligatorio. ';
        }
        if (this.empresa.contrasenhaUsuario !=  this.repetirContrasenha) {
          this.mensajeError +=' Las contrasenhas deben coincidir. ';
        }

        if(this.mensajeError != '')
        {
          return false;
        }

         this.$store
          .dispatch('updateEmpresa', 
            {empresa:  JSON.parse ( JSON.stringify (this.empresa) )  ,  step : 'step2'}
          ).then(() => {
          
            this.$router.push('/empresas/step2')
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
.loader {
	border-top-color: #3498db;
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


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
