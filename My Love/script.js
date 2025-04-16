const puzzles = [
    { 
        question: "When did we first start dating?", 
        options: ["August 10", "August 13", "September 5", "July 20"], 
        answer: "August 13"
    },
    { 
        question: "How many Love letters have I written for you?", 
        options: ["10", "5", "8", "9"], 
        answer: "August 13"
    },
    { 
        question: "What do I love doing with you?", 
        options: ["Watch a movie", "Kissing you like crazy", "Smacking your bunz", "None of the above"], 
        answer: "Kissing you like crazy"
    },
    { 
        question: "Which of these is my favourite sweet treat?", 
        options: ["Broccoli", "Chocolate", "You", "Spinach"], 
        answer: "You"
    },
    { 
        question: "How many glasses do I have?", 
        options: ["1", "2", "None", "28"], 
        answer: "1"
    },
    { 
        question: "What is your dream job?", 
        options: ["House Wife", "DJ", "Tech Speacalist", "Fashion Designer"], 
        answer: "Fashion Designer"
    },
    { 
        question: "What is my dream job?", 
        options: ["Tech Specialist", "Software Developer", "Web Developer", "DJ"], 
        answer: "Software Developer"
    },
    { 
        question: "What did I get you for christmas?", 
        options: ["Shoes", "A Ring", "Pringlesr", "A DJ"], 
        answer: "Shoes"
    },
    { 
        question: "When was our first date?", 
        options: ["28 August", "28 September", "What First Date?", "24 August"], 
        answer: "24 August"
    },
    { 
        question: "How many months have we been together?", 
        options: ["15", "I don't remember all that", "7", "8"], 
        answer: "8"
    },
    { 
        question: "Let me smack your bunz with it?", 
        options: ["Yes", "Yes", "Yes", "Yes"], 
        answer: "Yes"
    },
    { 
        question: "What is the nickname I use for you the most?", 
        options: ["My Wife", "My Love", "Sthandwa Sam", "Love of my Life"], 
        answer: "Sthandwa Sam"
    },
    { 
        question: "I lose ... when you're not next to me", 
        options: ["Barbie Dreams", "Bodak Yellow", "Control", "Biri Marung"], 
        answer: "Control"
    },
    { 
        question: "What is my middle name?", 
        options: ["JoJo Tank", "Nkosnathi", "Nkosana", "Nkomba"], 
        answer: "Nkosana"
    },
    { 
        question: "What's my favourite food", 
        options: ["Burger", "Chicken", "Doritos", "Biri Marung"], 
        answer: "Burger"
    },
    { 
        question: "What is my favourite body part on you?", 
        options: ["Nyash", "Tig Bitties", "Eyes", "Lips"], 
        answer: "Eyes"
    },
    { 
        question: "Please dont show people...", 
        options: ["Attitude", "Kindness", "Flowers", "My Stuff"], 
        answer: "My Stuff"
    }
];

const romanticMessages = [
    "You know me so well! Soulmate status! 💘",
    "Almost perfect! Let's practice kissing more 😘",
    "Need you now and forever ❤️",
    "I'd choose you in every lifetime",
    "There's no one I love more in this world than you",
    "Stealing kisses since 2024",
    "Home isn't a place, it's wherever you are",
    "Mam' wabo ❤️",
    "Ellery's Mom 👶🍼",
    "Let's get married one time 💍",
    "You are the Zo to my Mba. Get it?",
    "My heart does backflips when you're near!",
    "Officially addicted to your love 💊",
    "100% match compatibility! 🧪",
    "You had me at 'sdakiwe sdakiwe sbal'...",
    "My favorite Good morning and hardest Goodnight",
    "Every love story is beautiful, but ours is th only one that matters,
    "I love you more than Burgers!",
    "You're my favorite thought every morning",
    "My heart recognized you first",
    "You're my favorite place to be inside of... I mean *cough",
    "You're my favorite kind of trouble",
    "You're my favorite adventure",
    "I love you to the moon and back",
    "You're my happy place. I hope I'm yours",
    "My favorite part of every day is you",
    "You're my favorite love story",
    "I'd recognize your heartbeat anywhere",
    "I love you more than Kanye loves Kanye",
    "You're my favorite human",
    "Are'nt you glad you downloaded boo",
    "I love you more than you love food",
    "You're my reason to smile",
    "I'd choose you in a hundred lifetimes",
    "You're perfect",
    "You're my dream come true",
    "You're my favorite kind of beautiful",
    "You're my favorite person to annoy",
    "I'd still fall for you every time",
    "You're my favorite kind of crazy",
    "You're my everything"
];

