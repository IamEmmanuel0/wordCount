//Word Count

//creating Html elements
let main = document.createElement("main");
let form = document.createElement("form");
let text = document.createElement("textarea");
let numCount = document.createElement("h1");
let title = document.createElement("h2");

title.innerHTML = "Number of Word's";
numCount.innerHTML = "0";

//Append elements to Html
document.body.appendChild(main);
main.appendChild(form);
form.appendChild(text);
main.appendChild(title);
main.appendChild(numCount);

// Styling body
document.body.style.background = 'honeydew';
document.body.style.textAlign = 'center';
document.body.style.marginTop = '50px';

text.cols = 30;
text.rows = 10;

//Word Count function
text.addEventListener("input", () => {
    let words = text.value.split(' ');
    let count = words.length

    for (let i = 0; i < words.length; i++) {
        const a = words[i];
        if (a == "") {
            count--;
        }
        numCount.innerText = count;
    }
});




//  Contact Me @ 
//  Ezehemmanuel62@gmail.com 
//  https://www.twitter.com/Ezehemmanuel62 