export default function carregaJson() {
    let response = fetch("../../../back/db.json")
        .then(res => res.json())
        .then(projetosDados => {
            console.log(projetosDados);
            return projetosDados;
        })
        .catch(error => {
            console.log('ERROO:');
            console.log(error);
        });

    return response;
}