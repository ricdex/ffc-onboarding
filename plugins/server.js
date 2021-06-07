
export default async function ({ store, redirect, params, route , app, $axios}, inject) {

      window.onNuxtReady(async () => {

        const indexPath = route.path.indexOf("empresa");
        if (!store.state.authenticated && !route.path.endsWith('step1')) {

          if( indexPath != -1)
          {
            window.$nuxt.$router.push('/empresas/step1');
          }else{
            window.$nuxt.$router.push('/inversionistas/step1');
          }
          
        }else{
          
          try{
           
                if(store.state.step != null)
                {
                  
                  const lastStep = parseInt(store.state.step.substr(store.state.step.length - 1));
                  const currentStep = parseInt(route.path.substr(route.path.length - 1));
                
                  if(currentStep > lastStep  )
                  { 
                    if( indexPath != -1)
                    {
                      window.$nuxt.$router.push('/empresas/' + store.state.step);
                    }else{
                      window.$nuxt.$router.push('/inversonistas/' + store.state.step);
                    }
                    
                  }

                }


          }catch(e)
          {
             window.$nuxt.$router.push('/error' );
          }

        }
       
      })
  

  }