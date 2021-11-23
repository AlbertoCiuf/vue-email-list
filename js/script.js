const app = new Vue({
  el: '#app',
  data: {
    isLoading:true,
    isError:false,  
    mailList: [],
    error:'ERRORE'
  },

  mounted() {
    this.isError=false;
    this.isLoading = true;
    for(let i=0; i<10; i++) {
      //chiamo l'api
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      //in caso di successo:
      .then((response) => {
        let objData = response.data;
        //controllo doppioni
        if (!this.mailList.includes(objData.response)) {
          this.mailList.push(objData.response);
        }
        if (this.mailList.length === 10) this.isLoading = false;
        })        
        //in caso di errore nella chiamata:
      .catch((error) => {
        this.isError = true;
      })
    }
    
      
  },


  

});