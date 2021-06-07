<template>

                <div class="bg-white lg:min-w-0 lg:flex-1">
                  <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                    <!-- Start main area-->
                    <div class="relative h-full sm:pt-10" style="min-height: 36rem;">
                      
                      <div class="pb-5 pt-10 border-b text-center border-gray-200">
                        <h3 class="text-3xl text-teal-800 leading-6 font-bold  ">
                          Datos del Inversionista
                        </h3>
                        <p class="mt-4 max-w-4xl text-sm text-gray-500">Ingresa los datos del inversionista.</p>
                      </div>

                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form @submit.prevent="onSubmit">
                          <div class=" overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                                
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="nombre" class="block text-sm font-medium text-gray-700">Nombres <span class="text-red-700">*</span></label>
                                  <input type="text"   v-model="inversionista.nombre" name="nombre" id="nombre" autocomplete="nombre" class="disabled:opacity-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="apellidoo" class="block text-sm font-medium text-gray-700">Apellidos <span class="text-red-700">*</span></label>
                                  <input type="text" v-model="inversionista.apellido" name="apellido" id="apellido" autocomplete="apellido" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="nrodocumento" class="block text-sm font-medium text-gray-700">DNI o Carnet de extranjeria <span class="text-red-700">*</span></label>
                                  <input type="text" v-model="inversionista.nrodocumento" name="nrodocumento" id="nrodocumento" autocomplete="nrodocumento" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="inversionista" class="block text-sm font-medium text-gray-700">Telefono o celular <span class="text-red-700">*</span></label>
                                  <input type="text" v-model="inversionista.telefono" name="inversionista" id="inversionista" autocomplete="inversionista" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="direccion" class="block text-sm font-medium text-gray-700">Direccion <span class="text-red-700">*</span></label>
                                  <input type="text" name="direccion" id="direccion" v-model="inversionista.direccion"  autocomplete="direccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                               <div class="col-span-6 sm:col-span-3">
                                  <label for="departamento" class="block text-sm font-medium text-gray-700">Departamento <span class="text-red-700">*</span></label>
                                  <select id="departamento" name="departamento" autocomplete="departamento" v-model="inversionista.departamento" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="provincia" class="block text-sm font-medium text-gray-700">Provincia <span class="text-red-700">*</span></label>
                                  <select id="provincia" name="provincia" autocomplete="provincia" v-model="inversionista.provincia" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="distrito" class="block text-sm font-medium text-gray-700">Distrito <span class="text-red-700">*</span></label>
                                  <select id="distrito" name="distrito" autocomplete="distrito" v-model="inversionista.distrito" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>
                                
                  
                                <div class="col-span-6 ">
                                    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" v-model="tyc"><span class="ml-2 text-gray-700">Acepto los <a href="#" class="text-blue-500">terminos y condiciones</a></span>
                                </div>
                                <span class="col-span-6  text-xs text-center w-full text-red-700" v-text="mensajeError"></span>
                                
                                <div v-if="okMsg == ''" class="col-span-6 text-center">
                                  <button type="button"   @click="step1"  class="inline-flex items-center px-4 py-2 m-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Anterior
                                  </button>
                                  <button  type="submit" :disabled="isSending || !tyc" class="disabled:opacity-50 inline-flex items-center px-4 py-2 m-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Finalizar
                                  </button>
                                </div> 
                                <div v-else class="col-span-6 text-center">
                                  <span class="text-xl text-center w-full text-red-700" v-text="okMsg"></span>
                                
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
export default {
   layout: 'inversionistaLayout',
    data: () => ({
        inversionista : {},
        mensajeError : '',
        isSending : false,
        tyc : false,
        okMsg : ''
  }),
  async mounted() {
    
    this.okMsg = '';
    this.inversionista  = JSON.parse ( JSON.stringify (this.$store.state.inversionista) )  ;
      

    try {
      await this.$recaptcha.init()
    } catch (e) {
        this.mensajeError = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
       
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    
    async onSubmit() {
        try {

          this.mensajeError = '';
          if (!this.inversionista.nombre) {
            this.mensajeError +=' El nombre es obligatorio. ';
          }
          if (!this.inversionista.apellido) {
            this.mensajeError +=' El apellido es obligatorio. ';
          }
          if (!this.inversionista.nrodocumento) {
            this.mensajeError +=' El documento es obligatorio. ';
          }
          if (!this.inversionista.telefono) {
            this.mensajeError +=' El telefono es obligatorio. ';
          }
          if (!this.inversionista.direccion) {
            this.mensajeError +=' La direccion es obligatoria. ';
          }
          if (!this.inversionista.provincia) {
            this.mensajeError +=' La provincia es obligatoria. ';
          }
          if (!this.inversionista.departamento) {
            this.mensajeError +=' El departamento es obligatorio. ';
          }
          if (!this.inversionista.distrito) {
            this.mensajeError +=' El distrito es obligatorio. ';
          }
          

          if(this.mensajeError != '')
          {
            return false;
          }

          this.isSending = true;
          const token = await this.$recaptcha.execute('login');

          this.$store.dispatch("server/registrarInversionista",
                  { 
                      
                      token : token,
                      body : this.inversionista
                  }).then((result) =>  {

                    console.log('Envio exitoso')
                    // send token to server alongside your form data
                    this.isSending = true;
                    this.okMsg = "Mensaje enviado exitosamente. Revisaremos tus datos y pronto nos contactaremos contigo"

                    this.$store
                      .dispatch('updateInversionista', 
                        {inversionista:  {} ,  step : 'step1'}
                      ).then(() => {
                        this.$store.dispatch('logout');
                      })

                  }).catch((error) => {
                     this.mensajeError = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
                      this.isSending = false;      
                  })

          
        } catch (error) {
          this.mensajeError = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
          this.isSending = false;
        }
    },
    step1(){
          this.$store
          .dispatch('updateInversionista', 
            {inversionista:  JSON.parse ( JSON.stringify (this.inversionista) )  ,  step : 'step1'}
           ).then(() => {
          
            this.$router.push('/inversionistas/step1')
          })
          .catch((err) => {
             this.mensajeError = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
          
         })
      },

  }
}

</script>

<style>
</style>
