const questions = [
  ["Anatomy", "Which organelle produces most ATP?", ["Nucleus", "Mitochondrion", "Ribosome", "Golgi apparatus"], 1, "Mitochondria produce most ATP during cellular respiration."],
  ["Anatomy", "What is the main job of red blood cells?", ["Fight infection", "Carry oxygen", "Clot blood", "Digest food"], 1, "Red blood cells carry oxygen using hemoglobin."],
  ["Anatomy", "Which structure connects muscle to bone?", ["Ligament", "Tendon", "Cartilage", "Neuron"], 1, "Tendons connect muscle to bone."],
  ["Anatomy", "Where does most nutrient absorption occur?", ["Stomach", "Small intestine", "Large intestine", "Esophagus"], 1, "Most nutrients are absorbed in the small intestine."],
  ["Anatomy", "Which part of the brain controls balance?", ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"], 0, "The cerebellum helps with balance and coordination."],
  ["Anatomy", "Which vessels carry blood away from the heart?", ["Veins", "Arteries", "Capillaries", "Alveoli"], 1, "Arteries carry blood away from the heart."],
  ["Anatomy", "Gas exchange happens mainly in the:", ["Trachea", "Bronchi", "Alveoli", "Diaphragm"], 2, "Alveoli exchange oxygen and carbon dioxide."],
  ["Anatomy", "Which hormone lowers blood sugar?", ["Glucagon", "Insulin", "Adrenaline", "Melatonin"], 1, "Insulin helps cells take in glucose."],
  ["Anatomy", "The kidneys mainly help by:", ["Making bile", "Filtering blood", "Pumping blood", "Making oxygen"], 1, "Kidneys filter blood and regulate fluid balance."],
  ["Anatomy", "Which system protects the body with skin?", ["Skeletal", "Integumentary", "Digestive", "Endocrine"], 1, "The integumentary system includes skin, hair, and nails."],

  ["Life Science", "Which molecule stores genetic information?", ["ATP", "DNA", "Glucose", "Protein"], 1, "DNA stores genetic instructions."],
  ["Life Science", "In DNA, adenine pairs with:", ["Cytosine", "Guanine", "Thymine", "Uracil"], 2, "Adenine pairs with thymine in DNA."],
  ["Life Science", "The basic unit of life is the:", ["Atom", "Cell", "Tissue", "Organ"], 1, "The cell is the basic unit of life."],
  ["Life Science", "Plants make glucose by:", ["Osmosis", "Photosynthesis", "Fermentation", "Digestion"], 1, "Photosynthesis uses light energy to make glucose."],
  ["Life Science", "Mushrooms belong to which kingdom?", ["Animalia", "Plantae", "Fungi", "Protista"], 2, "Mushrooms are fungi."],
  ["Life Science", "A helpful survival trait is called:", ["Adaptation", "Mutation", "Fossil", "Niche"], 0, "An adaptation helps an organism survive or reproduce."],
  ["Life Science", "Cells with a nucleus are:", ["Prokaryotic", "Eukaryotic", "Viral", "Bacterial only"], 1, "Eukaryotic cells have a nucleus."],
  ["Life Science", "Osmosis is movement of:", ["Water", "Protein", "DNA", "Oxygen"], 0, "Osmosis is water moving across a membrane."],
  ["Life Science", "Sex cells are made by:", ["Mitosis", "Meiosis", "Diffusion", "Translation"], 1, "Meiosis produces sex cells with half the chromosomes."],
  ["Life Science", "Same species in one area is a:", ["Community", "Population", "Biome", "Organ"], 1, "A population is one species living in an area."],

  ["Physical Science", "Matter with definite volume but no definite shape is:", ["Solid", "Liquid", "Gas", "Plasma"], 1, "Liquids keep volume but take the container shape."],
  ["Physical Science", "The symbol for sodium is:", ["S", "Na", "So", "N"], 1, "Sodium is Na."],
  ["Physical Science", "A pH below 7 is:", ["Acidic", "Basic", "Neutral", "Salty"], 0, "Acids have pH values below 7."],
  ["Physical Science", "A negative subatomic particle is a:", ["Proton", "Neutron", "Electron", "Nucleus"], 2, "Electrons are negative."],
  ["Physical Science", "Atomic number equals number of:", ["Neutrons", "Protons", "Electrons plus neutrons", "Bonds"], 1, "Atomic number is the number of protons."],
  ["Physical Science", "Which is a physical change?", ["Rusting", "Burning", "Melting ice", "Rotting"], 2, "Melting changes state, not substance."],
  ["Physical Science", "Density equals:", ["Mass divided by volume", "Volume divided by mass", "Force times distance", "Mass times acceleration"], 0, "Density = mass / volume."],
  ["Physical Science", "The force pulling objects toward Earth is:", ["Friction", "Gravity", "Magnetism", "Inertia"], 1, "Gravity pulls objects toward Earth."],
  ["Physical Science", "Ionic bonds form when electrons are:", ["Shared", "Transferred", "Destroyed", "Turned into protons"], 1, "Ionic bonds form by electron transfer."],
  ["Physical Science", "Force is measured in:", ["Joules", "Newtons", "Watts", "Liters"], 1, "Force is measured in newtons."],

  ["Scientific Reasoning", "The variable changed on purpose is the:", ["Dependent variable", "Independent variable", "Control", "Conclusion"], 1, "The independent variable is changed by the experimenter."],
  ["Scientific Reasoning", "The variable measured is the:", ["Dependent variable", "Independent variable", "Constant", "Control group"], 0, "The dependent variable is measured."],
  ["Scientific Reasoning", "A control group is used for:", ["Comparison", "Guessing", "Changing all variables", "Avoiding data"], 0, "A control group gives a comparison."],
  ["Scientific Reasoning", "A hypothesis is a:", ["Proven law", "Testable prediction", "Final answer", "Random opinion"], 1, "A hypothesis is testable."],
  ["Scientific Reasoning", "Best graph for change over time:", ["Line graph", "Pie chart", "Punnett square", "Table only"], 0, "Line graphs show trends over time."],
  ["Scientific Reasoning", "Repeating trials improves:", ["Reliability", "Bias", "Guessing", "Color"], 0, "Repeated trials make results more reliable."],
  ["Scientific Reasoning", "Which is an observation?", ["The liquid is blue", "The liquid is angry", "It will explode tomorrow", "It is always safe"], 0, "Observations are based on senses or measurements."],
  ["Scientific Reasoning", "Best tool for liquid volume:", ["Ruler", "Thermometer", "Graduated cylinder", "Balance"], 2, "Graduated cylinders measure liquid volume."],
  ["Scientific Reasoning", "Numerical data is:", ["Qualitative", "Quantitative", "Opinion", "Control"], 1, "Quantitative data uses numbers."],
  ["Scientific Reasoning", "Conclusions should be based on:", ["Evidence", "Opinion", "The longest answer", "A guess"], 0, "Scientific conclusions use evidence."],

  ["Microbiology", "Bacteria are:", ["Prokaryotes", "Eukaryotes", "Viruses", "Fungi"], 0, "Bacteria are prokaryotic."],
  ["Microbiology", "Viruses reproduce by:", ["Dividing alone", "Using host cells", "Photosynthesis", "Making seeds"], 1, "Viruses need host cells to reproduce."],
  ["Microbiology", "Which cells produce antibodies?", ["Red blood cells", "Platelets", "B cells", "Neurons"], 2, "B cells produce antibodies."],
  ["Microbiology", "First line of defense includes:", ["Skin", "Antibodies only", "Hormones", "Red blood cells"], 0, "Skin helps block pathogens."],
  ["Microbiology", "Antibiotics treat:", ["Bacterial infections", "Viral infections", "All allergies", "All cancers"], 0, "Antibiotics treat bacterial infections."],
  ["Microbiology", "Vaccines help by:", ["Training immune memory", "Replacing blood", "Removing hygiene needs", "Killing all germs instantly"], 0, "Vaccines help the immune system recognize pathogens."],
  ["Microbiology", "A disease-causing microbe is a:", ["Pathogen", "Nutrient", "Enzyme", "Hormone"], 0, "A pathogen can cause disease."],
  ["Microbiology", "Disinfection means:", ["Killing many microbes on surfaces", "Making glucose", "Moving water", "Digesting food"], 0, "Disinfection reduces harmful microbes on surfaces."],
  ["Microbiology", "Lymph nodes belong to the:", ["Skeletal system", "Lymphatic system", "Digestive system", "Endocrine system"], 1, "The lymphatic system supports immune defense."],
  ["Microbiology", "Normal flora are microbes that:", ["Normally live on or in the body", "Always cause disease", "Only live in soil", "Are never bacteria"], 0, "Normal flora commonly live on or in the body."]
];

let currentIndex = 0;
let selectedChoice = null;
let score = 0;
let answered = false;

function showQuestion() {
  const q = questions[currentIndex];
  selectedChoice = null;
  answered = false;

  document.getElementById("progress").textContent = "Question " + (currentIndex + 1) + " of " + questions.length;
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("category").textContent = q[0];
  document.getElementById("status").textContent = "Choose one answer";
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
      selectedChoice = index;
      document.querySelectorAll(".choice").forEach(function(btn) {
        btn.classList.remove("selected");
      });
      button.classList.add("selected");
    };
    choicesBox.appendChild(button);
  });
}

function checkAnswer() {
  if (answered) return;

  if (selectedChoice === null) {
    document.getElementById("feedback").textContent = "Choose an answer first.";
    return;
  }

  const q = questions[currentIndex];
  const buttons = document.querySelectorAll(".choice");
  answered = true;

  if (selectedChoice === q[3]) {
    score++;
    buttons[selectedChoice].classList.add("correct");
    document.getElementById("feedback").textContent = "Correct!";
    document.getElementById("status").textContent = "Correct";
  } else {
    buttons[selectedChoice].classList.add("wrong");
    buttons[q[3]].classList.add("correct");
    document.getElementById("feedback").textContent = "Not quite.";
    document.getElementById("status").textContent = "Review";
  }

  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("explanation").textContent = q[4];
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
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
}

function restartQuiz() {
  currentIndex = 0;
  selectedChoice = null;
  score = 0;
  answered = false;
  showQuestion();
}

showQuestion();
