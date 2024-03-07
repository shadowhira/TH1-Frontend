const data = [
  {
    id: 1,
    question: "Is cow have 4 legs?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 2,
    question: "Is cow have 2 legs?",
    answer: ["Yes", "No"],
    correct: [1],
  },
  {
    id: 3,
    question: "What is the capital of Italy?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 4,
    question: "What is the capital of France?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 5,
    question: "What is the capital of Germany?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 6,
    question: "What is the capital of Italy?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 7,
    question: "What is the capital of France?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 8,
    question: "What is the capital of Germany?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 9,
    question: "What is the capital of Italy?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 10,
    question: "What is the capital of France?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 11,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 12,
    question: "What is the capital of Italy?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [2],
  },
  {
    id: 13,
    question: "What is the capital of France?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [0],
  },
  {
    id: 14,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 15,
    question: "What is the capital of Italy?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [2],
  },
  {
    id: 16,
    question: "What is the capital of France?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [0],
  },
  {
    id: 17,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 18,
    question: "What is the capital of Italy?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [2],
  },
  {
    id: 19,
    question: "What is the capital of France?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [0],
  },
  {
    id: 20,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 21,
    question: "What animal have 4 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [0, 1],
  },
  {
    id: 22,
    question: "What animal have 2 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 23,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 24,
    question: "What animal have 4 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [0, 1],
  },
  {
    id: 25,
    question: "What animal have 2 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 26,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 27,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 28,
    question: "What animal have 4 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [0, 1],
  },
  {
    id: 29,
    question: "What animal have 2 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 30,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 31,
    question: "What is capital of France?",
    correct: "London",
  },
  {
    id: 32,
    question: "What is capital of Germany?",
    correct: "Berlin",
  },
  {
    id: 33,
    question: "What is capital of Italy?",
    correct: "Rome",
  },
  {
    id: 34,
    question: "What is capital of France?",
    correct: "Paris",
  },
  {
    id: 35,
    question: "What is capital of Germany?",
    correct: "Berlin",
  },
  {
    id: 36,
    question: "What is capital of Italy?",
    correct: "Rome",
  },
  {
    id: 37,
    question: "What is capital of France?",
    correct: "Paris",
  },
  {
    id: 38,
    question: "What is capital of Germany?",
    correct: "Berlin",
  },
  {
    id: 39,
    question: "What is capital of Italy?",
    correct: "Rome",
  },
  {
    id: 40,
    question: "What is capital of France?",
    correct: "Paris",
  },
];

const LoadData = () => {
  questionList = document.getElementById("question-list");
  for (let i = 0; i < data.length; i++) {
    if (i < 10) {
      if (i === 0)
        questionList.innerHTML += `<h3 id="type1" >Type 1: True/False<h3>`;
      questionList.innerHTML += TrueFalseQuestion(data[i]);
    } else if (i < 20) {
      if (i === 10)
        questionList.innerHTML += `<h3 id="type2">Type 2: Chose on<h3>`;
      questionList.innerHTML += OneCorrectQuestion(data[i]);
    } else if (i < 30) {
      if (i === 20)
        questionList.innerHTML += `<h3 id="type3">Type 3: Multiple choice<h3>`;
      questionList.innerHTML += MultipleCorrectQuestion(data[i]);
    } else if (i < 40) {
      if (i === 30) questionList.innerHTML += `<h3 id="type4">Type 4: Text<h3>`;
      questionList.innerHTML += TextQuestion(data[i]);
    }
  }
};

const TrueFalseQuestion = (data) => {
  return ` 
            
            <li style="background-color:#dff2a6">
                <div class="question"> ${"Cau " + data.id + ": "} ${
    data.question
  }</div>
                <div class="answer">
                    <input type="radio" name="answer-question-${
                      data.id
                    }" value="0">${data.answer[0]}
                    <input type="radio" name="answer-question-${
                      data.id
                    }" value="1">${data.answer[1]}
            </li>
            `;
};
const OneCorrectQuestion = (data) => {
  return `
            
            <li style="background-color:#d2f9f9">
                <div class="question"> ${"Cau " + data.id + ": "} ${
    data.question
  }</div>
                <div class="answer">
                    <input type="radio" name="answer-question-${
                      data.id
                    }" value="0">${data.answer[0]}
                    <input type="radio" name="answer-question-${
                      data.id
                    }" value="1">${data.answer[1]}
                    <input type="radio" name="answer-question-${
                      data.id
                    }" value="2">${data.answer[2]}
                    <input type="radio" name="answer-question-${
                      data.id
                    }" value="3">${data.answer[3]}
            </li>
            `;
};
const MultipleCorrectQuestion = (data) => {
  return `
            
            <li style="background-color:#d2e9f9">
                <div class="question"> ${"Cau " + data.id + ": "} ${
    data.question
  }</div>
                <div class="answer">
                    <input type="checkbox" name="answer-question-${
                      data.id
                    }" value="0">${data.answer[0]}
                    <input type="checkbox" name="answer-question-${
                      data.id
                    }" value="1">${data.answer[1]}
                    <input type="checkbox" name="answer-question-${
                      data.id
                    }" value="2">${data.answer[2]}
                    <input type="checkbox" name="answer-question-${
                      data.id
                    }" value="3">${data.answer[3]}
            </li>
            `;
};
const TextQuestion = (data) => {
  return `
        
        <li style="background-color:#f9f2d2">
            <div class="question"> ${"Cau " + data.id + ": "} ${
    data.question
  }</div>
            <div class="answer">
                <input type="text" name="answer-question-${
                  data.id
                }" value="" placeholder="Type your answer">
        </li>
        `;
};

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  // CheckAnswer();
});

