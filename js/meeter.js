/* meeter.js
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
(function(){
    Document.getElementById('mtgForm').addEventListener('submit', checkAllInterests);

    function checkAllInterests(event){
        alert("in script in the page");
        event.preventDefault();
        //start on the first checkbox
        if(document.getElementById('peepFellowshipTeam').value == checked){
            alert("The Fellowship Team IS selected");
        }else{
            alert("The Fellowship Team is NOT selected");
        }
    }
})();


function checkAllInterests(){
    //this will go through and select all the checkboxes for user interests
    
}
function  DoPeopleSubmit(){
    alert("NoGO");
    return false;
}