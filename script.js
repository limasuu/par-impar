
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