let score = 0;
const CheckAnswer = () => {
  document.querySelectorAll("input").forEach((item) => {
    item.disabled = true;
  });
  for (let i = 1; i < data.length + 1; i++) {
    if (i < 30) {
      let answer = document.querySelectorAll(
        `input[name="answer-question-${i}"]:Checked`
      );
      let yourAnswer = [];
      for (let j = 0; j < answer.length; j++) {
        yourAnswer.push(answer[j].value);
      }
      if (yourAnswer.length == 0) continue;
      let correct = data[i - 1].correct;
      if (CheckList(yourAnswer, correct)) {
        score++;
      }
    } else {
      let answer = document.querySelector(
        `input[name="answer-question-${i}"]`
      ).value;
      let correct = data[i - 1].correct;
      if (answer == correct) {
        score++;
      }
    }
  }
  console.log(score);
  document.getElementById("score").innerHTML = "Your score: " + score;
};

const CheckList = (yourAnswer, correct) => {
  if (yourAnswer.length != correct.length) return false;
  for (let i = 0; i < yourAnswer.length; i++) {
    if (correct.indexOf(Number(yourAnswer[i])) == -1) return false;
  }
  return true;
};

// const submitBtn = document.getElementById('submit');
// const confirmPopup = document.getElementById('result-popup');
// const resultPopup = document.getElementById('result-popup');
// const confirmYesBtn = document.getElementById('confirm-yes');
// const confirmNoBtn = document.getElementById('confirm-no');

// // Hiển thị popup xác nhận submit khi click vào nút "Submit"
// submitBtn.addEventListener('click', () => {
// //   confirmPopup.classList.remove('hidden');
//   document.getElementById('score').textContent = `Your score: ${score}`;
// });

// // Ẩn popup xác nhận submit khi click vào nút "Không"
// confirmNoBtn.addEventListener('click', () => {
//   confirmPopup.classList.add('hidden');
// });

// // Hiển thị popup thông báo submit thành công và tính điểm khi click vào nút "Có"
// confirmYesBtn.addEventListener('click', () => {
//   // Hiển thị điểm (score)
//   document.getElementById('score').textContent = `Your score: ${score}`;

//   confirmPopup.classList.add('hidden');
//   resultPopup.classList.remove('hidden');
// });

const form = document.getElementById("question-form");
const results = document.getElementById("survey-results");
let count = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements["name"]?.value;
  const dob = form.elements["date"]?.value;
  const cccd = form.elements["cccd"]?.value;

  for (let i = 1; i <= 40; i++) {
    const answer = form.elements[`answer-question-${i}`]?.value;

    if (answer) {
      count++;
    }
  }
  // const answer1 = form.elements["answer-question-1"]?.value;
  // const answer2 = form.elements["answer-question-2"]?.value;
  // const answer3 = form.elements["answer-question-3"]?.value;
  // const answer4 = form.elements["answer-question-4"]?.value;
  // const answer5 = form.elements["answer-question-5"]?.value;
  // const answer6 = form.elements["answer-question-6"]?.value;
  // const answer7 = form.elements["answer-question-7"]?.value;
  // const answer8 = form.elements["answer-question-8"]?.value;
  // const answer9 = form.elements["answer-question-9"]?.value;
  // const answer10 = form.elements["answer-question-10"]?.value;
  // const answer11= form.elements["answer-question-11"]?.value;
  // const answer12= form.elements["answer-question-12"]?.value;
  // const answer13 = form.elements["answer-question-13"]?.value;
  // const answer14 = form.elements["answer-question-14"]?.value;
  // const answer15 = form.elements["answer-question-15"]?.value;
  // const answer16 = form.elements["answer-question-16"]?.value;
  // const answer17 = form.elements["answer-question-17"]?.value;
  // const answer18 = form.elements["answer-question-18"]?.value;
  // const answer19 = form.elements["answer-question-19"]?.value;
  // const answer20 = form.elements["answer-question-20"]?.value;
  // const answer21 = form.elements["answer-question-21"]?.value;
  // const answer22 = form.elements["answer-question-22"]?.value;
  // const answer23 = form.elements["answer-question-23"]?.value;
  // const answer24 = form.elements["answer-question-24"]?.value;
  // const answer25 = form.elements["answer-question-25"]?.value;
  // const answer26 = form.elements["answer-question-26"]?.value;
  // const answer27 = form.elements["answer-question-27"]?.value;
  // const answer28 = form.elements["answer-question-28"]?.value;
  // const answer29 = form.elements["answer-question-29"]?.value;
  // const answer30 = form.elements["answer-question-30"]?.value;
  // const answer31 = form.elements["answer-question-31"]?.value;
  // const answer32 = form.elements["answer-question-32"]?.value;
  // const answer33 = form.elements["answer-question-33"]?.value;
  // const answer34 = form.elements["answer-question-34"]?.value;
  // const answer35 = form.elements["answer-question-35"]?.value;
  // const answer36 = form.elements["answer-question-36"]?.value;
  // const answer37 = form.elements["answer-question-37"]?.value;
  // const answer38 = form.elements["answer-question-38"]?.value;
  // const answer39 = form.elements["answer-question-39"]?.value;
  // const answer40 = form.elements["answer-question-40"]?.value;

  // Hiển thị kết quả

  results.innerHTML = `
      <h2>Your survey result:</h2>
      <p>Name: ${name}</p>
      <p>Date of birth: ${dob}</p>
      <p>Identity Number: ${cccd}</p>
      <p>Address: ${addr}</p>
      
     <p>Submitted: ${count}/40</p>
    `;
});
console.log(score);
