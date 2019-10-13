const app= new Vue({
el: "#app",
data:{
  members:[],
  party:["R","D","I"],
  selected:"all",
  message:"Result not found!",
  filteredMembers:[],
  isLoading:true
},

created() {
  this.getData()
},

methods:{
  async getData(){
    var key= '3Lx25jM7gqtqhzj3rtSJJeO2OwwlmjpVGfoULZXX';
    var url = 'https://api.propublica.org/congress/v1/113/house/members.json'
   this.members= await fetch(url,{
     method: "GET",
     headers: new Headers({
       'X-API-Key': key
     })
   })
   
   .then(response=>response.json())
   .then(data=> data.results[0].members)
   .catch(error=>console.log(error))
  //  console.log(this.members)
  this.filtered=this.members;
  this.isLoading=false
},

},

computed:{
  filtered(){
    return this.members.filter(member => this.party.includes(member.party) && (member.state == this.selected || this.selected == "all"))
  }
}

});



// ----------- global variables -----------


// var republican = document.getElementById('republican');
// var democratic = document.getElementById('democratic');
// var indipendent = document.getElementById('indipendent');
// var usState=document.getElementById("stateMenu");
// var members=[];


// --------- function calling ----------- AKA Logic Of The Application






// returnStatesList(members);

// createHouseTable(returnFilteredMembers(members));

// checkboxes filtered 


// republican.addEventListener('click', function() {
//   createHouseTable(returnFilteredMembers());
// })

// democratic.addEventListener('click', function() {
//   createHouseTable(returnFilteredMembers());
// })

// indipendent.addEventListener('click', function() {
//   createHouseTable(returnFilteredMembers());
// })

// usState.onchange=function(){
//   createHouseTable(returnFilteredMembers())
// };

// } ;

// ----------- function declaration -----------


// createHouseTable(data.results[0].members)
// function createHouseTable(members){
//   var houseTable=document.getElementById("houseData");
//   houseTable.innerHTML=" ";
//   if (members != null) {
//   var tableRowHeader=document.createElement("tr")
//   var tableHeader=document.createElement("th");
//   var tableHeader2=document.createElement("th");
//   var tableHeader3=document.createElement("th");
//   var tableHeader4=document.createElement("th");
//   var tableHeader5=document.createElement("th");
//   var textHeader=document.createTextNode("Name");
//   var textHeader2=document.createTextNode("Party");
//   var textHeader3=document.createTextNode("State");
//   var textHeader4=document.createTextNode("Seniority");
//   var textHeader5=document.createTextNode("Votes with party");
//   var tableBody = document.createElement('tbody');
//   tableHeader.appendChild(textHeader);
//   tableHeader2.appendChild(textHeader2);
//   tableHeader3.appendChild(textHeader3);
//   tableHeader4.appendChild(textHeader4);
//   tableHeader5.appendChild(textHeader5);
//   tableRowHeader.appendChild(tableHeader);
//   tableRowHeader.appendChild(tableHeader2);
//   tableRowHeader.appendChild(tableHeader3);
//   tableRowHeader.appendChild(tableHeader4);
//   tableRowHeader.appendChild(tableHeader5);
//   houseTable.appendChild(tableRowHeader);
//   houseTable.appendChild(tableBody);
//    members.forEach(function(member){
//      var tableRow=document.createElement("tr");
//      var tableData=document.createElement("td");
//      var tableData2=document.createElement("td");
//      var tableData3=document.createElement("td");
//      var tableData4=document.createElement("td");
//      var tableData5=document.createElement("td");
//      var dataName = document.createTextNode(member.last_name +" "+ member.first_name +" "+(member.middle_name||("")));
//      var dataName2= document.createTextNode(member.party);
//      var dataName3= document.createTextNode(member.state);
//      var dataName4= document.createTextNode(member.seniority);
//      var dataName5= document.createTextNode(member.votes_with_party_pct+ "%");
//      tableRow.appendChild(tableData);
//      tableRow.appendChild(tableData2);
//      tableRow.appendChild(tableData3);
//      tableRow.appendChild(tableData4);
//      tableRow.appendChild(tableData5);
//      houseData.appendChild(tableRow);
//      /*tableData.appendChild(dataName);*/
//      tableData2.appendChild(dataName2);
//      tableData3.appendChild(dataName3);
//      tableData4.appendChild(dataName4);
//      tableData5.appendChild(dataName5);
//      var dataLink=document.createElement("a");
//       tableData.appendChild(dataLink)
//       dataLink.appendChild(dataName);
//       dataLink.setAttribute("href", member.url);
//       tableBody.appendChild(tableRow);
//    }
//    ); 
//   } else{
//     houseTable.innerHTML="Result not found";
//   }
//   };
  
  // filtersData
    
   

// function returnFilteredMembers(members) {
//   var filteredMembers = [];
//   var checkBoxes = [...document.querySelectorAll("input[name=party]:checked")];
//   var selectedValues = checkBoxes.map(checkBox => checkBox.value);
  
//   /*data.results[0].*/ members.forEach(member => {
//     if (selectedValues.includes(member.party) && (stateMenu.value==member.state || stateMenu.value == 'all')
//     /*&& check if the value of the dropdown is equal to the member state*/ ) {
//       filteredMembers.push(member)
//     }
//   })
//   if (filteredMembers.length > 0)
//   return filteredMembers;
//   else
//   return null;
//   // return data.results[0].members.filter(member => selectedValues.includes(member.party))
// }


// create dropdown menu


// function returnStatesList(members){

//   var stateList=[];
//   var list=document.getElementById("houseData");
//   // list.innerHTML='';
//   /*data.results[0].*/ members.forEach(function(member){
//     var dropMenu=document.createElement("option");
//     var txt=document.createTextNode(member.state);
//     dropMenu.value=member.state
//     dropMenu.appendChild(txt);
//     stateMenu.appendChild(dropMenu);
//   });
 
// };


