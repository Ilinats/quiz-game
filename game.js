let lastname = localStorage.getItem("fname");
console.log(lastname);
var questionIndex = Math.floor(Math.random() * 9);
var passedQuestions = 0;
var currentPoints = 0;
var passedQuestionsindex = [questionIndex];
var totalTime = 0;
const start = Date.now();
var duration;
var existingEntries = [];


function correctAnswer(a) {
    return a.correct;
}

function checkAnswer(btn) {

    if (passedQuestions == 14) {
        duration = Date.now() - start;

        var result = millisToMinutesAndSeconds(duration);

        localStorage.setItem("timePassed", JSON.stringify(result));

        addEntry();
    }

    setAllBtnsEnabled(false);

    if(questions[questionIndex].answers[btn.dataset.index].correct) 
        btn.classList.add('correct');
    else {
        btn.classList.add('wrong');
        document.querySelector("[data-index='"+questions[questionIndex].answers.findIndex(correctAnswer)+"']").classList.add('correct');
    }
        
    setTimeout(function() {
        btn.classList.remove('correct');
        btn.classList.remove('wrong');
        checkAnswerEx(btn.dataset.index);
        setAllBtnsEnabled(true);
    },1000);
}

function setAllBtnsEnabled(value) {
    var btns=document.getElementsByTagName('button');
    for(i=0;i<btns.length;i++){
        btns[i].disabled=!value;
    }     
}

