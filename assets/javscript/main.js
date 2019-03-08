$(document).ready(function() {
  var object = {
    questions: [
      {
        question: "HTML stands for?",
        option1: "Hyper Transfer Makeup Learning",
        option2: "Hypertext Markup Language",
        option3: "Hypertext Makeup Language",
        option4: "Hypertext Make Language",
        answere: "Hypertext Markup Language",
        selected: "",
        message: "",
        correct: false
      },
      {
        question:
          "What is the correct CSS syntax for making all the <span> elements bold?",
        option1: "span {text-size:bold}",
        option2: "span {font-weight:bold}",
        option3: "<span style='font-size:bold'>",
        option4: "<span style='text-size:bold'>",
        answere: "span {font-weight:bold}",
        selected: "",
        message: "",
        correct: false
      },
      {
        question:
          "In the following code snippet, what value is given for the left margin:? if margin: 5px 10px 3px 8px;",
        option1: "3px",
        option2: "10px",
        option3: "8px",
        option4: "5px",
        answere: "8px",
        selected: "",
        message: "",
        correct: false
      },
      {
        question: "How do you add a comment in a CSS file?",
        option1: "/* this is a comment */",
        option2: "// this is a comment //",
        option3: "// this is a comment",
        option4: "<! this is a comment>",
        answere: "/* this is a comment */",
        selected: "",
        message: "",
        correct: false
      },
      {
        question:
          "What property is used to change the text color of an element?",
        option1: "fontcolor:",
        option2: "textcolor:",
        option3: "color:",
        option4: "font-color:",
        answere: "color:",
        selected: "",
        message: "",
        correct: false
      }
    ]
  };

  var index = 0;
  var timerCount = 30;
  var time;
  var displays = $("<ol>");
  var correct;
  var inCorrect;

  function hideQuestions() {
    $(".timer").css("display", "none");
    $(".question").css("display", "none");
    $(".option1").css("display", "none");
    $(".option2").css("display", "none");
    $(".option3").css("display", "none");
    $(".option4").css("display", "none");
  }

  function showQuestions() {
    $(".timer").css("display", "block");
    $(".question").css("display", "block");
    $(".option1").css("display", "block");
    $(".option2").css("display", "block");
    $(".option3").css("display", "block");
    $(".option4").css("display", "block");
  }

  function hideOutput() {
    $(".question-sec2").css("display", "none");
    $(".message").css("display", "none");
    $(".option1-sec2").css("display", "none");
    $(".option2-sec2").css("display", "none");
    $(".option3-sec2").css("display", "none");
    $(".option4-sec2").css("display", "none");
  }

  function showOutput() {
    $(".question-sec2").css("display", "block");
    $(".message").css("display", "block");
    $(".option1-sec2").css("display", "block");
    $(".option2-sec2").css("display", "block");
    $(".option3-sec2").css("display", "block");
    $(".option4-sec2").css("display", "block");
  }

  function setQuestions() {
    $(".question").text(object.questions[index].question);

    // adding class
    if (index === 0) {
      $(".option1").addClass("option");
      $(".option2").addClass("option");
      $(".option3").addClass("option");
      $(".option4").addClass("option");
    }

    $(".option1").text(object.questions[index].option1);
    $(".option2").text(object.questions[index].option2);
    $(".option3").text(object.questions[index].option3);
    $(".option4").text(object.questions[index].option4);
  }

  function setOutput() {
    $(".question-sec2").text(object.questions[index].question);

    if (
      $(".message").hasClass("green") ||
      $(".message").hasClass("red") ||
      $(".message").hasClass("blue")
    ) {
      $(".message").removeClass("green");
      $(".message").removeClass("red");
      $(".message").removeClass("blue");
    }

    if (object.questions[index].correct === true) {
      $(".message").addClass("green");
    } else if (object.questions[index].message === "You ran out of TIME!") {
      $(".message").addClass("blue");
      $(".message").removeClass("red");
    } else {
      $(".message").addClass("red");
    }

    $(".message").text(object.questions[index].message);

    if (
      $(".option1-sec2").hasClass("green") ||
      $(".option1-sec2").hasClass("red")
    ) {
      $(".option1-sec2").removeClass("green");
      $(".option1-sec2").removeClass("red");
    }

    if (
      $(".option2-sec2").hasClass("green") ||
      $(".option2-sec2").hasClass("red")
    ) {
      $(".option2-sec2").removeClass("green");
      $(".option2-sec2").removeClass("red");
    }

    if (
      $(".option3-sec2").hasClass("green") ||
      $(".option3-sec2").hasClass("red")
    ) {
      $(".option3-sec2").removeClass("green");
      $(".option3-sec2").removeClass("red");
    }

    if (
      $(".option4-sec2").hasClass("green") ||
      $(".option4-sec2").hasClass("red")
    ) {
      $(".option4-sec2").removeClass("green");
      $(".option4-sec2").removeClass("red");
    }

    if (object.questions[index].selected === object.questions[index].answere) {
      if (object.questions[index].answere === object.questions[index].option1) {
        $(".option1-sec2").addClass("green");
      } else if (
        object.questions[index].answere === object.questions[index].option2
      ) {
        $(".option2-sec2").addClass("green");
      } else if (
        object.questions[index].answere === object.questions[index].option3
      ) {
        $(".option3-sec2").addClass("green");
      } else if (
        object.questions[index].answere === object.questions[index].option4
      ) {
        $(".option4-sec2").addClass("green");
      }
    } else {
      if (object.questions[index].answere === object.questions[index].option1) {
        $(".option1-sec2").addClass("green");
      } else if (
        object.questions[index].answere === object.questions[index].option2
      ) {
        $(".option2-sec2").addClass("green");
      } else if (
        object.questions[index].answere === object.questions[index].option3
      ) {
        $(".option3-sec2").addClass("green");
      } else if (
        object.questions[index].answere === object.questions[index].option4
      ) {
        $(".option4-sec2").addClass("green");
      }

      if (
        object.questions[index].selected === object.questions[index].option1
      ) {
        $(".option1-sec2").addClass("red");
      } else if (
        object.questions[index].selected === object.questions[index].option2
      ) {
        $(".option2-sec2").addClass("red");
      } else if (
        object.questions[index].selected === object.questions[index].option3
      ) {
        $(".option3-sec2").addClass("red");
      } else if (
        object.questions[index].selected === object.questions[index].option4
      ) {
        $(".option4-sec2").addClass("red");
      }
    }

    $(".option1-sec2").text(object.questions[index].option1);
    $(".option2-sec2").text(object.questions[index].option2);
    $(".option3-sec2").text(object.questions[index].option3);
    $(".option4-sec2").text(object.questions[index].option4);
  }

  function toCheck() {
    if (object.questions[index].selected === object.questions[index].answere) {
      object.questions[index].message = "You got it CORRECT";
      object.questions[index].correct = true;
    } else {
      object.questions[index].message = "It is WRONG";
      object.questions[index].correct = false;
    }
  }

  function Questions() {
    hideOutput();

    timerCount = 30;

    setQuestions();
    showQuestions();

    time = setInterval(function() {
      $(".timer").text("you are left with " + timerCount + " seconds");
      timerCount--;

      if (timerCount === 0) {
        clearInterval(time);

        hideQuestions();

        toCheck();

        object.questions[index].message = "You ran out of TIME!";

        setOutput();

        showOutput();

        index++;

        if (index < 5) {
          setTimeout(Questions, 3000);
        } else {
          setTimeout(function() {
            hideOutput();

            $(".button").css("display", "block");

            displayEndGame();
          }, 3000);
        }
      }
    }, 1000);
  }

  function displayEndGame() {
    displays.empty();

    displays.css("list-style-type", "none");
    displays.css("display", "block");

    correct = 0;
    inCorrect = 0;

    for (var i = 0; i < object.questions.length; i++) {
      if (object.questions[i].correct === true) {
        correct++;
      } else {
        inCorrect++;
      }
    }

    var correctDisplay = $("<li>");
    correctDisplay.text("You got " + correct + " correct");
    displays.append(correctDisplay);

    var inCorrectDisplay = $("<li>");
    inCorrectDisplay.text("You got " + inCorrect + " wrong");
    displays.append(inCorrectDisplay);

    $(".conts").append(displays);
  }

  $(".option1").on("click", function() {
    object.questions[index].selected = object.questions[index].option1;

    Output();
  });

  $(".option2").on("click", function() {
    object.questions[index].selected = object.questions[index].option2;

    Output();
  });

  $(".option3").on("click", function() {
    object.questions[index].selected = object.questions[index].option3;

    Output();
  });

  $(".option4").on("click", function() {
    object.questions[index].selected = object.questions[index].option4;

    Output();
  });

  function Output() {
    clearInterval(time);

    hideQuestions();

    toCheck();

    setOutput();
    showOutput();

    index++;

    if (index < 5) {
      setTimeout(Questions, 3000);
    } else {
      setTimeout(function() {
        hideOutput();

        $(".button").attr("value", "Take QUIZ Again!");

        $(".button").css("display", "block");
        displayEndGame();
      }, 3000);
    }
  }

  $(".button").on("click", function() {
    index = 0;

    $(".button").css("display", "none");
    $(".row2container").css("display", "none");

    displays.css("display", "none");

    Questions();
  });

  hideQuestions();
});
