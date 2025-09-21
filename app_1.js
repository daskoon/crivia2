// Crelly Trivia PWA - Main Application Logic

class CrellyTrivia {
    constructor() {
        this.questions = [
            {
                "category": "Basic Info",
                "question": "When is Crelly's birthday?",
                "options": ["March 22", "April 21", "May 15", "June 10"],
                "correct": 1,
                "explanation": "Crelly's birthday is April 21, making her a Taurus zodiac sign.",
                "difficulty": "easy"
            },
            {
                "category": "Basic Info", 
                "question": "What is Crelly's height?",
                "options": ["160cm", "164cm", "168cm", "170cm"],
                "correct": 1,
                "explanation": "Crelly is 164cm tall (5'5\").",
                "difficulty": "medium"
            },
            {
                "category": "Basic Info",
                "question": "When did Crelly debut as a VTuber?",
                "options": ["March 22, 2021", "March 22, 2022", "April 21, 2022", "May 1, 2022"],
                "correct": 1,
                "explanation": "Crelly debuted on March 22, 2022.",
                "difficulty": "medium"
            },
            {
                "category": "Basic Info",
                "question": "What zodiac sign is Crelly?",
                "options": ["Gemini", "Aries", "Taurus", "Cancer"],
                "correct": 2,
                "explanation": "Born on April 21, Crelly is a Taurus.",
                "difficulty": "easy"
            },
            {
                "category": "Basic Info",
                "question": "What are Crelly's oshi marks?",
                "options": ["🐄🎮", "🎱🐮", "🔮🐄", "🎯🐮"],
                "correct": 1,
                "explanation": "Crelly's oshi marks are 🎱🐮 (8-ball and cow).",
                "difficulty": "medium"
            },
            {
                "category": "Model Details",
                "question": "Who is Crelly's model illustrator?",
                "options": ["@nini_macaron", "@uchikawa_yuu", "@warabeda_meiji", "@azure_artist"],
                "correct": 0,
                "explanation": "@nini_macaron is Crelly's model illustrator who designed her Live2D artwork.",
                "difficulty": "hard"
            },
            {
                "category": "Model Details",
                "question": "Who rigged Crelly's Live2D model?",
                "options": ["@mochimochibubu", "@jujunaught", "@brian_tsui", "@keffiy"],
                "correct": 0,
                "explanation": "@mochimochibubu (MOCHIPU) rigged Crelly's Live2D model.",
                "difficulty": "hard"
            },
            {
                "category": "Community",
                "question": "What hashtag is used for Crelly fan art?",
                "options": ["#crellyfanart", "#crellart", "#cowart", "#crellyart"],
                "correct": 1,
                "explanation": "The official fan art hashtag is #crellart.",
                "difficulty": "easy"
            },
            {
                "category": "Community",
                "question": "How does Crelly describe herself in her bio?",
                "options": ["Sweet but salty", "Chaotic but caring", "Cringe, but free", "Loud but lovable"],
                "correct": 2,
                "explanation": "Crelly's bio describes her as 'Chaotic cow. Cringe, but free.'",
                "difficulty": "easy"
            },
            {
                "category": "Community",
                "question": "What cult-like meme did Crelly create when left alone with Filian's chat?",
                "options": ["Cheese cult", "Milk cult", "Mold cult", "Mayo cult"],
                "correct": 2,
                "explanation": "Crelly created the 'mold cult' when Filian left her alone with chat, telling everyone to become mold monsters.",
                "difficulty": "medium"
            },
            {
                "category": "Memes",
                "question": "What infamous item has been on Crelly's floor for months?",
                "options": ["A pizza box", "A mayonnaise jar", "A milk carton", "A cheese wheel"],
                "correct": 1,
                "explanation": "The 'floor mayo' became a legendary meme - an unopened mayonnaise jar that sat on her floor for months.",
                "difficulty": "easy"
            },
            {
                "category": "Memes",
                "question": "What controversial meme group was Crelly associated with?",
                "options": ["Foottubers", "Backtubers", "Necktubers", "Armtubers"],
                "correct": 1,
                "explanation": "Crelly became associated with the 'Backtuber' meme involving reactions to Vedal content.",
                "difficulty": "easy"
            },
            {
                "category": "Memes",
                "question": "What unusual fetish joke is Crelly known for?",
                "options": ["Feet fetish", "Hand fetish", "Spitting fetish", "Voice fetish"],
                "correct": 2,
                "explanation": "Crelly once confessed she finds it attractive when people spit while walking, creating the 'spit tuber' meme.",
                "difficulty": "hard"
            },
            {
                "category": "Memes",
                "question": "What did Crelly do with the dragon-shaped adult item someone bought her?",
                "options": ["Threw it away", "Used it as a fridge handle at her mom's house", "Gave it to a friend", "Put it in storage"],
                "correct": 1,
                "explanation": "Crelly took the dragon-shaped item to her mom's house and they use it as a handle to open the fridge.",
                "difficulty": "hard"
            },
            {
                "category": "Pet",
                "question": "What is the name of Crelly's pet?",
                "options": ["Maisie", "Daisy", "Rosie", "Bessie"],
                "correct": 0,
                "explanation": "Maisie is Crelly's beloved pet dog.",
                "difficulty": "medium"
            },
            {
                "category": "Pet",
                "question": "What type of animal is Maisie?",
                "options": ["Cat", "Dog", "Rabbit", "Hamster"],
                "correct": 1,
                "explanation": "Maisie is Crelly's dog, often called the 'long dog' or 'vertical dog' as a running joke.",
                "difficulty": "medium"
            },
            {
                "category": "Pet",
                "question": "What happens when Crelly's dog Maisie gets bored during streams?",
                "options": ["She barks loudly", "She pushes the floor mayo around", "She jumps on the desk", "She hides under the bed"],
                "correct": 1,
                "explanation": "When Maisie gets bored, she pushes the floor mayo jar around the room, and Crelly has to put it back in its spot.",
                "difficulty": "hard"
            },
            {
                "category": "Pet",
                "question": "What nickname is Maisie known by in the community?",
                "options": ["Round dog", "Vertical dog", "Fluffy dog", "Fast dog"],
                "correct": 1,
                "explanation": "Maisie is known as the 'vertical dog' or 'long dog' due to her unusual proportions.",
                "difficulty": "medium"
            },
            {
                "category": "Streaming",
                "question": "What type of games does Crelly primarily play?",
                "options": ["Racing games", "Horror games", "Puzzle games", "Sports games"],
                "correct": 1,
                "explanation": "Crelly is known for playing horror games and has an affinity for all things horror.",
                "difficulty": "easy"
            },
            {
                "category": "Streaming",
                "question": "Approximately how many Twitch followers does Crelly have?",
                "options": ["25K", "52K", "75K", "100K"],
                "correct": 1,
                "explanation": "Crelly has over 52K followers on Twitch and is a Twitch Partner.",
                "difficulty": "medium"
            },
            {
                "category": "Streaming",
                "question": "What is Crelly's typical Monday streaming pattern?",
                "options": ["Short 2 hour streams", "Long 14+ hour streams", "No Monday streams", "Just chatting only"],
                "correct": 1,
                "explanation": "Crelly often does very long Monday streams, sometimes up to 14+ hours from afternoon to late night.",
                "difficulty": "hard"
            },
            {
                "category": "Technical",
                "question": "What is the name of Crelly's mod whose voice is used as her default TTS?",
                "options": ["Baggy", "Valky", "Staz", "Koko"],
                "correct": 1,
                "explanation": "Valky is one of Crelly's mods and his voice is her default TTS voice.",
                "difficulty": "hard"
            },
            {
                "category": "Emotes",
                "question": "Which of these is a real Crelly subscriber emote?",
                "options": ["creHappy", "creAngy", "creMoo", "creStream"],
                "correct": 1,
                "explanation": "creAngy is one of Crelly's many subscriber emotes, expressing anger or frustration.",
                "difficulty": "hard"
            },
            {
                "category": "Emotes",
                "question": "Which emote represents Crelly in a small/cute form?",
                "options": ["creAngy", "creHampter", "creSmol", "creFlappy"],
                "correct": 2,
                "explanation": "creSmol shows Crelly in a small, cute form and is one of her popular subscriber emotes.",
                "difficulty": "hard"
            },
            {
                "category": "Emotes",
                "question": "What animal-themed emote does Crelly have?",
                "options": ["creHampter", "creDuck", "creFish", "creBird"],
                "correct": 0,
                "explanation": "creHampter (hamster) is one of Crelly's subscriber emotes, playing on the cute animal theme.",
                "difficulty": "hard"
            },
            {
                "category": "Emotes",
                "question": "Which emote shows Crelly being silly or goofy?",
                "options": ["creSerious", "creSilly", "creAngy", "creSmol"],
                "correct": 1,
                "explanation": "creSilly is one of Crelly's emotes used to show her being silly or goofy.",
                "difficulty": "hard"
            },
            {
                "category": "Collaborations",
                "question": "Which VTuber dared Crelly to send the floor mayo image to Vedal?",
                "options": ["Filian", "Aquwa", "Camila", "Cotton"],
                "correct": 1,
                "explanation": "Aquwa dared Crelly to DM Vedal just the floor mayonnaise image with no caption during a truth or dare game.",
                "difficulty": "medium"
            },
            {
                "category": "Collaborations",
                "question": "Which VTuber raided Crelly and gave her one of the best retention rates?",
                "options": ["Vedal", "Filian", "Neuro-sama", "Camila"],
                "correct": 0,
                "explanation": "Vedal raided Crelly and she had incredible viewer retention, maintaining over 900 viewers.",
                "difficulty": "medium"
            },
            {
                "category": "Collaborations",
                "question": "Who does Crelly frequently collaborate with in horror content?",
                "options": ["Vedal", "Filian", "Koko", "All of the above"],
                "correct": 3,
                "explanation": "Crelly collaborates with many VTubers including Filian for horror nights, Koko for various content, and has interactions with Vedal.",
                "difficulty": "medium"
            },
            {
                "category": "Collaborations",
                "question": "In horror collabs, what rule do Crelly and collaborators often use?",
                "options": ["No talking allowed", "Scream limit challenges", "Eyes closed gameplay", "No pause allowed"],
                "correct": 1,
                "explanation": "Crelly often does 'scream limit' challenges where they lose lives if they scream too much during horror content.",
                "difficulty": "medium"
            },
            {
                "category": "Content",
                "question": "Besides horror games, what other content does Crelly do?",
                "options": ["Just Chatting", "Meme reactions", "Art reactions", "All of the above"],
                "correct": 3,
                "explanation": "Crelly does Just Chatting streams, meme reactions, art reactions, and various other content besides horror games.",
                "difficulty": "medium"
            },
            {
                "category": "Content",
                "question": "What game does Crelly frequently stream according to Twitch stats?",
                "options": ["Resident Evil", "I'm Only Sleeping", "Dead by Daylight", "Phasmophobia"],
                "correct": 1,
                "explanation": "'I'm Only Sleeping' appears frequently in her stream categories, often used for Just Chatting or relaxed content.",
                "difficulty": "hard"
            },
            {
                "category": "Personal",
                "question": "What is Crelly's typical streaming schedule pattern?",
                "options": ["Fixed 9-5 schedule", "Completely random", "Long irregular streams", "Short daily streams"],
                "correct": 2,
                "explanation": "Crelly is known for long, irregular streams that can go on for many hours, especially on weekends and Mondays.",
                "difficulty": "medium"
            },
            {
                "category": "Recent Events",
                "question": "What did Crelly jokingly claim she needs in her life recently?",
                "options": ["More money", "Drama and friction", "Better internet", "A vacation"],
                "correct": 1,
                "explanation": "Crelly jokingly said she feels like she needs some drama and friction in her life for content.",
                "difficulty": "hard"
            },
            {
                "category": "Appearance",
                "question": "What model type does Crelly use for streaming?",
                "options": ["3D", "L2D (Live2D)", "PNG", "Physical costume"],
                "correct": 1,
                "explanation": "Crelly uses a Live2D (L2D) model for her VTuber streams.",
                "difficulty": "medium"
            },
            {
                "category": "Horror Games",
                "question": "What type of horror games does Crelly particularly enjoy?",
                "options": ["Action horror only", "Psychological horror", "Jump scare games", "All horror types"],
                "correct": 3,
                "explanation": "Crelly has an affinity for all things horror and plays various types of horror games.",
                "difficulty": "easy"
            },
            {
                "category": "Business",
                "question": "What is Crelly's status on Twitch?",
                "options": ["Affiliate", "Partner", "Just Streaming", "Sponsored"],
                "correct": 1,
                "explanation": "Crelly is a Twitch Partner, which is the highest tier of Twitch creator status.",
                "difficulty": "medium"
            },
            {
                "category": "Milestones",
                "question": "How many years has Crelly been streaming as of 2025?",
                "options": ["2 years", "3 years", "4 years", "5 years"],
                "correct": 1,
                "explanation": "Crelly debuted in March 2022, making 2025 roughly her 3rd year as a VTuber.",
                "difficulty": "medium"
            },
            {
                "category": "Miscellaneous",
                "question": "What language does Crelly primarily stream in?",
                "options": ["Japanese", "English", "Spanish", "French"],
                "correct": 1,
                "explanation": "Crelly is an English-speaking VTuber who streams primarily in English.",
                "difficulty": "easy"
            },
            {
                "category": "Miscellaneous",
                "question": "What region does Crelly stream from?",
                "options": ["Europe", "USA", "Canada", "Australia"],
                "correct": 1,
                "explanation": "Crelly streams from the USA based on her timezone patterns and references.",
                "difficulty": "medium"
            }
        ];
        
        this.categories = ["Appearance", "Basic Info", "Business", "Collaborations", "Community", "Content", "Emotes", "Horror Games", "Memes", "Milestones", "Miscellaneous", "Model Details", "Personal", "Pet", "Recent Events", "Streaming", "Technical"];
        
        this.gameState = {
            currentScreen: 'welcome',
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            gameQuestions: [],
            isTransitioning: false,
            settings: {
                difficulty: 'all',
                category: 'all',
                questionCount: 10,
                soundEnabled: true,
                darkMode: false
            },
            stats: {
                gamesPlayed: 0,
                bestScore: 0,
                totalScore: 0,
                achievements: []
            }
        };

        this.screens = {};
        this.deferredPrompt = null;
        
        this.init();
    }