function millisToMinutesAndSeconds() {
    var minutes = Math.floor(duration / 60000);
    var seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function addEntry() {
    var currentName = localStorage.getItem("fname");
    var currentPoints = localStorage.getItem("points");
    var currentTime = localStorage.getItem("timePassed");
    currentTime = currentTime.slice(1, -1);
    var currentDate = localStorage.getItem("date");
    
    existingEntries = JSON.parse(localStorage.getItem("top3BestPlayers"));
    
    if(existingEntries == null) 
        existingEntries = [];
   
        var entry = {
        name: currentName,
        date: currentDate,
        time: currentTime
    }

    existingEntries.push(entry);

    while(existingEntries.length > 3)
        existingEntries.pop();
    
    localStorage.setItem("top3BestPlayers", JSON.stringify(existingEntries));
}

function checkAnswerEx(which) {

    if(questions[questionIndex].answers[which].correct == true && passedQuestions < 14){
        currentPoints += questions[questionIndex].points;
        passedQuestions++;
        getQuestion();
    }
    else{
        window.location.href = "result.html";
        localStorage.setItem("points", currentPoints);
    }
}

function getQuestion() {

    if(passedQuestions < 5) {
        questionIndex = Math.floor(Math.random() * 9);

        if(passedQuestionsindex.includes(questionIndex))
            getQuestion();
        else
            passedQuestionsindex.push(questionIndex);

        loadQuestion();
    }

    if(passedQuestions >= 5 && passedQuestions < 10){
        questionIndex = Math.floor(Math.random() * 11) + 9;

        if(passedQuestionsindex.includes(questionIndex))
            getQuestion();
        else
            passedQuestionsindex.push(questionIndex);

        loadQuestion();
    }

    if(passedQuestions >= 10 && passedQuestions < 15){
        questionIndex = Math.floor(Math.random() * 11) + 20;

        if(passedQuestionsindex.includes(questionIndex))
            getQuestion();
        else
            passedQuestionsindex.push(questionIndex);

        loadQuestion();
    }
}

const questions = [
    {
        question: 'Кога е освободена България?',
        answers:[
            {text: '1768', correct: false},
            {text: '1777', correct: false},
            {text: '1878', correct: true},
            {text: '1876', correct: false}
        ],
        points: 100
    },

    {
        question: 'През коя година е основана България?',
        answers:[
            {text: '868', correct: false},
            {text: '681', correct: true},
            {text: '861', correct: false},
            {text: '876', correct: false}
        ],
        points: 100
    },

    {
        question: 'Кой е първият български цар, който сече монети?',
        answers:[
            {text: 'Симеон', correct: false},
            {text: 'Иван Асен II', correct: true},
            {text: 'Борис I', correct: false},
            {text: 'Василий II', correct: false}
        ],
        points: 100
    },

    {
        question: 'Кой от книжовниците НЕ е от времето на „Златния век”?',
        answers:[
            {text: 'Константин Преславски', correct: false},
            {text: 'Климент Охридски', correct: false},
            {text: 'Черноризец Храбър', correct: false},
            {text: 'Евтимий Търновски', correct: true}
        ],
        points: 100
    },

    {
        question: 'Кой първи прави пълен препис на „История славянобъллгарска”?',
        answers:[
            {text: 'Христаки Павлович', correct: false},
            {text: 'Димитър Кантакузин', correct: false},
            {text: 'Петър Берон', correct: false},
            {text: 'Стойко Владиславов', correct: true}
        ],
        points: 100
    },

    {
        question: 'През коя година избухва въстанието на Асеневци?',
        answers:[
            {text: '1185', correct: true},
            {text: '1186', correct: false},
            {text: '1184', correct: false},
            {text: '1187', correct: false}
        ],
        points: 100
    },
    
    {
        question: 'Коя е първата столица на България?',
        answers:[
            {text: 'Плиска', correct: true},
            {text: 'Преслав', correct: false},
            {text: 'София', correct: false},
            {text: 'Охрид', correct: false}
        ],
        points: 100
    },

    {
        question: 'С какво е най-известен хан Крум?',
        answers:[
            {text: 'Сключването на 30-годишен мир с Византия', correct: false},
            {text: 'Книжовната си дейност', correct: false},
            {text: 'Своето строителство', correct: false},
            {text: 'Създаването на първите писани закони', correct: true}
        ],
        points: 100
    },

    {
        question: 'Кой от официалните празници след Освобождението е отбелязван още през Възраждането?',
        answers:[
            {text: 'Ден на храбростта', correct: false},
            {text: 'Ден на Съединението', correct: false},
            {text: 'Ден на св.св. Кирил и Методий', correct: true},
            {text: 'Ден на Българската армия', correct: false}
        ],
        points: 100
    },

    {
        question: 'Българското въстание от 1040 г. е оглавено от:',
        answers:[
            {text: 'Георги Войтех', correct: false},
            {text: 'Алусиан', correct: false},
            {text: 'Петър Делян', correct: true},
            {text: 'Асен и Петър', correct: false}
        ],
        points: 300
    },

    {
        question: 'През коя година Първото българско царство пада по византийско робство?',
        answers:[
            {text: '1396', correct: false},
            {text: '1393', correct: false},
            {text: '1014', correct: false},
            {text: '1018', correct: true}
        ],
        points: 300
    },

    {
        question: 'Къде се намира "Златната Църква"?',
        answers:[
            {text: 'Плиска', correct: false},
            {text: 'София', correct: false},
            {text: 'Охрид', correct: false},
            {text: 'Преслав', correct: true}
        ],
        points: 300
    },

    {
        question: 'Коя е първата печатна българска книга?',
        answers:[
            {text: 'Рибният буквар', correct: false},
            {text: 'История славянобългарска', correct: false},
            {text: 'Неделник', correct: true},
            {text: 'Царственик', correct: false}
        ],
        points: 300
    },

    {
        question: 'Коя държавна институция обсъжда и приема законите в Република България?',
        answers:[
            {text: 'Конституционният съд', correct: false},
            {text: 'Президентството', correct: false},
            {text: 'Народното събрание', correct: true},
            {text: 'Министерският съвет', correct: false}
        ],
        points: 300
    },

    {
        question: 'Кой провъзгласява Калоян за крал през 1204 г.?',
        answers:[
            {text: 'Лъв X', correct: false},
            {text: 'Инокентий III', correct: true},
            {text: 'Григорий IX', correct: false},
            {text: 'Адриан V', correct: false}
        ],
        points: 300
    },

    {
        question: 'Как се казва убиецът на цар Асен?',
        answers:[
            {text: 'Иван', correct: false},
            {text: 'Калоян', correct: false},
            {text: 'Петър', correct: false},
            {text: 'Иванко', correct: true}
        ],
        points: 300
    },

    {
        question: 'Кога е възстановена Българската патриаршия?',
        answers:[
            {text: 'На събор в Лампсак през 1235 г.', correct: true},
            {text: 'След съюза на цар Калоян и Римската църква', correct: false},
            {text: 'След превземането на Константинопол от кръстоносците', correct: false},
            {text: 'С освещаването на храма „Св. Димитър” в Търново', correct: false}
        ],
        points: 300
    },

    {
        question: 'В Бориловия синодник се говори за преследванията срещу:',
        answers:[
            {text: 'Татарите', correct: false},
            {text: 'Боилите', correct: false},
            {text: 'Богомилите', correct: true},
            {text: 'Латинците', correct: false}
        ],
        points: 300
    },

    {
        question: 'Отбраната на Търновското царство срещу атаките на османците през 1393 г. се ръководи от:',
        answers:[
            {text: 'Иван Шишман', correct: false},
            {text: 'Патриарх Евтимий', correct: true},
            {text: 'Иван Срацимир', correct: false},
            {text: 'Йоан Александър', correct: false}
        ],
        points: 300
    },

    {
        question: 'Кога Велики Преслав е обявен за столица на българската държава?',
        answers:[
            {text: '852 г.', correct: false},
            {text: '893 г.', correct: true},
            {text: '889 г.', correct: false},
            {text: '891 г.', correct: false}
        ],
        points: 300
    },

    {
        question: 'Кой български примиер е убит с ятаган?',
        answers:[
            {text: 'Александър Стамболийски', correct: false},
            {text: 'Алеко Константинов', correct: false},
            {text: 'Бойко Борисов', correct: false},
            {text: 'Стефан Стамболов', correct: true}
        ],
        points: 500
    },

    {
        question: 'Кой е написал Стематографията?',
        answers:[
            {text: 'Д-р Петър Берон', correct: false},
            {text: 'Христофор Жефарович', correct: true},
            {text: 'Иван Вазов', correct: false},
            {text: 'Паисий Хилендарски', correct: false}
        ],
        points: 500
    },


    {
        question: 'Кой български владетел получава титлата "кесар"?',
        answers:[
            {text: 'Тервел', correct: true},
            {text: 'Крум', correct: false},
            {text: 'Омуртаг', correct: false},
            {text: 'Аспарух', correct: false}
        ],
        points: 500
    },

    {
        question: 'В кой проход българската армия, начело със Самуил, нанася поражение на византийската войска?',
        answers:[
            {text: 'Върбишки проход', correct: false},
            {text: 'Траянови врата', correct: true},
            {text: 'Ришки проход', correct: false},
            {text: 'Тревненски проход', correct: false}
        ],
        points: 500
    },

    {
        question: 'Кое е и кога е издадено първото българско списание?',
        answers:[
            {text: '„Любословие“, 1846 г.', correct: false},
            {text: '„Дунавски лебед“ 1844 г.', correct: false},
            {text: '„Любословие“, 1844 г.', correct: true},
            {text: 'Дунавски лебед“ 1846 г.', correct: false}
        ],
        points: 500
    },

    {
        question: 'Кога е организирана Велчовата завера?',
        answers:[
            {text: '1834 г.', correct: true},
            {text: '1856 г.', correct: false},
            {text: '1876 г.', correct: false},
            {text: '1860 г.', correct: false}
        ],
        points: 500
    },

    
    {
        question: 'Кога София става столица на Княжество България?',
        answers:[
            {text: '03.03.1878 г.', correct: false},
            {text: '02.05.1878 г.', correct: false},
            {text: '03.04.1879 г.', correct: true},
            {text: '05.04.1879 г.', correct: false}
        ],
        points: 500
    },


    {
        question: 'Срещу кого се изправя българската войска в битката при Клокотница?',
        answers:[
            {text: 'Балдуин I', correct: false},
            {text: 'Теодор Комнин', correct: true},
            {text: 'Филип I', correct: false},
            {text: 'Михаил II', correct: false}
        ],
        points: 500
    },

    {
        question: 'По чие време е битката при Тревненския проход?',
        answers:[
            {text: 'Борил', correct: false},
            {text: 'Калоян', correct: false},
            {text: 'Петър II', correct: false},
            {text: 'Иван Асен I', correct: true}
        ],
        points: 500
    },

    {
        question: 'Владетел на коя област е Момчил?',
        answers:[
            {text: 'Търново', correct: false},
            {text: 'Видин', correct: false},
            {text: 'Родопите', correct: true},
            {text: 'Добруджа', correct: false}
        ],
        points: 500
    },

    {
        question: 'Къде и кога умира Иван Шишман?',
        answers:[
            {text: 'През 1395 г. край Никопол', correct: true},
            {text: 'През 1393 г. край Търново', correct: false},
            {text: 'През 1389 г. край Косово поле', correct: false},
            {text: 'През 1396 г. край Никопол', correct: false}
        ],
        points: 500
    }
]

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
  
    if (dd < 10) {
      dd = '0' + dd
    }
  
    if (mm < 10) {
      mm = '0' + mm
    }
  
    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }

window.onload = function(){
    loadQuestion();
    var input = getDate();
    localStorage.setItem("date", input);
}

function loadQuestion(){
    document.getElementById('btn_1').innerHTML= questions[questionIndex].answers[0].text;
    document.getElementById('btn_2').innerHTML= questions[questionIndex].answers[1].text;
    document.getElementById('btn_3').innerHTML= questions[questionIndex].answers[2].text;
    document.getElementById('btn_4').innerHTML= questions[questionIndex].answers[3].text;
    document.getElementById('question').innerHTML= questions[questionIndex].question;
    document.getElementById('questionNumber').innerHTML= passedQuestions + 1;
}