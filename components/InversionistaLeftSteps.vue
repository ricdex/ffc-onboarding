<template>
<div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-1/3  xl:border-gray-200 bg-white">
                  
                  <div class="relative h-full   overflow-hidden py-10 px-6 bg-teal-800 sm:px-10 xl:p-16">
                    <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                      <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                        <defs>
                          <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff"></stop>
                            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                      <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                        <defs>
                          <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff"></stop>
                            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                      <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                        <defs>
                          <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff"></stop>
                            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    

                    <div class=" flow-root">
                      <div class="text-center">
                       
                        <img class="mx-auto h-20  sm:h-40" src="~/assets/img/icono-gradiente.svg"/>
                      </div>
                      <h3 class="pb-10 mt-5 text-xl leading-8  font-bold tracking-tight text-gray-100 sm:text-2xl">Registro nueva <span class="underline"> inversionista </span></h3>
                     
                      <ul class="-mb-8">
                       
                        <li>
                          <div class="relative pb-8">
                            <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                            <div class="relative flex space-x-3">
                              <div v-if="currentStep  == 1 ">
                                <span class="h-8 w-8 rounded-full bg-teal-800 flex items-center justify-center ring-2 ring-white">
                                  <!-- Heroicon name: solid/check -->
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </span>
                              </div>
                              <div v-else>
                                 <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-2 ring-white">
                                  <!-- Heroicon name: solid/check -->
                                  <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                  </svg>
                                </span>
                              </div>
                              <div v-if="currentStep == 1" class="min-w-0 pt-0.5 flex-1 flex justify-between space-x-4">
                                <div >
                                  <p class="text-lg font-bold justify-center text-gray-100"> Datos contacto </p>
                                </div>
                               
                              </div>
                               <div v-else class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div >
                                  <p class="text-sm text-gray-300"> Datos contacto </p>
                                </div>
                               
                              </div>
                            </div>
                          </div>
                        </li>
                    
                        <li>
                          <div class="relative pb-8">
                            <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                            <div class="relative flex space-x-3">
                              <div v-if="currentStep  == 2 ">
                                 <span class="h-8 w-8 rounded-full bg-teal-800 flex items-center justify-center ring-2 ring-white">
                                  <!-- Heroicon name: solid/check -->
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                  </svg>
                                </span>
                              </div>
                              <div v-else-if="currentStep  < 2">
                                <span class="h-8 w-8 rounded-full bg-teal-800 flex items-center justify-center ring-2 ring-gray-300">
                                  <!-- Heroicon name: solid/check -->
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                  </svg>
                                </span>
                              </div>
                              <div v-else>
                                <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-2 ring-white">
                                  <!-- Heroicon name: solid/check -->
                                  <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                  </svg>
                                </span>
                              </div>
                              <div v-if="currentStep == 2" class="min-w-0 flex-1  flex justify-between space-x-4">
                                <div>
                                  <p class="text-lg font-bold justify-center text-gray-100">Datos empresa</p>
                                </div>
                               
                              </div>
                              <div v-else class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p class="text-sm text-gray-300">Datos empresa</p>
                                </div>
                               
                              </div>
                            </div>
                          </div>
                        </li>
                    
                        <li>
                          <div class="relative pb-8">
                            <div class="relative flex space-x-3">
                              <div v-if="currentStep  == 3 ">
                                <span class="h-8 w-8 rounded-full bg-teal-800 flex items-center justify-center ring-2 ring-white">
                                 
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                  </svg>
                                </span>
                              </div>
                              <div v-else-if="currentStep  < 3 ">
                                <span class="h-8 w-8 rounded-full bg-teal-800 flex items-center justify-center ring-2 ring-white">
                                  
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                  </svg>
                                </span>
                              </div>
                              <div v-else>
                                <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-2 ring-white">
                                  
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                  </svg>
                                </span>
                              </div>
                              <div v-if="currentStep  == 3 " class="min-w-0   flex-1 flex justify-between space-x-4">
                                <div>
                                  <p class="text-lg font-bold justify-center text-gray-100">Datos representante legal</p>
                                </div>
                                
                              </div>
                               <div v-else class="min-w-0 pt-1.5   flex-1 flex justify-between space-x-4">
                                <div>
                                  <p class="text-sm text-gray-300">Datos representante legal</p>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </li>
                    
                        
                    
                        
                      </ul>
                     
                    </div>

                    
                  </div>

                  
                </div>
</template>
<script>

export default ({

  computed: {
    currentStep () {
     
      return parseInt(this.$store.state.step.substr(this.$store.state.step.length - 1));
    }
  },
  mounted() {
     
  },
})
</script>

<style>
</style>
