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
        selected: ""
      },
      {
        question:
          "What is the correct CSS syntax for making all the <span> elements bold?",
        option1: "span {text-size:bold}",
        option2: "span {font-weight:bold}",
        option3: "<span style='font-size:bold'>",
        option4: "<span style='text-size:bold'>",
        answere: "span {font-weight:bold}",
        selected: ""
      },
      {
        question:
          "In the following code snippet, what value is given for the left margin:? if margin: 5px 10px 3px 8px;",
        option1: "3px",
        option2: "10px",
        option3: "8px",
        option4: "5px",
        answere: "8px",
        selected: ""
      },
      {
        question: "How do you add a comment in a CSS file?",
        option1: "/* this is a comment */",
        option2: "// this is a comment //",
        option3: "// this is a comment",
        option4: "<! this is a comment>",
        answere: "/* this is a comment */",
        selected: ""
      },
      {
        question:
          "What property is used to change the text color of an element?",
        option1: "fontcolor:",
        option2: "textcolor:",
        option3: "color:",
        option4: "font-color:",
        answere: "color:",
        selected: ""
      }
    ]
  };

  function hideButton() {
    $(".option1").css("display", "none");
    $(".option2").css("display", "none");
    $(".option3").css("display", "none");
    $(".option4").css("display", "none");
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

  function toCheck() {}

  hideButton();
});
