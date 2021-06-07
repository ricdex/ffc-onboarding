<template>

                <div class="bg-white lg:min-w-0 lg:flex-1">
                  <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                    <!-- Start main area-->
                    <div class="relative h-full sm:pt-10" style="min-height: 36rem;">
                      
                      <div class="pb-5 pt-10 border-b text-center border-gray-200">
                        <h3 class="text-3xl text-blue-800 leading-6 font-bold  ">
                          Datos de la empresa
                        </h3>
                        <p class="mt-4 max-w-4xl text-sm text-gray-500">Ingrese los datos de la empresa.</p>
                      </div>

                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                          <div class=" overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                                

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="nrodocumento" class="block text-sm font-medium text-gray-700">RUC <span class="text-red-700">*</span></label>
                                  <input type="text" name="nrodocumento" v-model="empresa.nrodocumento" id="nrodocumento" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="razonSocial" class="block text-sm font-medium text-gray-700">Razon Social <span class="text-red-700">*</span></label>
                                  <input type="text" name="razonSocial" v-model="empresa.razonSocial" id="razonSocial" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="actividadEconomica" class="block text-sm font-medium text-gray-700">Actividad Economica <span class="text-red-700">*</span></label>
                                  <select id="actividadEconomica" name="actividadEconomica" autocomplete="actividadEconomica" v-model="empresa.actividadEconomica" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>Comercio</option>
                                    <option>Manufactura</option>
                                  </select>
                                </div>
                  
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="direccion" class="block text-sm font-medium text-gray-700">Direccion <span class="text-red-700">*</span></label>
                                  <input type="text" name="direccion" id="direccion" v-model="empresa.direccion"  autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                               <div class="col-span-6 sm:col-span-3">
                                  <label for="departamento" class="block text-sm font-medium text-gray-700">Departamento <span class="text-red-700">*</span></label>
                                  <select id="departamento" name="departamento" autocomplete="departamento" v-model="empresa.departamento" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="provincia" class="block text-sm font-medium text-gray-700">Provincia <span class="text-red-700">*</span></label>
                                  <select id="provincia" name="provincia" autocomplete="provincia" v-model="empresa.provincia" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label for="distrito" class="block text-sm font-medium text-gray-700">Distrito <span class="text-red-700">*</span></label>
                                  <select id="distrito" name="distrito" autocomplete="distrito" v-model="empresa.distrito" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>D1</option>
                                    <option>D2</option>
                                    <option>D3</option>
                                  </select>
                                </div>
                  
                                <span class="col-span-6 text-xs text-center w-full text-red-700" v-text="mensajeError"></span>
                                
                                <div class="col-span-6 text-center">
                                  <button type="button"   @click="step1" class="inline-flex items-center px-4 py-2 m-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Anterior
                                  </button>
                                  <button type="button"  @click="step3" class="inline-flex items-center px-4 py-2 m-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
export default {
    layout: 'empresaLayout',
    data: () => ({
        empresa : {},
        mensajeError : '',
    }),
    mounted() {

      this.empresa  = JSON.parse ( JSON.stringify (this.$store.state.empresa) )  ;
      
    },
    methods: {
      step1(){
        
          this.$store
          .dispatch('updateEmpresa', 
             {empresa:  JSON.parse ( JSON.stringify (this.empresa) )  ,  step : 'step1'}
          ).then(() => {
          
            this.$router.push('/empresas/step1')
          })
          .catch((err) => {
            this.mensajeError = "Hubo un error. Intentalo nuevamente o comunicate con el adminstrador de mapah.net";
          
         })
      },
      step3(){

          this.mensajeError = '';
          if (!this.empresa.nrodocumento) {
            this.mensajeError +=' El RUC es obligatorio. ';
          }
          if (!this.empresa.razonSocial) {
            this.mensajeError +=' La razon social es obligatoria. ';
          }
          if (!this.empresa.actividadEconomica) {
            this.mensajeError +=' La actividad economica es obligatoria. ';
          }
          if (!this.empresa.departamento) {
            this.mensajeError +=' El departamento es obligatorio. ';
          }
          if (!this.empresa.provincia) {
            this.mensajeError +=' La provincia es obligatoria. ';
          }
          if (!this.empresa.distrito) {
            this.mensajeError +=' El distrito es obligatorio. ';
          }

          if(this.mensajeError != '')
          {
            return false;
          }

          this.$store
          .dispatch('updateEmpresa', 
             {empresa:  JSON.parse ( JSON.stringify (this.empresa) )  ,  step : 'step3'}
          ).then(() => {
          
            this.$router.push('/empresas/step3')
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
