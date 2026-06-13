const questions = [
  ["Anatomy", "Which organelle produces most ATP?", ["Nucleus", "Mitochondrion", "Ribosome", "Golgi apparatus"], 1, "Mitochondria produce most ATP during cellular respiration."],
  ["Anatomy", "What is the main job of red blood cells?", ["Fight infection", "Carry oxygen", "Clot blood", "Digest food"], 1, "Red blood cells carry oxygen using hemoglobin."],
  ["Anatomy", "Which structure connects muscle to bone?", ["Ligament", "Tendon", "Cartilage", "Neuron"], 1, "Tendons connect muscle to bone."],
  ["Anatomy", "Where does most nutrient absorption occur?", ["Stomach", "Small intestine", "Large intestine", "Esophagus"], 1, "Most nutrients are absorbed in the small intestine."],
  ["Anatomy", "Which part of the brain controls balance?", ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"], 0, "The cerebellum helps with balance and coordination."],

  ["Life Science", "Which molecule stores genetic information?", ["ATP", "DNA", "Glucose", "Protein"], 1, "DNA stores genetic instructions."],
  ["Life Science", "In DNA, adenine pairs with:", ["Cytosine", "Guanine", "Thymine", "Uracil"], 2, "Adenine pairs with thymine in DNA."],
  ["Life Science", "The basic unit of life is the:", ["Atom", "Cell", "Tissue", "Organ"], 1, "The cell is the basic unit of life."],
  ["Life Science", "Plants make glucose by:", ["Osmosis", "Photosynthesis", "Fermentation", "Digestion"], 1, "Photosynthesis uses light energy to make glucose."],
  ["Life Science", "Mushrooms belong to which kingdom?", ["Animalia", "Plantae", "Fungi", "Protista"], 2, "Mushrooms are fungi."],

  ["Physical Science", "Matter with definite volume but no definite shape is:", ["Solid", "Liquid", "Gas", "Plasma"], 1, "Liquids keep volume but take the container shape."],
  ["Physical Science", "The symbol for sodium is:", ["S", "Na", "So", "N"], 1, "Sodium is Na."],
  ["Physical Science", "A pH below 7 is:", ["Acidic", "Basic", "Neutral", "Salty"], 0, "Acids have pH values below 7."],
  ["Physical Science", "A negative subatomic particle is a:", ["Proton", "Neutron", "Electron", "Nucleus"], 2, "Electrons are negative."],
  ["Physical Science", "Density equals:", ["Mass divided by volume", "Volume divided by mass", "Force times distance", "Mass times acceleration"], 0, "Density = mass / volume."],

  ["Scientific Reasoning", "The variable changed on purpose is the:", ["Dependent variable", "Independent variable", "Control", "Conclusion"], 1, "The independent variable is changed by the experimenter."],
  ["Scientific Reasoning", "The variable measured is the:", ["Dependent variable", "Independent variable", "Constant", "Control group"], 0, "The dependent variable is measured."],
  ["Scientific Reasoning", "A control group is used for:", ["Comparison", "Guessing", "Changing all variables", "Avoiding data"], 0, "A control group gives a comparison."],
  ["Scientific Reasoning", "A hypothesis is a:", ["Proven law", "Testable prediction", "Final answer", "Random opinion"], 1, "A hypothesis is testable."],
  ["Scientific Reasoning", "Best graph for change over time:", ["Line graph", "Pie chart", "Punnett square", "Table only"], 0, "Line graphs show trends over time."],

  ["Microbiology", "Bacteria are:", ["Prokaryotes", "Eukaryotes", "Viruses", "Fungi"], 0, "Bacteria are prokaryotic."],
  ["Microbiology", "Viruses reproduce by:", ["Dividing alone", "Using host cells", "Photosynthesis", "Making seeds"], 1, "Viruses need host cells to reproduce."],
  ["Microbiology", "Which cells produce antibodies?", ["Red blood cells", "Platelets", "B cells", "Neurons"], 2, "B cells produce antibodies."],
  ["Microbiology", "First line of defense includes:", ["Skin", "Antibodies only", "Hormones", "Red blood cells"], 0, "Skin helps block pathogens."],
  ["Microbiology", "Antibiotics treat:", ["Bacterial infections", "Viral infections", "All allergies", "All cancers"], 0, "Antibiotics treat bacterial infections."]
];

let currentIndex = 0;
let score = 0;
let answered = false;

function showQuestion() {
  const q = questions[currentIndex];
  answered = false;

  document.getElementById("progress").textContent = "Question " + (currentIndex + 1) + " of " + questions.length;
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("category").textContent = q[0];
  document.getElementById("status").textContent = "Tap an answer";
  document.getElementById("question").textContent = q[1];
  document.getElementById("feedback").textContent = "";
  document.getElementById("explanation").textContent = "";

  const choicesBox = document.getElementById("choices");
  choicesBox.innerHTML = "";

  q[2].forEach(function(choice, index) {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice;
    button.onclick = function() {
      chooseAnswer(index);
    };
    choicesBox.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (answered) return;

  const q = questions[currentIndex];
  const buttons = document.querySelectorAll(".choice");
  answered = true;

  if (index === q[3]) {
    score++;
    buttons[index].classList.add("correct");
    document.getElementById("feedback").textContent = "Correct!";
    document.getElementById("status").textContent = "Correct";
  } else {
    buttons[index].classList.add("wrong");
    buttons[q[3]].classList.add("correct");
    document.getElementById("feedback").textContent = "Not quite.";
    document.getElementById("status").textContent = "Review";
  }

  buttons.forEach(function(button) {
    button.disabled = true;
  });

  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("explanation").textContent = q[4];
}

function checkAnswer() {
  document.getElementById("feedback").textContent = "Tap one of the answer choices.";
}

function nextQuestion() {
  if (!answered) {
    document.getElementById("feedback").textContent = "Answer this question first.";
    return;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const percent = Math.round((score / questions.length) * 100);

  document.getElementById("progress").textContent = "Quiz complete";
  document.getElementById("score").textContent = "Final Score: " + score + "/" + questions.length;
  document.getElementById("category").textContent = "Results";
  document.getElementById("status").textContent = percent + "%";
  document.getElementById("question").textContent = "You scored " + score + " out of " + questions.length + ".";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("feedback").textContent = percent >= 80 ? "Strong work." : "Keep practicing.";
  document.getElementById("explanation").textContent = "Restart the quiz to try again.";
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  showQuestion();
}

showQuestion();
