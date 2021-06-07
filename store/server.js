
const crypto = require('crypto');

export const actions = {


      async getusuario ({ commit, dispatch } , correo) {
            
        const response = await this.$axios.get(
            `/usuario/correo/${correo}` )
        return    response.data ;

      },

      async registrarEmpresa ({ commit, dispatch } , {token , body}) {
        
        const response = await this.$axios.post(
            `/empresa/onboarding/${token}`,
         body
          )
        return    response.data ;

      },

      async registrarInversionista ({ commit, dispatch } , {token , body}) {
        
        const response = await this.$axios.post(
            `/inversionista/onboarding/${token}`,
         body
          )
        return    response.data ;

      },

      
};

