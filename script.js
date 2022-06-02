const OPCOESDIV= document.querySelector("#opcoes");
const INSTRUCAOPAR= document.querySelector("#msgInstrucao");
const RESULTADOPAR= document.querySelector("#msgResultado");
const JOGARBUTTON= document.querySelector("#jogarNovamente");

const definirParidade= () => Math.random()<0.5 ? true : false;

const avaliarParidade= (num, par) => par ? ((num%2===0) ? true : false) 
            : ((num%2 ===0) ? false : true);

const definirAcertos= () => {
    let acertos= 0;

    return {
        add: () => acertos++,
        getTotal: () => acertos        
    };
};

const definirSolucao= () => {
    let _qntd;

    return {
        setQntd: qntd => {
            if(_qntd === undefined)
                _qntd= qntd;
        },
        getQtnd: () => _qntd
    };
};

const jogar= () => { 

    const paridade= definirParidade();
    const acertos= definirAcertos();
    const solucao= definirSolucao();

    JOGARBUTTON.classList.add("invisivel");
    RESULTADOPAR.classList.add("invisivel");
    OPCOESDIV.innerHTML= "";


};