// 50+ FUNNY messages for WRONG answers
const funnyMessages = [
    "Were you distracted by your beauty? Try again 😍",
    "Wrong answer! Penalty: 10 kisses 💋",
    "Nope! Your fine is one date night 🎟",
    "Bruh... even the Spongebob knows this one",
    "This hurt my soul a little... try again!",
    "Wrong! Do you even love me? 😂",
    "Nope! *boops nose* Try again",
    "Error: Requires butt smacks to continue",
    "Wrong! Now imitate your favorite animal",
    "Did you guess with your eyes closed? 👀",
    "Incorrect! *grabs squishy cheeks*",
    "Mistakes mean you have to wear my hoodie",
    "Incorrect! *steals your fries*",
    "Wrong! Now sing me a song",
    "Not even close! *pretends to cry*",
    "Wrong! Now say 'I'm adorable' 10 times",
    "This is why we can't have nice things!",
    "Wrong! *dramatic sigh* Try again",
    "Incorrect! *plays sad trombone sound*",
    "Wrong answer! *dramatic fainting*",
    "Did you sneeze while answering? Try again!",
    "Not even in the same universe!",
    "Wrong! Now you owe me some p... you know what try again",
    "Incorrect! *fakes crying*",
    "Nope! Now you have to cuddle me extra",
    "Even a goldfish would remember this!",
    "Incorrect! *tickles you*",
    "Wrong! Now do your sexy dance",
    "Nope! *steals your fries*",
    "Wrong answer = 5 minutes of staring",
    "Incorrect! *pokes belly button*",
    "Wrong! Now make your best duck face",
    "Wrong answer = 10 pushups!",
    "Incorrect! *blows raspberry*",
    "Nope! *steals your blanket*",
    "Wrong answer = funny face selfie!",
    "Incorrect! *steals your phone*",
    "Wrong! Now do your best impression of me",
    "Nope! *steals your dessert*",
    "Wrong answer = massage my shoulders!",
    "Incorrect! *steals your chair*",
    "Wrong! Now tell me I'm pretty 5 times",
    "Nope! *steals your socks*"
];

let attempts = 0;
let kisses = 0;

// Initialize the page
document.addEventListener("DOMContentLoaded", function() {
    // Create floating hearts on all pages
    createHearts();
    
    // Check which page we're on
    if (document.getElementById('puzzle-question')) {
        loadPuzzle();
    } else if (document.getElementById('love-message')) {
        showLoveMessage();
        setupKissCounter();
    }
});

function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart-float';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (4 + Math.random() * 6) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(heart);
    }
}

function startPuzzle() {
    // Select a random puzzle
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    const selectedPuzzle = puzzles[randomIndex];
    
    // Store all puzzle data in sessionStorage
    sessionStorage.setItem("puzzleQuestion", selectedPuzzle.question);
    sessionStorage.setItem("puzzleOptions", JSON.stringify(selectedPuzzle.options));
    sessionStorage.setItem("puzzleAnswer", selectedPuzzle.answer);
    sessionStorage.setItem("attempts", "0");
    
    // Redirect to puzzle page
    window.location.href = "puzzle.html";
}

function loadPuzzle() {
    const puzzleElement = document.getElementById('puzzle-question');
    const optionsContainer = document.getElementById('options-container');
    
    // Get data from sessionStorage
    const question = sessionStorage.getItem("puzzleQuestion");
    const options = JSON.parse(sessionStorage.getItem("puzzleOptions"));
    const answer = sessionStorage.getItem("puzzleAnswer");
    
    if (question && options && answer) {
        puzzleElement.textContent = question;
        
        optionsContainer.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);
        });
        
        // Update love meter based on attempts
        attempts = parseInt(sessionStorage.getItem("attempts")) || 0;
        updateLoveMeter();
    } else {
        puzzleElement.textContent = "No puzzle found. Let's start over!";
        setTimeout(() => window.location.href = "index.html", 2000);
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = sessionStorage.getItem("puzzleAnswer");
    const feedback = document.getElementById('feedback');
    
    if (selectedOption === correctAnswer) {
        // CORRECT ANSWER - Use romantic message
        const randomMessage = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
        sessionStorage.setItem("loveMessage", randomMessage);
        
        celebrate();
        setTimeout(() => {
            window.location.href = "love-message.html";
        }, 2000);
    } else {
        // WRONG ANSWER - Use funny message
        const randomFunny = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        feedback.textContent = randomFunny;
        feedback.style.color = "#ff3366";
        feedback.style.display = "block";
        
        attempts++;
        sessionStorage.setItem("attempts", attempts.toString());
        updateLoveMeter();
        document.getElementById('correctSound').play();
    }
}

