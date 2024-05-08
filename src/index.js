import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var me = {
  "samuelss": {
    "full_name": "Samuel Santos da Silva",
    "contact": "helloATsamuelss.dev",
    "expertise": [
      "Systems Administrator",
      "Web Developer",
      "Support Ninja"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "abilities": [
      "Provision, Develop, Deploy, Maintain",
      "Infrastructure and Networking",
      "Automation and Scripting",
      "Operating Systems",
      "Cloud Computing",
      "IaaC and Orchestration",
      "Virtualization and Containers",
      "Observability",
      "Incident Resolution",
      "Efficient Communication",
      "Fast and Self Learning",
      "Resilience"
    ]
  }
}
var meStr = JSON.stringify(me, undefined, 4);

for (let a = 0; a < meStr.length; a++) {
  console.log(meStr.charAt(a));
}

const codePre = document.createElement("pre");
codePre.classList.add("codePre");

codePre.innerHTML = meStr;

document.body.appendChild(codePre);

let words = ["samuelss","full_name","expertise","languages","abilities", "contact"];

function colorOn(){

  let str = codePre.innerHTML;
  let newStr = "";

  //newStr = str.replace(/[{}\[\]]+/g, "cC");

  //replace curly brackets
  str = str.replace(/[{]+/g, "<span class='curls'>{</span>");
  str = str.replace(/[}]+/g, "<span class='curls'>}</span>");

  //replace square brackets
  str = str.replace(/[\[]+/g, "<span class='bracks'>[</span>");
  str = str.replace(/[\]]+/g, "<span class='bracks'>]</span>");

  codePre.innerHTML = newStr;


  for (let i = 0; i < words.length; i++){

    let word = words[i];
    
    newStr = str.replace("\""+word+"\"", "<span class='props'>\""+word+"\"</span>");
    
    str = newStr;

  };

  codePre.innerHTML = newStr;

}
colorOn();