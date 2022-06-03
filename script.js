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


    for(let i=0; i<10; i++){
        const CASINHA= document.createElement("button");
        CASINHA.classList.add("btn", "btn-outline-primary", "mx-2", "my-1", "p-4");
        OPCOESDIV.appendChild(CASINHA);

        CASINHA.innerHTML= Math.floor(Math.random()*1000) + 1;
    }
    const CASINHAS= Array.from(OPCOESDIV.childNodes);
    
    const j= Math.floor(Math.random()*10);    
    if(!avaliarParidade(CASINHAS[j].innerHTML, paridade))
        CASINHAS[j].innerHTML= parseInt(CASINHAS[j].innerHTML)+1;
        
    
    
};