function updateLoveMeter() {
    const meter = document.querySelector('.meter-bar');
    const percent = document.getElementById('love-percent');
    const width = Math.min(attempts * 25, 100);
    
    meter.style.width = width + '%';
    percent.textContent = width + '%';

    // Romantic reactions
    const feedback = document.getElementById('feedback');
    if (width >= 100) {
        feedback.textContent = "FINE, you win... here's your kiss! 💋";
        celebrate();
        revealAnswer();
    } else if (width >= 75) {
        feedback.textContent = "One more try and I'm yours! 🥺👉👈";
    } else if (width >= 50) {
        feedback.textContent = "Halfway to woza la! 😈💘";
    } else if (width >= 25) {
        feedback.textContent = "You're warming up my heart, I'll warm up your p... coughs*! ❤️🔥";
    }
}

function revealAnswer() {
    const correctAnswer = sessionStorage.getItem("puzzleAnswer");
    const options = document.querySelectorAll('#options-container button');
    
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.style.background = "linear-gradient(135deg, #4CAF50, #8BC34A)";
            option.style.color = "white";
        }
    });
}

function celebrate() {
    // Create confetti
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 330}, 100%, 50%)`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
    }
    
    // Play celebration sound
    document.getElementById('loveSound').play();
}

function showLoveMessage() {
    const message = sessionStorage.getItem("loveMessage") || "I love you more than words can express! ❤️";
    document.getElementById('love-message').textContent = message;
    displayRandomPhotos();
}

function displayRandomPhotos() {
    const photoContainer = document.querySelector('.photos');
    if (!photoContainer) return;
    
    photoContainer.innerHTML = '';
    
    // Replace with your ACTUAL image filenames
    const imagePool = [
        "20241028_094107.jpg",
        "IMG-20250101-WA0026.jpg",
        "20241028_094107.jpg",
        "20241028_094142.jpg",
        "20241028_094414.jpg",
        "20241230_172430.jpg",
        "IMG-20241223-WA0002.jpg",
        "IMG-20250101-WA0026.jpg",
        "IMG-20250101-WA0036.jpg",
        "IMG-20250101-WA0038.jpg",
        "IMG-20250101-WA0039.jpg",
        "IMG-20250101-WA0041.jpg"
    ];
    
    // Shuffle and pick 2 images
    const shuffled = [...imagePool].sort(() => 0.5 - Math.random());
    const selectedImages = shuffled.slice(0, 2);

    selectedImages.forEach(filename => {
        const img = document.createElement('img');
        img.src = `assets/${filename}`;
        img.alt = "Our beautiful memory";
        img.loading = "lazy";
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        
        img.onerror = function() {
            this.src = 'assets/default-memory.jpg';
            console.log("Failed to load image:", filename);
        };
        
        photoContainer.appendChild(img);
    });
}

function setupKissCounter() {
    const messageElement = document.getElementById('love-message');
    const counter = document.getElementById('kiss-counter');
    
    if (!messageElement || !counter) return;
    
    // Load saved kisses from localStorage
    kisses = parseInt(localStorage.getItem('kisses')) || 0;
    counter.textContent = `Virtual kisses: ${kisses}`;
    
    messageElement.addEventListener('click', () => {
        kisses++;
        counter.textContent = `Virtual kisses: ${kisses}`;
        localStorage.setItem('kisses', kisses.toString());
        
        // Create floating heart
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart-float';
        heart.style.left = (Math.random() * 80 + 10) + '%';
        heart.style.animationDuration = (2 + Math.random() * 3) + 's';
        document.body.appendChild(heart);

        // Play kiss sound
        try {
            new Audio('assets/kiss-sound.mp3').play();
        } catch (e) {
            console.log("Couldn't play sound:", e);
        }

        // Milestone messages
        if (kisses === 10) {
            alert("10 kisses?! I will pay them in full... 😏");
        }
        if (kisses === 20) {
            alert("20 kisses! Someone's obsessed with me today! 💘");
        }
        if (kisses === 50) {
            alert("50 kisses! You've unlocked unlimited cuddles! 🥰");
        }
    });
}

function goHome() {
    window.location.href = "index.html";
}

function notToday() {
    if (confirm("Shoooo are you sure?")) {
        alert("I love you bye - Kind Regards Bhut' Baby ❤️");
        window.location.href = "about:blank";
    }
}

if (window.location.pathname.includes('love-message.html')) {
    displayRandomPhotos();
}

// Cheat-code giggles
if (document.querySelector('.love-meter')) {
    document.querySelector('.love-meter').addEventListener('click', () => {
        const feedback = document.getElementById('feedback');
        feedback.textContent = "Nice try! But love demands effort! 😏";
        feedback.style.display = "block";
        setTimeout(() => feedback.style.display = "none", 2000);
    });
}

