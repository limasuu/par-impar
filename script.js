
const definirParidade= () => Math.random()<0.5 ? true : false;

const avaliarParidade= (num, par) => par ? ((num%2===0) ? true : false) 
            : ((num%2 ===0) ? false : true);

