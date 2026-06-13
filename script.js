const questions = [
  {
    category: "Anatomy & Physiology",
    question: "Which organelle is known as the powerhouse of the cell because it produces most ATP?",
    choices: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Nucleus"],
    answer: 1,
    explanation: "The mitochondrion produces most of the cell's ATP through cellular respiration."
  },
  {
    category: "Anatomy & Physiology",
    question: "Which body system is primarily responsible for transporting oxygen, nutrients, and hormones through the blood?",
    choices: ["Respiratory system", "Digestive system", "Circulatory system", "Integumentary system"],
    answer: 2,
    explanation: "The circulatory system moves blood through the heart and blood vessels."
  },
  {
    category: "Anatomy & Physiology",
    question: "What is the main function of red blood cells?",
    choices: ["Fight infection", "Carry oxygen", "Clot blood", "Produce antibodies"],
    answer: 1,
    explanation: "Red blood cells contain hemoglobin, which carries oxygen."
  },
  {
    category: "Anatomy & Physiology",
    question: "Which structure connects muscle to bone?",
    choices: ["Ligament", "Tendon", "Cartilage", "Neuron"],
    answer: 1,
    explanation: "Tendons attach muscles to bones. Ligaments attach bone to bone."
  },
  {
    category: "Anatomy & Physiology",
    question: "Where does most nutrient absorption occur in the digestive system?",
    choices: ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
    answer: 2,
    explanation: "Most nutrient absorption occurs in the small intestine."
  },
  {
    category: "Anatomy & Physiology",
    question: "Which part of the brain helps regulate balance and coordination?",
    choices: ["Cerebellum", "Medulla", "Hypothalamus", "Cerebrum"],
    answer: 0,
    explanation: "The cerebellum coordinates movement, posture, and balance."
  },
  {
    category: "Anatomy & Physiology",
    question: "Which blood vessels carry blood away from the heart?",
    choices: ["Veins", "Arteries", "Capillaries", "Alveoli"],
    answer: 1,
    explanation: "Arteries carry blood away from the heart."
  },
  {
    category: "Anatomy & Physiology",
    question: "Gas exchange in the lungs occurs mainly in the:",
    choices: ["Bronchi", "Trachea", "Alveoli", "Diaphragm"],
    answer: 2,
    explanation: "Alveoli are tiny air sacs where oxygen and carbon dioxide are exchanged."
  },
  {
    category: "Anatomy & Physiology",
    question: "Which hormone lowers blood glucose by helping cells take in glucose?",
    choices: ["Glucagon", "Insulin", "Adrenaline", "Melatonin"],
    answer: 1,
    explanation: "Insulin lowers blood glucose by helping glucose enter body cells."
  },
  {
    category: "Anatomy & Physiology",
    question: "The kidneys help maintain homeostasis mainly by:",
    choices: ["Producing bile", "Filtering blood and regulating water balance", "Pumping blood", "Making red blood cells only"],
    answer: 1,
    explanation: "Kidneys filter wastes from blood and help regulate fluid and electrolyte balance."
  },

  {
    category: "Life Science",
    question: "Which molecule stores genetic information in most living organisms?",
    choices: ["ATP", "DNA", "Glucose", "Hemoglobin"],
    answer: 1,
    explanation: "DNA stores hereditary genetic instructions."
  },
  {
    category: "Life Science",
    question: "In DNA, adenine pairs with:",
    choices: ["Cytosine", "Guanine", "Thymine", "Uracil"],
    answer: 2,
    explanation: "In DNA, adenine pairs with thymine."
  },
  {
    category: "Life Science",
    question: "What is the basic unit of life?",
    choices: ["Atom", "Organ", "Cell", "Tissue"],
    answer: 2,
    explanation: "The cell is the basic structural and functional unit of life."
  },
  {
    category: "Life Science",
    question: "Which process allows plants to make glucose using sunlight?",
    choices: ["Fermentation", "Photosynthesis", "Digestion", "Osmosis"],
    answer: 1,
    explanation: "Photosynthesis uses light energy to make glucose from carbon dioxide and water."
  },
  {
    category: "Life Science",
    question: "Which kingdom includes organisms such as mushrooms and molds?",
    choices: ["Animalia", "Plantae", "Fungi", "Protista"],
    answer: 2,
    explanation: "Mushrooms and molds belong to the kingdom Fungi."
  },
  {
    category: "Life Science",
    question: "A trait that helps an organism survive and reproduce is called:",
    choices: ["An adaptation", "A mutation", "A fossil", "A niche"],
    answer: 0,
    explanation: "An adaptation is an inherited trait that improves survival or reproduction."
  },
  {
    category: "Life Science",
    question: "Which type of cell has a nucleus?",
    choices: ["Prokaryotic cell", "Eukaryotic cell", "Bacterial cell only", "Virus"],
    answer: 1,
    explanation: "Eukaryotic cells contain a nucleus and membrane-bound organelles."
  },
  {
    category: "Life Science",
    question: "Osmosis is the movement of:",
    choices: ["Water across a membrane", "Oxygen through blood", "Proteins into the nucleus", "Glucose into DNA"],
    answer: 0,
    explanation: "Osmosis is the diffusion of water across a selectively permeable membrane."
  },
  {
    category: "Life Science",
    question: "Which process produces sex cells with half the usual number of chromosomes?",
    choices: ["Mitosis", "Meiosis", "Binary fission", "Translation"],
    answer: 1,
    explanation: "Meiosis produces gametes with half the normal chromosome number."
  },
  {
    category: "Life Science",
    question: "A group of the same species living in the same area is a:",
    choices: ["Community", "Population", "Ecosystem", "Biome"],
    answer: 1,
    explanation: "A population is a group of organisms of the same species in one area."
  },

  {
    category: "Physical Science",
    question: "Which state of matter has a definite volume but no definite shape?",
    choices: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: 1,
    explanation: "A liquid has definite volume but takes the shape of its container."
  },
  {
    category: "Physical Science",
    question: "What is the chemical symbol for sodium?",
    choices: ["S", "Na", "So", "N"],
    answer: 1,
    explanation: "Sodium's chemical symbol is Na."
  },
  {
    category: "Physical Science",
    question: "A substance with a pH less than 7 is:",
    choices: ["Acidic", "Basic", "Neutral", "A salt only"],
    answer: 0,
    explanation: "Acids have pH values below 7."
  },
  {
    category: "Physical Science",
    question: "Which subatomic particle has a negative charge?",
    choices: ["Proton", "Neutron", "Electron", "Nucleus"],
    answer: 2,
    explanation: "Electrons are negatively charged particles."
  },
  {
    category: "Physical Science",
    question: "The number of protons in an atom determines its:",
    choices: ["Atomic number", "Mass number", "Neutron number", "Isotope charge"],
    answer: 0,
    explanation: "Atomic number equals the number of protons."
  },
  {
    category: "Physical Science",
    question: "Which change is a physical change?",
    choices: ["Iron rusting", "Paper burning", "Ice melting", "Wood rotting"],
    answer: 2,
    explanation: "Melting changes the state of water but does not create a new substance."
  },
  {
    category: "Physical Science",
    question: "What is the formula for density?",
    choices: ["Mass divided by volume", "Volume divided by mass", "Force times distance", "Mass times acceleration"],
    answer: 0,
    explanation: "Density equals mass divided by volume."
  },
  {
    category: "Physical Science",
    question: "Which force pulls objects toward Earth?",
    choices: ["Friction", "Gravity", "Magnetism", "Inertia"],
    answer: 1,
    explanation: "Gravity is the attractive force that pulls objects toward Earth."
  },
  {
    category: "Physical Science",
    question: "An ionic bond usually forms when:",
    choices: ["Electrons are shared equally", "Electrons are transferred between atoms", "Two nuclei combine", "Water evaporates"],
    answer: 1,
    explanation: "Ionic bonds form when electrons are transferred, creating charged ions."
  },
  {
    category: "Physical Science",
    question: "Which unit is used to measure force?",
    choices: ["Joule", "Newton", "Watt", "Liter"],
    answer: 1,
    explanation: "Force is measured in newtons."
  },

  {
    category: "Scientific Reasoning",
    question: "In an experiment, the variable that is changed on purpose is the:",
    choices: ["Dependent variable", "Controlled variable", "Independent variable", "Conclusion"],
    answer: 2,
    explanation: "The independent variable is the factor the experimenter changes."
  },
  {
    category: "Scientific Reasoning",
    question: "The variable measured as the result of an experiment is the:",
    choices: ["Dependent variable", "Independent variable", "Constant", "Control group"],
    answer: 0,
    explanation: "The dependent variable is what is measured or observed."
  },
  {
    category: "Scientific Reasoning",
    question: "Why is a control group used in an experiment?",
    choices: ["To make the experiment shorter", "To provide a comparison", "To change all variables", "To replace data collection"],
    answer: 1,
    explanation: "A control group provides a baseline for comparison."
  },
  {
    category: "Scientific Reasoning",
    question: "A hypothesis is best described as:",
    choices: ["A proven law", "A testable prediction", "A random guess", "A final conclusion"],
    answer: 1,
    explanation: "A hypothesis is a testable prediction based on observations."
  },
  {
    category: "Scientific Reasoning",
    question: "Which graph is best for showing change over time?",
    choices: ["Line graph", "Pie chart", "Punnett square", "Microscope slide"],
    answer: 0,
    explanation: "Line graphs are commonly used to show trends over time."
  },
  {
    category: "Scientific Reasoning",
    question: "Repeating an experiment helps improve:",
    choices: ["Reliability", "Bias", "Random guessing", "The independent variable"],
    answer: 0,
    explanation: "Repeating trials helps determine whether results are reliable."
  },
  {
    category: "Scientific Reasoning",
    question: "Which statement is an observation?",
    choices: ["The plant is taller than yesterday", "The plant grew because it liked music", "The plant will die tomorrow", "Plants are always green"],
    answer: 0,
    explanation: "An observation is information gathered with the senses or measurements."
  },
  {
    category: "Scientific Reasoning",
    question: "Which tool would best measure the volume of a liquid?",
    choices: ["Triple-beam balance", "Graduated cylinder", "Thermometer", "Ruler"],
    answer: 1,
    explanation: "A graduated cylinder measures liquid volume."
  },
  {
    category: "Scientific Reasoning",
    question: "Data that uses numbers and measurements is called:",
    choices: ["Qualitative data", "Quantitative data", "A hypothesis", "A theory"],
    answer: 1,
    explanation: "Quantitative data is numerical data."
  },
  {
    category: "Scientific Reasoning",
    question: "A conclusion should be based mainly on:",
    choices: ["Evidence from the data", "Personal opinion", "The longest answer choice", "A single guess"],
    answer: 0,
    explanation: "Scientific conclusions should be supported by evidence."
  },

  {
    category: "Microbiology & Health",
    question: "Bacteria are classified as:",
    choices: ["Prokaryotes", "Eukaryotes", "Viruses", "Fungi"],
    answer: 0,
    explanation: "Bacteria are prokaryotic organisms without a nucleus."
  },
  {
    category: "Microbiology & Health",
    question: "Viruses reproduce by:",
    choices: ["Dividing on their own", "Using a host cell", "Performing photosynthesis", "Making spores like mushrooms"],
    answer: 1,
    explanation: "Viruses need host cells to reproduce."
  },
  {
    category: "Microbiology & Health",
    question: "Which immune cells produce antibodies?",
    choices: ["Red blood cells", "Platelets", "B cells", "Neurons"],
    answer: 2,
    explanation: "B cells can produce antibodies that target specific pathogens."
  },
  {
    category: "Microbiology & Health",
    question: "The first line of defense against pathogens includes:",
    choices: ["Skin and mucous membranes", "Antibodies only", "Red blood cells", "Hormones"],
    answer: 0,
    explanation: "Skin and mucous membranes help block pathogens from entering the body."
  },
  {
    category: "Microbiology & Health",
    question: "Antibiotics are used to treat infections caused by:",
    choices: ["Bacteria", "Viruses", "All cancers", "All allergies"],
    answer: 0,
    explanation: "Antibiotics treat bacterial infections, not viral infections."
  },
  {
    category: "Microbiology & Health",
    question: "Vaccines help the immune system by:",
    choices: ["Training it to recognize a pathogen", "Replacing white blood cells", "Killing every virus instantly", "Removing the need for hygiene"],
    answer: 0,
    explanation: "Vaccines expose the immune system to antigens so it can respond faster later."
  },
  {
    category: "Microbiology & Health",
    question: "Which term means disease-causing microorganism?",
    choices: ["Pathogen", "Nutrient", "Enzyme", "Hormone"],
    answer: 0,
    explanation: "A pathogen is a microorganism that can cause disease."
  },
  {
    category: "Microbiology & Health",
    question: "Which process kills most harmful microbes on surfaces using chemicals?",
    choices: ["Diffusion", "Disinfection", "Osmosis", "Condensation"],
    answer: 1,
    explanation: "Disinfection uses chemicals to reduce or kill harmful microbes on surfaces."
  },
  {
    category: "Microbiology & Health",
    question: "Which body system includes lymph nodes and helps defend against infection?",
    choices: ["Skeletal system", "Lymphatic system", "Digestive system", "Endocrine system"],
    answer: 1,
    explanation: "The lymphatic system helps with immune defense and fluid balance."
  },
  {
    category: "Microbiology & Health",
    question: "Normal body flora are microorganisms that:",
    choices: ["Always cause disease", "Normally live in or on the body", "Are only found in soil", "Cannot be bacteria"],
    answer: 1,
    explanation: "Normal flora are microbes that commonly live on or in the body, often without causing harm."
  }
];

let currentIndex = 0;
let selectedChoice = null;
let score = 0;
let answered = false;

function showQuestion() {
  const current = questions[currentIndex];
  selectedChoice = null;
  answered =
