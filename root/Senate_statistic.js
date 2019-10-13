var app=new Vue({
  el:"#app",
  data:{
   
    members:[],
    rep:[],
    dem:[],
    ind:[],

    repVotes:0,
    demVotes:0,
    indVotes:0,

    number_rep:[],
    average_rep:[],
    number_dem:[],
    average_dem:[],
    number_ind:[],
    average_ind:[],
    total_average:[],

    // tenPercentArray:[],

    topMissedVotes:[],
    bottomMissedVotes:[],
    bottomAverageVotes:[],
    topAverageVotes:[],
    
    leastAttended:[],
    mostAttended:[],
    mostLoyal:[],
    leastLoyal:[],
    isLoading: true,
  },

  created(){
    this.logic();
  },

  methods:{

    async logic(){
      var key='3Lx25jM7gqtqhzj3rtSJJeO2OwwlmjpVGfoULZXX';
      var url='https://api.propublica.org/congress/v1/113/senate/members.json';
      this.members= await fetch(url,{
        method:"GET",
        headers: new Headers({
          'X-API-Key': key
        })
      })

    .then(response=>response.json())
    .then(data=>data.results[0].members)
    .catch(error=>console.log(error))
    this.getParties()
    this.isLoading = false;
    

  this.topMissedVotes= [...this.members].sort(function(a,b) {
    return a.missed_votes_pct - b.missed_votes_pct;
  }),

  this.bottomMissedVotes= [...this.members].sort(function(a,b) {
        return b.missed_votes_pct - a.missed_votes_pct;
      }) 
  

  this.bottomAverageVotes = [...this.members].sort(function(a,b) {
    return a.votes_with_party_pct - b.votes_with_party_pct;
  })

  this.topAverageVotes = [...this.members].sort(function(a,b) {
    return b.votes_with_party_pct - a.votes_with_party_pct;
  })


  
  this.leastLoyal = this.getTenPercentArray(this.bottomAverageVotes);
    this.mostLoyal = this.getTenPercentArray(this.topAverageVotes);
    this.mostAttended = this.getTenPercentArray(this.bottomMissedVotes);
    this.leastAttended = this.getTenPercentArray(this.topMissedVotes);

    
    },

    getParties(){

      for (let i = 0; i < this.members.length; i++){

        if (this.members[i].party == "R"){
          this.rep.push(this.members[i])
          this.repVotes+= Number(this.members[i].votes_with_party_pct);
        
        } else if (this.members[i].party == "D") {
          this.dem.push(this.members[i])
          this.demVotes += Number(this.members[i].votes_with_party_pct);
        } else {
          this.ind.push(this.members[i])
          this.indVotes+= Number(this.members[i].votes_with_party_pct);
        }
       
      }
  
    this.number_rep=this.rep.length,
    this.average_rep=Math.round(this.repVotes/this.rep.length),
    this.number_dem=this.dem.length,
    this.average_dem=Math.round(this.demVotes/this.dem.length),
    this.number_ind=this.ind.length,
    this.average_ind=Math.round(this.indVotes/this.ind.length)
    this.total_average= Math.round(this.average_dem*(this.number_dem/this.members.length) + this.average_rep*(this.number_rep/this.members.length) + this.average_ind*(this.number_ind/this.members.length))
    
  },

  
  
  
  getTenPercentArray(members){

    let tenPercentArray=[];
    for (let i=0; i<members.length; i++){
      if (i<members.length* 0.1){
        tenPercentArray.push(members[i]);
      } else if (tenPercentArray[tenPercentArray.length-1]==members[i]){
        tenPercentArray.push(members[i])
    } else {
      break;
    }
     }
    return tenPercentArray;
},
      
}

})







// ----------- global variables -----------


// statistic
// var members = [];
// let tenPercentArray=[]
// var statistic = {};



// --------- function calling ----------- AKA Logic Of The Application





// let bottomAverageVotes = [...members].sort(function(a,b) {
//   return a.votes_with_party_pct - b.votes_with_party_pct;
// })
// let topAverageVotes = [...members].sort(function(a,b) {
//   return b.votes_with_party_pct - a.votes_with_party_pct;
// })
// let bottomMissedVotes = [...members].sort(function(a,b) {
//   return a.missed_votes_pct - b.missed_votes_pct;
// })
// let topMissedVotes = [...members].sort(function(a,b) {
//   return b.missed_votes_pct - a.missed_votes_pct;
// }) 

//Calculate 10% per each stat
// const leastLoayal = getTenPercentArray(bottomAverageVotes);
// const mostLoayal = getTenPercentArray(topAverageVotes);
// const mostAttended = getTenPercentArray(bottomMissedVotes);
// const leastAttended = getTenPercentArray(topMissedVotes);



