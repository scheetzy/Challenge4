
const startButton = document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')
const timeH = document.querySelector('h2');
let timeSecond = 60;


timeH.innerHTML = `00:${timeSecond}`;



function displayTime(second){
       const min = Math.floor (second / 60);
       const sec = Math.floor (second % 60);
       timeH.innerHTML= `${min}:${sec}`
}

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question') 
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currectQuestionIndex;
let quizScore =0;

nextbutton.addEventListener('click' ,() =>{
       currectQuestionIndex++
       setnextQuestion()
})

function startGame(){
       startButton.classList.add('hide')
       shuffledQuestions=question.sort(() =>Math.random() -0.5)
       currectQuestionIndex=0;
       questionContainerElement.classList.remove('hide')
       setnextQuestion()
       quizScore=0
       const countDown = setInterval (()=>{
              timeSecond--;
             displayTime(timeSecond);
              if(timeSecond <= 0 || timeSecond < 1){
                     clearInterval(countDown);
              }
       },1000)
}

function setnextQuestion(){
       resetState();
       showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question) {
       questionElement.innerText= question.question;
       question.answers.forEach((answer) =>{
              const button =document.createElement('button')
              button.innerText=answer.text;
              button.classList.add('btn')
              if( answer.correct ) {
                     button.dataset.correct =answer.correct
              }
              button.addEventListener('click' ,selectAnswer)
              answerButtonsElement.appendChild(button)
       })
}

function resetState(){
       clearStatusClass(document.body)
       nextbutton.classList.add('hide')
       while(answerButtonsElement.firstChild) {
              answerButtonsElement.removeChild(answerButtonsElement.firstChild)
       }
}

function selectAnswer(e){
       const selectedButton=e.target
       const correct =selectedButton.dataset.correct

       setStatusClass(document.body,correct)
       Array.from(answerButtonsElement.children).forEach((button)=>{
             setStatusClass(button,button.dataset.correct)   
       })
       if (shuffledQuestions.length > currectQuestionIndex +1){
              nextbutton.classList.remove("hide")
       }else {
              startButton.innerText ="restart"
              startButton.classList.remove("hide")
       }
       if (selectedButton.dataset = correct) {
              quizScore++
       }
       document.getElementById('right-answers').innerText=quizScore    
       console.log(quizScore)
}

function setStatusClass(element,correct){
       clearStatusClass(element)
       if(correct){
              element.classList.add("correct")
       }else  {
              element.classList.add("wrong")
       }
}

function clearStatusClass(element){
       element.classList.remove('correct')
       element.classList.remove('wrong')
}

const question =[
    {
         question:'which one of these is a Javascript framework?',
         answers :[
                { text: 'python', correct: false},
                { text: 'Django', correct: false}, 
                { text: 'React', correct: true},
                { text: 'Eclipse', correct: false},
         ],
    },
    {
         question:'Arrays in JavaScript can be used to store ____.',
         answers :[
                { text: 'number and strings', correct: false},
                { text: 'other arrays', correct: false}, 
                { text: 'booleans', correct: false},
                { text: 'all of the above', correct: true},
         ],
    },
    {
        question:'Commonly used data types DO NOT include?',
        answers :[
               { text: 'strings', correct: false},
               { text: 'booleans', correct: false}, 
               { text: 'alerts', correct: true},
               { text: 'numbers', correct: false},
        ],
   },
   {
         question:'The condition in an if/ else statement is enclosed with ___.',
         answers :[
                { text: 'quotes', correct: false},
                { text: 'curly brackets', correct: true}, 
                { text: 'parenthesis', correct: false},
                { text: 'square brackets', correct: false},
         ],
    },
]

