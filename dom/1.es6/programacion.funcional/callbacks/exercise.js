const ganarElCampeonato = (mandarNota) => {
    mandarNota();

};

const mandarNotaPrensa = () => {
    console.log("Hemos ganado el campeonato");
}

ganarElCampeonato(mandarNotaPrensa);