//Fill statistics object

// getParties(members);


//Create Tables

// getTenPercentArray(members);

// createAttendanceSenateGlanceTable(statistic);

//   if (document.URL.includes("Loyalty")){
//     console.log('hello')
//     createSenateTablesLoyalty(leastLoayal, "table4");
//     createSenateTablesLoyalty(mostLoayal, "table5");
//   };


//   if(document.URL.includes("Attendance")){
//     createSenateTablesAttendance(leastAttended, "table2");
//     createSenateTablesAttendance(mostAttended, "table3");
    
//   } 

// }

// ----------- function declaration -----------


//statistic

//   function getParties(members){
//     var rep =[];
//     var dem=[];
//     var ind=[];
    
//     var repVotes=0;
//     var demVotes = 0;
//     var indVotes=0

    

//       for (let i = 0; i < members.length; i++){
//           if (members[i].party == "R"){
//             rep.push(members[i])
//             repVotes+= Number(members[i].votes_with_party_pct);

//         } else if (members[i].party == "D") {
//             dem.push(members[i])
//             demVotes += Number(members[i].votes_with_party_pct);
//         } else {
//             ind.push(members[i])
//             indVotes+= Number(members[i].votes_with_party_pct)

//         }
//     }

    
//     statistic["number_rep"]= rep.length;
//     statistic["average_rep"]=Math.round(repVotes/rep.length);
    

//     statistic["number_dem"] = dem.length;
//     statistic["average_dem"] = Math.round(demVotes / dem.length);

//     statistic["number_ind"]=ind.length;
//     statistic["average_ind"]= Math.round(indVotes/ ind.length);
  

//     // console.log(statistic)

//   };

//   function getTenPercentArray(members){
    
    
//     for (let i=0; i<members.length; i++){
//       if (i<members.length* 0.1){
//         tenPercentArray.push(members[i])
//       } else if (tenPercentArray[tenPercentArray.length-1]==members[i]){
//         tenPercentArray.push(members[i])
//       }else {
//         break;
//       }
      
//     }
//     return tenPercentArray;
//   };
  
//   //Attendance Page - Table1- Senate at Glance
    
//   function createAttendanceSenateGlanceTable(statistic){
  
//     var senateGlanceTable=document.getElementById("senateData");
//     senateGlanceTable.innerHTML='';
  
//     var tableRowHeader=document.createElement("tr");
//     var tableHeader=document.createElement("th");
//     var tableHeader2=document.createElement("th");
//     var tableHeader3=document.createElement("th");
  
//     var textHeader=document.createTextNode("Party");
//     var textHeader2=document.createTextNode("N. of Resp");
//     var textHeader3=document.createTextNode("% Vote with Party");
//     var tableBody = document.createElement("tbody");
  
//     tableHeader.appendChild(textHeader);
//     tableHeader2.appendChild(textHeader2);
//     tableHeader3.appendChild(textHeader3);
  
//     tableRowHeader.appendChild(tableHeader);
//     tableRowHeader.appendChild(tableHeader2);
//     tableRowHeader.appendChild(tableHeader3);
  
//      var tableRow=document.createElement("tr");
//      var tableRowData=document.createElement("td");
//      var tableRowEmpty=document.createElement("td");
//      var tableRowEmpty2=document.createElement("td");
//      var dataNameNum=document.createTextNode(statistic.number_dem);
//      tableRowEmpty.appendChild(dataNameNum);
//      var dataNameAvg=document.createTextNode(statistic.average_dem+"%");
//      tableRowEmpty2.appendChild(dataNameAvg);
   
//      var tableRow2=document.createElement("tr");
//      var tableRowData2=document.createElement("td");
//      var tableRowEmpty3=document.createElement("td");
//      var tableRowEmpty4=document.createElement("td");
//      var dataNameNum2=document.createTextNode(statistic.number_rep);
//      tableRowEmpty3.appendChild(dataNameNum2);
//      var dataNameAvg2=document.createTextNode(statistic.average_rep+ "%");
//      tableRowEmpty4.appendChild(dataNameAvg2);

//      var tableRow3=document.createElement("tr");
//      var tableRowData3=document.createElement("td");
//      var tableRowEmpty5=document.createElement("td");
//      var tableRowEmpty6=document.createElement("td");
//      var dataNameNum3=document.createTextNode(statistic.number_ind);
//      tableRowEmpty5.appendChild(dataNameNum3);
//      var dataNameAvg3=document.createTextNode(statistic.average_ind+"%");
//      tableRowEmpty6.appendChild(dataNameAvg3);
     
