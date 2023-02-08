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
var subject = document.getElementById("subjectFormat").value;
var message = document.getElementsByClassName('textarea')[0].innerHTML;
var dataObject = { "emails" : values , "subjectText" : subject ,"messageText" : message };
//console.log(dataObject)

const obj = JSON.stringify(dataObject);
//console.log(obj)

FileMaker.PerformScript("send HTML EMail" , obj );

}

function getEmail(_refElement) {
  //pass referring element for return trip when adding email
  //var emailREf = "To";
  FileMaker.PerformScript("pop EMail" , _refElement );

}

function addFiles()
{

  FileMaker.PerformScript("add Files");

}





















