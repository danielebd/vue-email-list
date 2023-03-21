const { createApp } = Vue;
createApp({
    data() {
        return {
            listEmail: []
        }
    },
    methods: {

    },
    beforeMount() {
        console.log('beforeMount');
        // console.log(this.message);

        //fare cose
        
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // handle success
                    // console.log(response.data);
                    // console.log(this);
                    this.listEmail.push(response.data.response);
                });
        }
        console.log(this.listEmail);


    }

}).mount('#app');