//      var tableRow4=document.createElement("tr");
//      var tableRowData4=document.createElement("td");
//      var tableRowEmpty7=document.createElement("td");
//      var tableRowEmpty8=document.createElement("td");
//      var dataNameNumTot=document.createTextNode(statistic.number_dem+statistic.number_rep+statistic.number_ind);
//      tableRowEmpty7.appendChild(dataNameNumTot);
//      let totalAverage = (statistic.average_dem*(statistic.number_dem/members.length)) + (statistic.average_rep*(statistic.number_rep/members.length)) + (statistic.average_ind*(statistic.number_ind/members.length));
//      var dataNameAvgTot=document.createTextNode(Math.round(totalAverage)+ '%');
//      tableRowEmpty8.appendChild(dataNameAvgTot);

//      var rowData=document.createTextNode("Democrats");
//      var rowData2=document.createTextNode("Republicans");
//      var rowData3=document.createTextNode("Independent");
//      var rowData4=document.createTextNode("Total");
  
//      tableRowData.appendChild(rowData);
//      tableRowData2.appendChild(rowData2);
//      tableRowData3.appendChild(rowData3);
//      tableRowData4.appendChild(rowData4);
  
//      tableRow.appendChild(tableRowData);
//      tableRow.appendChild(tableRowEmpty);
//      tableRow.appendChild(tableRowEmpty2);
//      tableRow2.appendChild(tableRowData2);
//      tableRow2.appendChild(tableRowEmpty3);
//      tableRow2.appendChild(tableRowEmpty4)
//      tableRow3.appendChild(tableRowData3);
//      tableRow3.appendChild(tableRowEmpty5);
//      tableRow3.appendChild(tableRowEmpty6);
//      tableRow4.appendChild(tableRowData4);
//      tableRow4.appendChild(tableRowEmpty7);
//      tableRow4.appendChild(tableRowEmpty8);
  
//      tableBody.appendChild(tableRow);
//      tableBody.appendChild(tableRow2);
//      tableBody.appendChild(tableRow3);
//      tableBody.appendChild(tableRow4);
  
//    senateGlanceTable.appendChild(tableRowHeader);
//    senateGlanceTable.appendChild(tableBody);
  
//   }

// //Attendance Page - Table2/3

// // created tablebody to check if was the problem. Nothing changed.
// // I can remove it eventualy (row 258/261)


// function createSenateTablesAttendance(tenPercentArray, tableId){
//   console.log(tenPercentArray)
//   var senateAttendance=document.getElementById(tableId);
//   senateAttendance.innerHTML='';
//   var tableBody = document.createElement('tbody');
//   senateAttendance.appendChild(tableBody);
//   tenPercentArray.forEach(member => {
//     let tr = document.createElement("tr");
//     let td = document.createElement("td");
//     var td2=document.createElement("td");
//     var td3=document.createElement("td");
//     var text =document.createTextNode(member.last_name +" "+ member.first_name +" "+(member.middle_name||("")));
//     var text2=document.createTextNode(member.missed_votes);
//     var text3=document.createTextNode(member.missed_votes_pct+"%");
//     tr.appendChild(td);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
    
//     td2.appendChild(text2);
//     td3.appendChild(text3);
//     var dataLink=document.createElement("a");
//       td.appendChild(dataLink)
//       dataLink.appendChild(text);
//       dataLink.setAttribute("href", member.url);
//     senateAttendance.appendChild(tr);

//   });
// };


// // Loyalty page table 4/5

// function createSenateTablesLoyalty(tenPercentArray, tableId){
//   console.log(tenPercentArray)
//   var tableBody2=document.getElementById(tableId);
//   // tableBody2.innerHTML='';
//   tenPercentArray.forEach(member => {
//     let tr = document.createElement("tr");
//     let td = document.createElement("td");
//     var td2=document.createElement("td");
//     var td3=document.createElement("td");
//     var text =document.createTextNode(member.last_name +" "+ member.first_name +" "+(member.middle_name||("")));
//     var text2=document.createTextNode(member.total_votes);
//     var text3=document.createTextNode(member.votes_with_party_pct+"%");
//     tr.appendChild(td);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     // td.appendChild(text);
//     td2.appendChild(text2);
//     td3.appendChild(text3);

//     var dataLink=document.createElement("a");
//       td.appendChild(dataLink)
//       dataLink.appendChild(text);
//       dataLink.setAttribute("href", member.url);
//     tableBody2.appendChild(tr);

//   });
// }

  

  
  

 // -------------------- 10% ---------------------------------------

// let tenPercentArray = [];

//    for (let i = 0; i < array.length; i++) {
//        if (i < array.length * 0.1) {
//            tenPercentArray.push(array[i])
//        } else if (tenPercentArray[tenPercentArray.length - 1] == array[i]) {
//            tenPercentArray.push(array[i])
//        } else {
//            break;
//        }
//    }
//    return tenPercentArray;


 
   

  