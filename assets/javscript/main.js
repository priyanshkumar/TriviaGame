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
        message: "You got it correct!",
        correct: false,
        reached: false
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
        correct: false,
        reached: false
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
        correct: false,
        reached: false
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
        correct: false,
        reached: false
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
        correct: false,
        reached: false
      }
    ]
  };

  var index = 0;
  var timerCount = 30;

  function hideSection1() {
    $(".timer").css("display", "none");
    $(".question").css("display", "none");
    $(".option1").css("display", "none");
    $(".option2").css("display", "none");
    $(".option3").css("display", "none");
    $(".option4").css("display", "none");
  }

  function showSection1() {
    $(".timer").css("display", "block");
    $(".question").css("display", "block");
    $(".option1").css("display", "block");
    $(".option2").css("display", "block");
    $(".option3").css("display", "block");
    $(".option4").css("display", "block");
  }

  function hideSection2() {
    $(".question-sec2").css("display", "none");
    $(".message").css("display", "none");
    $(".option1-sec2").css("display", "none");
    $(".option2-sec2").css("display", "none");
    $(".option3-sec2").css("display", "none");
    $(".option4-sec2").css("display", "none");
  }

  function showSection2() {
    $(".question-sec2").css("display", "block");
    $(".message").css("display", "block");
    $(".option1-sec2").css("display", "block");
    $(".option2-sec2").css("display", "block");
    $(".option3-sec2").css("display", "block");
    $(".option4-sec2").css("display", "block");
  }

  function setQuestions(index) {
    $(".question").text(object.questions[index].question);

    // adding class
    $(".option1").addClass("option");
    $(".option2").addClass("option");
    $(".option3").addClass("option");
    $(".option4").addClass("option");

    $(".option1").text(object.questions[index].option1);
    $(".option2").text(object.questions[index].option2);
    $(".option3").text(object.questions[index].option3);
    $(".option4").text(object.questions[index].option4);
  }

  function setOutput(index) {
    $(".question-sec2").text(object.questions[index].question);

    if (object.questions[index].correct === true) {
      $(".message").addClass("green");
    } else {
      $(".message").addClass("red");
    }

    $(".message").text(object.questions[index].message);

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

  function toCheck(index) {
    if (object.questions[index].selected === object.questions[index].answere) {
      object.questions[index].message = "You got it CORRECT";
      object.questions[index].correct = true;
    } else {
      object.questions[index].message = "It is WRONG";
      object.questions[index].correct = false;
    }
  }

  function Section1(index, timer) {
    console.log(index);
    setQuestions(index);
    showSection1();

    $(".option1").on("click", function() {
      object.questions[index].selected = object.questions[index].option1;
      toCheck(index);
      object.questions[index].reached = true;
      clearInterval(timer);
      hideSection1();
    });

    $(".option2").on("click", function() {
      object.questions[index].selected = object.questions[index].option1;
      toCheck(index);
      object.questions[index].reached = true;
      clearInterval(timer);
      hideSection1();
    });

    $(".option3").on("click", function() {
      object.questions[index].selected = object.questions[index].option1;
      toCheck(index);
      object.questions[index].reached = true;
      clearInterval(timer);
      hideSection1();
    });

    $(".option4").on("click", function() {
      object.questions[index].selected = object.questions[index].option1;
      toCheck(index);
      object.questions[index].reached = true;
      clearInterval(timer);
      hideSection1();
    });

    index++;
  }
  hideSection1();

  function decrementQuestion(i) {
    setInterval(function() {
      mainSection1(i);
    }, 3 * 1000);
  }

  function mainSection1() {
    var timer = setInterval(function() {
      $(".timer").text("You have " + timerCount + " seconds");
      timerCount -= 1;
      showSection1();
      Section1(index, timer);
      if (timerCount === 0) {
        clearInterval(timer);
        hideSection1();
      }
    }, 1000);
  }

  $(".button").on("click", function() {
    $(".button").css("display", "none");
    $(".row2container").css("display", "none");
    mainSection1();
  });
});