    init() {
        this.cacheScreens();
        this.loadSettings();
        this.loadStats();
        this.bindEvents();
        this.setupPWA();
        this.populateCategories();
        this.checkOnlineStatus();
        
        // Check if should start immediately
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('start') === 'true') {
            setTimeout(() => this.startGame(), 1000);
        }
    }

    cacheScreens() {
        this.screens = {
            welcome: document.getElementById('welcome-screen'),
            settings: document.getElementById('settings-screen'),
            question: document.getElementById('question-screen'),
            feedback: document.getElementById('feedback-screen'),
            results: document.getElementById('results-screen'),
            leaderboard: document.getElementById('leaderboard-screen'),
            about: document.getElementById('about-screen')
        };
    }

    bindEvents() {
        // Welcome screen
        document.getElementById('start-game-btn').addEventListener('click', () => this.startGame());
        document.getElementById('settings-btn').addEventListener('click', () => this.showSettings());

        // Settings screen
        document.getElementById('back-to-welcome').addEventListener('click', () => this.showWelcome());
        document.getElementById('start-from-settings').addEventListener('click', () => this.startGameFromSettings());
        document.getElementById('reset-progress').addEventListener('click', () => this.resetProgress());

        // Settings controls
        document.getElementById('difficulty-select').addEventListener('change', this.saveSettings.bind(this));
        document.getElementById('category-select').addEventListener('change', this.saveSettings.bind(this));
        document.getElementById('question-count').addEventListener('change', this.saveSettings.bind(this));
        document.getElementById('sound-toggle').addEventListener('change', this.saveSettings.bind(this));
        document.getElementById('theme-toggle').addEventListener('change', this.toggleTheme.bind(this));

        // Question screen
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectAnswer(parseInt(e.currentTarget.dataset.index)));
        });

        // Feedback screen
        document.getElementById('next-question-btn').addEventListener('click', () => this.nextQuestion());

        // Results screen
        document.getElementById('play-again-btn').addEventListener('click', () => this.playAgain());
        document.getElementById('change-settings-btn').addEventListener('click', () => this.showSettings());
        document.getElementById('view-leaderboard-btn').addEventListener('click', () => this.showLeaderboard());

        // Leaderboard screen
        document.getElementById('back-to-results').addEventListener('click', () => this.showResults());

        // About screen
        document.getElementById('back-from-about').addEventListener('click', () => this.showWelcome());

        // PWA Install
        document.getElementById('install-btn').addEventListener('click', () => this.installApp());
        document.getElementById('dismiss-install').addEventListener('click', () => this.dismissInstall());

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
    }

    populateCategories() {
        const categorySelect = document.getElementById('category-select');
        this.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    }

    loadSettings() {
        try {
            const saved = JSON.parse(localStorage.getItem('crelly-trivia-settings') || '{}');
            this.gameState.settings = { ...this.gameState.settings, ...saved };
            this.applySettings();
        } catch (e) {
            console.warn('Failed to load settings:', e);
        }
    }

    saveSettings() {
        this.gameState.settings = {
            difficulty: document.getElementById('difficulty-select').value,
            category: document.getElementById('category-select').value,
            questionCount: parseInt(document.getElementById('question-count').value),
            soundEnabled: document.getElementById('sound-toggle').checked,
            darkMode: document.getElementById('theme-toggle').checked
        };

        try {
            localStorage.setItem('crelly-trivia-settings', JSON.stringify(this.gameState.settings));
        } catch (e) {
            console.warn('Failed to save settings:', e);
        }
    }

    applySettings() {
        document.getElementById('difficulty-select').value = this.gameState.settings.difficulty;
        document.getElementById('category-select').value = this.gameState.settings.category;
        document.getElementById('question-count').value = this.gameState.settings.questionCount;
        document.getElementById('sound-toggle').checked = this.gameState.settings.soundEnabled;
        document.getElementById('theme-toggle').checked = this.gameState.settings.darkMode;

        if (this.gameState.settings.darkMode) {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
        } else {
            document.documentElement.setAttribute('data-color-scheme', 'light');
        }
    }

    toggleTheme() {
        this.saveSettings();
        this.applySettings();
    }

    loadStats() {
        try {
            const saved = JSON.parse(localStorage.getItem('crelly-trivia-stats') || '{}');
            this.gameState.stats = { ...this.gameState.stats, ...saved };
        } catch (e) {
            console.warn('Failed to load stats:', e);
        }
    }

    saveStats() {
        try {
            localStorage.setItem('crelly-trivia-stats', JSON.stringify(this.gameState.stats));
        } catch (e) {
            console.warn('Failed to save stats:', e);
        }
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.removeItem('crelly-trivia-settings');
            localStorage.removeItem('crelly-trivia-stats');
            
            this.gameState.settings = {
                difficulty: 'all',
                category: 'all',
                questionCount: 10,
                soundEnabled: true,
                darkMode: false
            };
            
            this.gameState.stats = {
                gamesPlayed: 0,
                bestScore: 0,
                totalScore: 0,
                achievements: []
            };

            this.applySettings();
            alert('Progress reset successfully!');
        }
    }

    showScreen(screenName) {
        if (this.gameState.isTransitioning) {
            return; // Prevent overlapping transitions
        }

        this.gameState.isTransitioning = true;

        // Hide all screens immediately
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active', 'prev');
        });

        // Force a reflow to ensure cleanup
        document.body.offsetHeight;

        // Show the new screen
        setTimeout(() => {
            this.screens[screenName].classList.add('active');
            this.gameState.currentScreen = screenName;
            
            // Reset transition flag after animation completes
            setTimeout(() => {
                this.gameState.isTransitioning = false;
            }, 350);
        }, 50);
    }

    showWelcome() {
        this.showScreen('welcome');
    }

    showSettings() {
        this.showScreen('settings');
    }

    showLeaderboard() {
        this.updateLeaderboardDisplay();
        this.showScreen('leaderboard');
    }

    showResults() {
        this.showScreen('results');
    }

    startGame() {
        this.prepareGame();
        this.showQuestion();
    }

    startGameFromSettings() {
        this.saveSettings();
        this.startGame();
    }

    prepareGame() {
        // Filter questions based on settings
        let filteredQuestions = [...this.questions]; // Create a copy to avoid mutating original

        if (this.gameState.settings.difficulty !== 'all') {
            filteredQuestions = filteredQuestions.filter(q => q.difficulty === this.gameState.settings.difficulty);
        }

        if (this.gameState.settings.category !== 'all') {
            filteredQuestions = filteredQuestions.filter(q => q.category === this.gameState.settings.category);
        }

        // Shuffle the filtered questions
        filteredQuestions = this.shuffleArray(filteredQuestions);
        
        // Limit to requested count, but ensure we don't exceed available questions
        const requestedCount = this.gameState.settings.questionCount;
        const availableCount = filteredQuestions.length;
        const actualCount = Math.min(requestedCount, availableCount);
        
        this.gameState.gameQuestions = filteredQuestions.slice(0, actualCount);

        // Reset game state
        this.gameState.currentQuestionIndex = 0;
        this.gameState.score = 0;
        this.gameState.correctAnswers = 0;

        // Update UI with actual question count
        document.getElementById('total-questions').textContent = this.gameState.gameQuestions.length;
        document.getElementById('current-score').textContent = '0';

        console.log(`Game prepared: ${actualCount} questions selected from ${availableCount} available`);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showQuestion() {
        if (this.gameState.currentQuestionIndex >= this.gameState.gameQuestions.length) {
            this.endGame();
            return;
        }

        const question = this.gameState.gameQuestions[this.gameState.currentQuestionIndex];
        
        // Update progress - show current question index + 1
        const progress = ((this.gameState.currentQuestionIndex) / this.gameState.gameQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.gameState.currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = this.gameState.gameQuestions.length;

        // Update question content
        document.getElementById('question-category').textContent = question.category;
        document.getElementById('question-category').className = `status status--info`;
        
        document.getElementById('question-difficulty').textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
        document.getElementById('question-difficulty').className = `status status--${question.difficulty}`;
        
        document.getElementById('question-text').textContent = question.question;

        // Update answers and reset states
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach((btn, index) => {
            btn.querySelector('.answer-text').textContent = question.options[index] || '';
            btn.classList.remove('correct', 'incorrect', 'disabled');
            btn.disabled = false;
        });

        this.showScreen('question');

        console.log(`Showing question ${this.gameState.currentQuestionIndex + 1} of ${this.gameState.gameQuestions.length}`);
    }

    selectAnswer(selectedIndex) {
        if (this.gameState.isTransitioning) {
            return; // Prevent clicks during transitions
        }

        const question = this.gameState.gameQuestions[this.gameState.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        
        // Disable all buttons immediately
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach(btn => {
            btn.classList.add('disabled');
            btn.disabled = true;
        });

        // Show correct/incorrect
        answerBtns[question.correct].classList.add('correct');
        if (!isCorrect) {
            answerBtns[selectedIndex].classList.add('incorrect');
        }

        // Update score
        if (isCorrect) {
            const points = this.getPointsForDifficulty(question.difficulty);
            this.gameState.score += points;
            this.gameState.correctAnswers++;
            document.getElementById('current-score').textContent = this.gameState.score;
        }

        // Play sound effect
        if (this.gameState.settings.soundEnabled) {
            this.playSound(isCorrect ? 'correct' : 'incorrect');
        }

        // Show feedback after delay
        setTimeout(() => {
            this.showFeedback(isCorrect, question);
        }, 1500);
    }

    getPointsForDifficulty(difficulty) {
        const points = { easy: 10, medium: 20, hard: 30 };
        return points[difficulty] || 10;
    }

    showFeedback(isCorrect, question) {
        const feedbackResult = document.getElementById('feedback-result');
        const resultIcon = feedbackResult.querySelector('.result-icon');
        const resultText = feedbackResult.querySelector('.result-text');
        
        feedbackResult.className = `feedback-result ${isCorrect ? 'correct' : 'incorrect'}`;
        resultIcon.textContent = isCorrect ? '✅' : '❌';
        resultText.textContent = isCorrect ? 'Correct!' : 'Incorrect!';

        document.getElementById('explanation-text').textContent = question.explanation;
        
        const scoreChange = document.querySelector('.score-change');
        if (isCorrect) {
            const points = this.getPointsForDifficulty(question.difficulty);
            scoreChange.textContent = `+${points} points`;
        } else {
            scoreChange.textContent = '+0 points';
        }
        
        document.getElementById('feedback-score').textContent = this.gameState.score;

        // Show confetti for correct answers
        if (isCorrect) {
            this.showConfetti();
        }

        this.showScreen('feedback');
    }

    showConfetti() {
        const confetti = document.getElementById('confetti');
        confetti.classList.remove('hidden');
        confetti.classList.add('active');
        
        setTimeout(() => {
            confetti.classList.add('hidden');
            confetti.classList.remove('active');
        }, 2000);
    }

    nextQuestion() {
        this.gameState.currentQuestionIndex++;
        this.showQuestion();
    }

    endGame() {
        const totalQuestions = this.gameState.gameQuestions.length;
        const percentage = totalQuestions > 0 ? Math.round((this.gameState.correctAnswers / totalQuestions) * 100) : 0;
        
        // Update stats
        this.gameState.stats.gamesPlayed++;
        this.gameState.stats.totalScore += this.gameState.score;
        if (percentage > this.gameState.stats.bestScore) {
            this.gameState.stats.bestScore = percentage;
        }
        
        this.checkAchievements(percentage);
        this.saveStats();

        // Update results display
        this.updateResultsDisplay(percentage, totalQuestions);
        this.showScreen('results');
    }

    updateResultsDisplay(percentage, totalQuestions) {
        // Animate score circle
        const circle = document.getElementById('score-circle');
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (percentage / 100) * circumference;
        
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 500);

        // Animate percentage counter
        this.animateValue('final-percentage', 0, percentage, 1500, '%');

        // Set rating and message
        const { rating, message } = this.getPerformanceRating(percentage);
        document.getElementById('performance-rating').textContent = rating;
        document.getElementById('rating-message').textContent = message;

        // Update summary
        document.getElementById('correct-count').textContent = this.gameState.correctAnswers;
        document.getElementById('total-answered').textContent = totalQuestions;
        document.getElementById('final-score-display').textContent = this.gameState.score;
    }

    getPerformanceRating(percentage) {
        if (percentage >= 90) {
            return {
                rating: "Crelly Expert! 🏆",
                message: "You know everything about this chaotic cow!"
            };
        } else if (percentage >= 75) {
            return {
                rating: "Crelly Superfan! 🌟",
                message: "You're well-versed in cow culture!"
            };
        } else if (percentage >= 60) {
            return {
                rating: "Getting There! 📚",
                message: "Time to watch more Crelly streams!"
            };
        } else if (percentage >= 45) {
            return {
                rating: "Casual Viewer! 🐮",
                message: "You know some basics but there's more to learn!"
            };
        } else {
            return {
                rating: "New to the Pasture! 🌱",
                message: "Welcome to the Crelly community!"
            };
        }
    }

    animateValue(elementId, start, end, duration, suffix = '') {
        const element = document.getElementById(elementId);
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.round(current) + suffix;
        }, 16);
    }

    checkAchievements(percentage) {
        const achievements = [
            { id: 'first_game', name: 'First Steps', description: 'Complete your first quiz', condition: () => this.gameState.stats.gamesPlayed >= 1 },
            { id: 'perfect_score', name: 'Perfect Score', description: 'Get 100% on any quiz', condition: () => percentage === 100 },
            { id: 'cow_expert', name: 'Cow Expert', description: 'Score 90% or higher', condition: () => percentage >= 90 },
            { id: 'dedicated_fan', name: 'Dedicated Fan', description: 'Play 10 games', condition: () => this.gameState.stats.gamesPlayed >= 10 },
            { id: 'trivia_master', name: 'Trivia Master', description: 'Play 25 games', condition: () => this.gameState.stats.gamesPlayed >= 25 }
        ];

        achievements.forEach(achievement => {
            if (!this.gameState.stats.achievements.includes(achievement.id) && achievement.condition()) {
                this.gameState.stats.achievements.push(achievement.id);
                this.showAchievementNotification(achievement);
            }
        });
    }

    showAchievementNotification(achievement) {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-info">
                <h4>Achievement Unlocked!</h4>
                <p>${achievement.name}</p>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    updateLeaderboardDisplay() {
        document.getElementById('games-played').textContent = this.gameState.stats.gamesPlayed;
        document.getElementById('best-score').textContent = this.gameState.stats.bestScore + '%';
        
        const avgScore = this.gameState.stats.gamesPlayed > 0 
            ? Math.round(this.gameState.stats.totalScore / this.gameState.stats.gamesPlayed)
            : 0;
        document.getElementById('avg-score').textContent = avgScore + '%';

        // Update achievements
        const achievementsList = document.getElementById('achievements-list');
        achievementsList.innerHTML = '';

        const allAchievements = [
            { id: 'first_game', name: 'First Steps', description: 'Complete your first quiz', icon: '🎮' },
            { id: 'perfect_score', name: 'Perfect Score', description: 'Get 100% on any quiz', icon: '💯' },
            { id: 'cow_expert', name: 'Cow Expert', description: 'Score 90% or higher', icon: '🐮' },
            { id: 'dedicated_fan', name: 'Dedicated Fan', description: 'Play 10 games', icon: '⭐' },
            { id: 'trivia_master', name: 'Trivia Master', description: 'Play 25 games', icon: '🏆' }
        ];

        allAchievements.forEach(achievement => {
            const unlocked = this.gameState.stats.achievements.includes(achievement.id);
            const achievementEl = document.createElement('div');
            achievementEl.className = `achievement-item ${unlocked ? 'unlocked' : ''}`;
            achievementEl.innerHTML = `
                <div class="achievement-icon">${unlocked ? achievement.icon : '🔒'}</div>
                <div class="achievement-info">
                    <h4>${achievement.name}</h4>
                    <div class="achievement-description">${achievement.description}</div>
                </div>
            `;
            achievementsList.appendChild(achievementEl);
        });
    }

    playAgain() {
        this.startGame();
    }

    playSound(type) {
        // Simple sound feedback using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'correct') {
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            } else {
                oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
                oscillator.frequency.setValueAtTime(174.61, audioContext.currentTime + 0.1); // F3
            }
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.warn('Could not play sound:', e);
        }
    }

    handleKeyboard(e) {
        // Handle keyboard navigation
        if (this.gameState.currentScreen === 'question' && !this.gameState.isTransitioning) {
            if (e.key >= '1' && e.key <= '4') {
                const index = parseInt(e.key) - 1;
                const btn = document.querySelector(`[data-index="${index}"]`);
                if (btn && !btn.disabled) {
                    this.selectAnswer(index);
                }
            }
        } else if (this.gameState.currentScreen === 'feedback' && !this.gameState.isTransitioning) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById('next-question-btn').click();
            }
        }
        
        // Global shortcuts
        if (e.key === 'Escape') {
            if (this.gameState.currentScreen !== 'welcome' && !this.gameState.isTransitioning) {
                this.showWelcome();
            }
        }
    }

    setupPWA() {
        // PWA install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallPrompt();
        });

        // Handle successful installation
        window.addEventListener('appinstalled', () => {
            console.log('PWA was installed');
            this.hideInstallPrompt();
        });

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('Running in standalone mode');
        }
    }

    showInstallPrompt() {
        const installPrompt = document.getElementById('install-prompt');
        if (installPrompt) {
            installPrompt.classList.remove('hidden');
        }
    }

    hideInstallPrompt() {
        const installPrompt = document.getElementById('install-prompt');
        if (installPrompt) {
            installPrompt.classList.add('hidden');
        }
    }

    installApp() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                this.deferredPrompt = null;
                this.hideInstallPrompt();
            });
        }
    }

    dismissInstall() {
        this.hideInstallPrompt();
    }

    checkOnlineStatus() {
        const updateOnlineStatus = () => {
            const offlineIndicator = document.getElementById('offline-indicator');
            if (navigator.onLine) {
                offlineIndicator.classList.add('hidden');
            } else {
                offlineIndicator.classList.remove('hidden');
            }
        };

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        updateOnlineStatus();
    }

    showLoading() {
        document.getElementById('loading').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.crellyTrivia = new CrellyTrivia();
});

// Add achievement notification styles dynamically since we can't modify CSS
const achievementStyles = `
    .achievement-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        border: 2px solid var(--primary-green);
        border-radius: var(--radius-lg);
        padding: var(--space-16);
        display: flex;
        align-items: center;
        gap: var(--space-12);
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideInRight 0.5s ease-out;
        max-width: 300px;
    }
    
    .achievement-notification .achievement-icon {
        font-size: 2rem;
    }
    
    .achievement-notification h4 {
        color: var(--primary-green);
        margin: 0 0 4px 0;
        font-size: var(--font-size-base);
    }
    
    .achievement-notification p {
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = achievementStyles;
document.head.appendChild(styleSheet);