import axios from "axios";

let Service = axios.create({
    baseURL: "http://localhost:5000/"
});

let app = {
    async registracija(ime_prezime,eposta,lozinka){
        let response = await Service.post('/register',{
            ime: ime_prezime[0],
            prezime: ime_prezime[1],
            email: eposta,
            password: lozinka
        })
        console.log(response)
    },

    async login(eposta,lozinka){
        let response = await Service.post('/login',{
            email: eposta,
            password: lozinka
        })
        return response.data;
    },

    async getArchives() {
        let response = await Service.get('/arhive');
        return response.data;
    },

    async getDocuments(naziv_arhive){
        let response = await Service.post('/dokumenti',{
            naziv: naziv_arhive
        });
        return response.data;
    }
};

export { app, Service };