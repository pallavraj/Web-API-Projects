class Github{
    constructor(){
        this.client_id='915e008c32d9f4a0c4f1';
        this.client_secret = 'd84c40e95be946008e796970ef2b9d9d14ca6cf8';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/&{user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return{
            profile
        }

    }

}