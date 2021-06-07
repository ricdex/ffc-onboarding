<template>

                <div class="bg-white lg:min-w-0 lg:flex-1">
                  <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                    <!-- Start main area-->
                    <div class="relative h-full sm:pt-10" style="min-height: 36rem;">
                      
                      <div class="pb-5 pt-10 border-b text-center border-gray-200">
                        <h3 class="text-3xl text-blue-800 leading-6 font-bold  ">
                          Datos del Representante Legal
                        </h3>
                        <p class="mt-4 max-w-4xl text-sm text-gray-500">Ingresa los datos del representante legal.</p>
                      </div>

                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form @submit.prevent="onSubmit">
                          <div class=" overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                                
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteNombre" class="block text-sm font-medium text-gray-700">Nombres <span class="text-red-700">*</span></label>
                                  <input type="text"   v-model="empresa.representanteNombre" name="representanteNombre" id="representanteNombre" autocomplete="nombre" class="disabled:opacity-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteApellido" class="block text-sm font-medium text-gray-700">Apellidos <span class="text-red-700">*</span></label>
                                  <input type="text" v-model="empresa.representanteApellido" name="representanteApellido" id="representanteApellido" autocomplete="apellido" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteNrodocumento" class="block text-sm font-medium text-gray-700">DNI o Carnet de extranjeria <span class="text-red-700">*</span></label>
                                  <input type="text" v-model="empresa.representanteNrodocumento" name="representanteNrodocumento" id="representanteNrodocumento" autocomplete="representanteNrodocumento" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteTelefono" class="block text-sm font-medium text-gray-700">Telefono o celular <span class="text-red-700">*</span></label>
                                  <input type="text" v-model="empresa.representanteTelefono" name="representanteTelefono" id="representanteTelefono" autocomplete="representanteTelefono" class="disabled:opacity-50  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteDireccion" class="block text-sm font-medium text-gray-700">Direccion <span class="text-red-700">*</span></label>
                                  <input type="text" name="representanteDireccion" id="representanteDireccion" v-model="empresa.representanteDireccion"  autocomplete="representanteDireccion" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                               <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteDepartamento" class="block text-sm font-medium text-gray-700">Departamento <span class="text-red-700">*</span></label>
                                  <select id="representanteDepartamento" name="representanteDepartamento" autocomplete="representanteDepartamento" v-model="empresa.representanteDepartamento" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteProvincia" class="block text-sm font-medium text-gray-700">Provincia <span class="text-red-700">*</span></label>
                                  <select id="representanteProvincia" name="representanteProvincia" autocomplete="provincia" v-model="empresa.representanteProvincia" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="representanteDistrito" class="block text-sm font-medium text-gray-700">Distrito <span class="text-red-700">*</span></label>
                                  <select id="representanteDistrito" name="representanteDistrito" autocomplete="representanteDistrito" v-model="empresa.representanteDistrito" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
                                  <button type="button"   @click="step2"  class="inline-flex items-center px-4 py-2 m-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
   layout: 'empresaLayout',
    data: () => ({
        empresa : {},
        mensajeError : '',
        isSending : false,
        tyc : false,
        okMsg : ''
  }),
  async mounted() {
    
    this.okMsg = '';
    this.empresa  = JSON.parse ( JSON.stringify (this.$store.state.empresa) )  ;
      

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
          if (!this.empresa.representanteNombre) {
            this.mensajeError +=' El nombre es obligatorio. ';
          }
          if (!this.empresa.representanteApellido) {
            this.mensajeError +=' El apellido es obligatorio. ';
          }
          if (!this.empresa.representanteNrodocumento) {
            this.mensajeError +=' El documento es obligatorio. ';
          }
          if (!this.empresa.representanteTelefono) {
            this.mensajeError +=' El documento es obligatorio. ';
          }
          if (!this.empresa.representanteDireccion) {
            this.mensajeError +=' La direccion es obligatoria. ';
          }
          if (!this.empresa.representanteProvincia) {
            this.mensajeError +=' La provincia es obligatoria. ';
          }
          if (!this.empresa.representanteDepartamento) {
            this.mensajeError +=' El departamento es obligatorio. ';
          }
          if (!this.empresa.representanteDistrito) {
            this.mensajeError +=' El distrito es obligatorio. ';
          }
          

          if(this.mensajeError != '')
          {
            return false;
          }

          this.isSending = true;
          const token = await this.$recaptcha.execute('login');

          this.$store.dispatch("server/registrarEmpresa",
                  { 
                      
                      token : token,
                      body : this.empresa
                  }).then((result) =>  {

                    console.log('Envio exitoso')
                    // send token to server alongside your form data
                    this.isSending = true;
                    this.okMsg = "Mensaje enviado exitosamente. Revisaremos tus datos y pronto nos contactaremos contigo"

                    this.$store
                      .dispatch('updateEmpresa', 
                        {empresa:  {} ,  step : 'step1'}
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
    step2(){
          this.$store
          .dispatch('updateEmpresa', 
            {empresa:  JSON.parse ( JSON.stringify (this.empresa) )  ,  step : 'step3'}
           ).then(() => {
          
            this.$router.push('/empresas/step2')
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
