//-----------============== << EMAIL INPUT >> ==============-----------

(function(EmailsInput) {
  'use strict'

  document.addEventListener('DOMContentLoaded', function() {
    EmailsInput(document.querySelector('#toInputColumn'), { triggerKeyCodes: [13, 32] })
    EmailsInput(document.querySelector('#bccInputColumn'), { triggerKeyCodes: [13, 32] })
    EmailsInput(document.querySelector('#ccInputColumn'), { triggerKeyCodes: [13, 32] })
  })

}(window.lib.EmailsInput))

//-----------============== << TEXT AREA EXPANSION >> ==============-----------

// Dealing with Input width
let el = document.querySelector(".input-wrap .input");
let widthMachine = document.querySelector(".input-wrap .width-machine");
el.addEventListener("keyup", () => {
  widthMachine.innerHTML = el.value;
});

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}

let textarea = document.querySelector(".resize-ta");
textarea.addEventListener("keyup", () => {
  textarea.style.height = calcHeight(textarea.value) + "px";
});



//-----------============== << EMAIL INFOR OUTPUT >> ==============-----------


function emailData() 
{


/*
//error trap to make sure email (at least one) is provided
//this works
try{
	let x = document.getElementsByClassName('content')[0].innerText ;
}

//this does not
catch(err) {
	x ;	
}
*/

var emails =  document.getElementsByClassName("content");
var values = Array.prototype.map.call(emails, function(el) {
	return el.innerText;
});
//console.log(values);



var subject = document.getElementById("subjectFormat").value;
var message = document.getElementsByClassName('textarea')[0].innerHTML;



// attempting to get files out -- easier to handle within FM

//const filesElement = document.getElementById("files");
//filesElement.addEventListener("change", handleFiles, false);


//var fileList = function handleFiles() {
//  const fileList = this.files; /* now you can work with the file list */
//  return fileList
//	}

//var files = document.getElementById("files").value;

//console.log(files)


var dataObject = { "emails" : values , "subjectText" : subject ,"messageText" : message };
//console.log(dataObject)

const obj = JSON.stringify(dataObject);
//console.log(obj)

FileMaker.PerformScript("send HTML EMail" , obj );

}





























