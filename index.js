const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value;
    // console.log(typedText)
    typedText = typedText.toLowerCase(); 
    // console.log(typedText)
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    // console.log(typedText)
    let words = typedText.split(/\s/)
    // console.log(words)
    
    const letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
    const wordCounts = {};
    for (let j = 0; j < words.length ; j++){
        let currentword = words[j];
        if (wordCounts[currentword] === undefined){
            wordCounts[currentword] = 1;
        } else {
            wordCounts[currentword]++;
        }
    }
    for (let word in wordCounts) {
        const span = document.createElement("span");
        const textContent = `"${word}": ${wordCounts[word]}, `;
        span.innerText = textContent;
        const words = document.getElementById("wordsDiv");
        words.appendChild(span);
    }
    
});  
