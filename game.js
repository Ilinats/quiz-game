let lastname = localStorage.getItem("fname");
console.log(lastname);
var questionIndex = Math.floor(Math.random() * 9);
var passedQuestions = 0;
var currentPoints = 0;
var passedQuestionsindex = [questionIndex];

function correctAnswer(a) {
    return a.correct;
}

function checkAnswer(btn) {

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
        question: 'Кой египетски град е основан от Александър Велики?',
        answers:[
            {text: 'Кайро', correct: false},
            {text: 'Вавилон', correct: false},
            {text: 'Константинопол', correct: false},
            {text: 'Aлександрия', correct: true}
        ],
        points: 100
    },

    {
        question: 'През коя година започва Първата световна война?',
        answers:[
            {text: '1912 г.', correct: false},
            {text: '1913 г.', correct: false},
            {text: '1939 г.', correct: false},
            {text: '1914 г. ', correct: true}
        ],
        points: 100
    },

    {
        question: 'В гръцката митология, през коя война е убит героят Ахил?',
        answers:[
            {text: 'Троянска война', correct: true},
            {text: 'Трета свещена война', correct: false},
            {text: 'Гръко-персийски войни', correct: false},
            {text: 'Критска война', correct: false}
        ],
        points: 100
    },


    {
        question: 'Каква е причината Титаник да потъне?',
        answers:[
            {text: 'Престрелка', correct: false},
            {text: 'Блъска го самолет', correct: false},
            {text: 'Удря се в айсберг', correct: true},
            {text: 'Кракен го потапя', correct: false}
        ],
        points: 100
    },

    {
        question: 'На кого е кръстен гръцкият град Атина?',
        answers:[
            {text: 'Перикъл', correct: false},
            {text: 'Пърси Джаксън', correct: false},
            {text: 'Александър Македонски', correct: false},
            {text: 'Богинята Атина', correct: true}
        ],
        points: 100
    },

    {
        question: 'Как гърците навлизат в Троя?',
        answers:[
            {text: 'На коне', correct: false},
            {text: 'Пеша', correct: false},
            {text: 'С дървен кон', correct: true},
            {text: 'С кола', correct: false}
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
        question: 'Откъде идва Сократ?',
        answers:[
            {text: 'Рим', correct: false},
            {text: 'Месопотамия', correct: false},
            {text: 'Древна Гърция', correct: true},
            {text: 'Вавилон', correct: false}
        ],
        points: 300
    },

    {
        question: 'Какво има на главата на Исус, когато е разпнат?',
        answers:[
            {text: 'Кръст', correct: false},
            {text: 'Тиара', correct: false},
            {text: 'Корона от тръни', correct: true},
            {text: 'Чувал', correct: false}
        ],
        points: 300
    },

    {
        question: 'Според популярния мит гробницата на кой фараон е била прокълната?',
        answers:[
            {text: 'Хеопс', correct: false},
            {text: 'Тутанкамон', correct: true},
            {text: 'Хатшепсут', correct: false},
            {text: 'Рамзес I', correct: false}
        ],
        points: 300
    },

    {
        question: 'Коя държава първа използва ядрено оръжие?',
        answers:[
            {text: 'Англия', correct: false},
            {text: 'Япония', correct: false},
            {text: 'Русия', correct: false},
            {text: 'САЩ', correct: true}
        ],
        points: 300
    },

    {
        question: 'Исус Христос е кръстен във водата на коя река?',
        answers:[
            {text: 'Йордан', correct: true},
            {text: 'Тодор', correct: false},
            {text: 'Георги', correct: false},
            {text: 'Йоан', correct: false}
        ],
        points: 300
    },

    {
        question: 'Спартанците започват да тренират на каква възраст?',
        answers:[
            {text: '7', correct: true},
            {text: '10', correct: false},
            {text: '6', correct: false},
            {text: '14', correct: false}
        ],
        points: 300
    },

    {
        question: 'Библейският цар Соломон е най-известен с какво?',
        answers:[
            {text: 'Със своя гняв', correct: false},
            {text: 'Със своята мъдрост', correct: true},
            {text: 'Със своята хитрост', correct: false},
            {text: 'Със своята милост', correct: false}
        ],
        points: 300
    },

    {
        question: 'Ромул и Рем са митичните основатели на кой град?',
        answers:[
            {text: 'Спарта', correct: false},
            {text: 'Атина', correct: false},
            {text: 'Рим', correct: true},
            {text: 'Вавилон', correct: false}
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
        question: 'Кой римски военачалник изрече прословутото „Дойдох, видях, победих“?',
        answers:[
            {text: 'Юлий Цезар', correct: true},
            {text: 'Гундобад', correct: false},
            {text: 'Юстиниан', correct: false},
            {text: 'Флавий Евсебий', correct: false}
        ],
        points: 500
    },

    {
        question: 'Коя жена е обвинена в ерес и изгорена на клада от англичаните на 30 май 1431 г.?',
        answers:[
            {text: 'Жана д´Арк', correct: true},
            {text: 'Мария Кюри', correct: false},
            {text: 'Малеус Малефиарум', correct: false},
            {text: 'Титуба', correct: false}
        ],
        points: 500
    },

    {
        question: 'Коя държава е наричана още "Бряг на слоновата кост"?',
        answers:[
            {text: 'Индия', correct: false},
            {text: 'Кот д´Ивоар', correct: true},
            {text: 'Бенин', correct: false},
            {text: 'Того', correct: false}
        ],
        points: 500
    },

    {
        question: 'Кой пръв използва термина "Желязна завеса"?',
        answers:[
            {text: 'Уинстън Чърчил', correct: true},
            {text: 'Ото Фон Бисмарк', correct: false},
            {text: 'Робърт Клайв', correct: false},
            {text: 'Джефри ван Орден', correct: false}
        ],
        points: 500
    },

    {
        question: 'Кой от следните не е психоаналитик?',
        answers:[
            {text: 'Зигмунд Фройд', correct: false},
            {text: 'Анна Фройд', correct: false},
            {text: 'Бъръс Скинър', correct: true},
            {text: 'Ърнест Джоунс', correct: false}
        ],
        points: 500
    },

    {
        question: 'Драхмата била националната валута на коя държава?',
        answers:[
            {text: 'Гърция', correct: true},
            {text: 'Турция', correct: false},
            {text: 'Чехия', correct: false},
            {text: 'Австрия', correct: false}
        ],
        points: 500
    }
]

window.onload = function(){
    loadQuestion();
}

function loadQuestion(){
    document.getElementById('btn_1').innerHTML= questions[questionIndex].answers[0].text;
    document.getElementById('btn_2').innerHTML= questions[questionIndex].answers[1].text;
    document.getElementById('btn_3').innerHTML= questions[questionIndex].answers[2].text;
    document.getElementById('btn_4').innerHTML= questions[questionIndex].answers[3].text;
    document.getElementById('question').innerHTML= questions[questionIndex].question;
    document.getElementById('questionNumber').innerHTML= passedQuestions + 1;
    //document.getElementById('questionPoints').innerHTML= questions[questionIndex].points;
}