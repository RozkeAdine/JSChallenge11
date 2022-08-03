//const billyTheCat = {
// name : 'pst pst',
// color: 'orange',
// favouriteFoods : ['grec', 'poulet', 'poulet frit', 'pizza'],
// isHungry : true,
 //gather : function(){
//  return "meooow";
// },
//}
//const selectedProperty = prompt('Tape la propriété que tu veux afficher') ;
//console.log(billyTheCat[selectedProperty]) ;

//////////////////////////////////////////////////////////

// CHALLENGE 11

const data2M = {
     name : 'Marcel',
     weight: 85,
     height: 1.76,
     calcBMI : function()
        {
           let calcIMC;
           calcIMC = this.weight / (this.height * this.height);
           return calcIMC;
         }
     };
const data2B = {
     name : 'Bernard',
     weight: 95,
     height: 1.88,
     calcBMI : function()
     {
      let calcIMC;
      calcIMC = this.weight / (this.height * this.height);
      return calcIMC;
     }
    };
const data1M = {
     name : 'Marcel',
     weight: 92,
     height: 1.95,
     calcBMI : function()
     {
      let calcIMC;
      calcIMC = this.weight / (this.height * this.height);
      return calcIMC;
     }
    };
const data1B = {
     name : 'Bernard',
     weight: 78,
     height: 1.69,
     calcBMI : function()
     {
      let calcIMC;
      calcIMC = this.weight / (this.height * this.height);
      return calcIMC;
     }
    };

if (data1B.calcBMI() < data1M.calcBMI()) {
 console.log('l\'IMC de ' + data1M.name + ' (' + data1M.calcBMI().toFixed(2) + ') est plus élevé que celui de ' + data1B.name + ' (' + data1B.calcBMI().toFixed(2) + ')' );
}else {
 console.log('l\'IMC de ' + data1B.name + ' (' + data1B.calcBMI().toFixed(2) + ') est plus élevé que celui de ' + data1M.name + ' (' + data1M.calcBMI().toFixed(2) + ')');
};

if (data2B.calcBMI() < data2M.calcBMI()) {
 console.log('l\'IMC de ' + data2M.name + ' (' + data2M.calcBMI().toFixed(2) + ') est plus élevé que celui de ' + data2B.name + ' (' + data2B.calcBMI().toFixed(2) + ')' );
}else {
 console.log('l\'IMC de ' + data2B.name + ' (' + data2B.calcBMI().toFixed(2) + ') est plus élevé que celui de ' + data2M.name + ' (' + data2M.calcBMI().toFixed(2) + ')');
}