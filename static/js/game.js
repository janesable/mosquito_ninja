class QuizManager {
    constructor() {
        this.questions = [
            {
                question: "Что вызывает малярию?",
                answers: ["Паразиты Plasmodium", "Бактерии", "Вирусы", "Грибки"],
                correct: 0,
                explanation: "Малярия вызывается паразитами рода Plasmodium, которые передаются через укусы комаров. Эти микроскопические паразиты размножаются в печени человека и затем заражают красные кровяные клетки."
            },
            {
                question: "Какие органы человека поражает малярийный паразит в первую очередь?",
                answers: ["Печень и эритроциты", "Легкие и бронхи", "Желудок и кишечник", "Мозг и нервная система"],
                correct: 0,
                explanation: "Малярийный паразит сначала попадает в печень, где размножается, а затем поражает эритроциты (красные кровяные клетки), вызывая их разрушение и характерные приступы лихорадки."
            },
            {
                question: "Каков основной симптом малярии?",
                answers: ["Периодические приступы лихорадки", "Постоянная головная боль", "Кожная сыпь", "Потеря слуха"],
                correct: 0,
                explanation: "Основным симптомом малярии являются периодические приступы лихорадки с характерной цикличностью, сопровождающиеся ознобом и потом."
            },
            {
                question: "Как долго малярийный паразит может находиться в печени человека?",
                answers: ["До нескольких лет", "Несколько дней", "Один месяц", "Несколько часов"],
                correct: 0,
                explanation: "Некоторые формы малярийного паразита могут оставаться в печени человека в течение нескольких лет, вызывая рецидивы заболевания."
            },
            {
                question: "Какое время суток комары Anopheles наиболее активны?",
                answers: ["В сумерках и ночью", "Утром", "В полдень", "После полудня"],
                correct: 0,
                explanation: "Комары Anopheles наиболее активны в сумеречное и ночное время, что делает использование противомоскитных сеток во время сна особенно важным."
            },
            {
                question: "Какой метод профилактики малярии наиболее эффективен?",
                answers: ["Комплексный подход", "Только противомоскитные сетки", "Только репелленты", "Только таблетки"],
                correct: 0,
                explanation: "Наиболее эффективен комплексный подход, включающий использование противомоскитных сеток, репеллентов, профилактических препаратов и контроль размножения комаров."
            },
            {
                question: "Кто открыл возбудителя малярии?",
                answers: ["Шарль Луи Альфонс Лаверан", "Луи Пастер", "Роберт Кох", "Александр Флеминг"],
                correct: 0,
                explanation: "Французский военный врач Шарль Луи Альфонс Лаверан открыл малярийного паразита в 1880 году, за что позже получил Нобелевскую премию."
            },
            {
                question: "Какой препарат исторически использовался для лечения малярии?",
                answers: ["Хинин", "Аспирин", "Пенициллин", "Инсулин"],
                correct: 0,
                explanation: "Хинин, получаемый из коры хинного дерева, был первым эффективным средством лечения малярии и использовался на протяжении столетий."
            },
            {
                question: "Как климатические изменения влияют на распространение малярии?",
                answers: ["Расширяют ареал комаров", "Уменьшают ареал комаров", "Не влияют", "Влияют только на скорость полета комаров"],
                correct: 0,
                explanation: "Глобальное потепление расширяет географический ареал малярийных комаров, создавая благоприятные условия для их размножения в новых регионах."
            },
            {
                question: "Какой пол комаров Anopheles переносит малярию?",
                answers: ["Только самцы", "Только самки", "Оба пола", "Ни один из полов"],
                correct: 1,
                explanation: "Только самки комаров Anopheles переносят малярию, так как только они питаются кровью для развития яиц."
            },
            {
                question: "Через какое время после укуса зараженного комара появляются первые симптомы?",
                answers: ["7-30 дней", "1-2 дня", "Сразу", "Через полгода"],
                correct: 0,
                explanation: "Инкубационный период малярии обычно составляет от 7 до 30 дней, в зависимости от вида паразита."
            },
            {
                question: "Какое основное отличие комаров Anopheles от других видов?",
                answers: ["Поза при посадке", "Цвет", "Размер", "Скорость полета"],
                correct: 0,
                explanation: "Комары Anopheles отличаются характерной позой при посадке - их брюшко направлено под углом к поверхности, в то время как у других видов оно параллельно поверхности."
            },
            {
                question: "Какой метод используется для массовой борьбы с комарами?",
                answers: ["Осушение водоемов", "Посадка деревьев", "Увеличение популяции птиц", "Повышение температуры воздуха"],
                correct: 0,
                explanation: "Осушение стоячих водоемов - одна из наиболее эффективных мер борьбы с комарами, так как они являются местами размножения комаров."
            },
            {
                question: "Какая температура наиболее благоприятна для развития малярийных паразитов в комаре?",
                answers: ["20-30°C", "5-15°C", "35-40°C", "Ниже 5°C"],
                correct: 0,
                explanation: "Оптимальная температура для развития малярийных паразитов в организме комара составляет 20-30°C."
            },
            {
                question: "Какой процент случаев малярии в мире вызывается Plasmodium falciparum?",
                answers: ["Более 75%", "Менее 25%", "Около 50%", "Около 10%"],
                correct: 0,
                explanation: "Более 75% всех случаев малярии вызывается P. falciparum, самым опасным видом малярийного паразита."
            },
            {
                question: "Какое осложнение малярии наиболее опасно?",
                answers: ["Церебральная малярия", "Анемия", "Желтуха", "Пневмония"],
                correct: 0,
                explanation: "Церебральная малярия - наиболее опасное осложнение, при котором поражается головной мозг, что может привести к коме и смерти."
            },
            {
                question: "Какой фактор не влияет на распространение малярии?",
                answers: ["Высота над уровнем моря", "Цвет почвы", "Влажность воздуха", "Температура"],
                correct: 1,
                explanation: "Цвет почвы не влияет на распространение малярии, в то время как высота, влажность и температура являются ключевыми факторами."
            },
            {
                question: "Как долго может жить взрослый комар Anopheles?",
                answers: ["3-6 недель", "1-2 дня", "6 месяцев", "Несколько лет"],
                correct: 0,
                explanation: "При благоприятных условиях взрослый комар Anopheles может жить 3-6 недель, хотя некоторые особи могут жить дольше."
            },
            {
                question: "Какое количество яиц может отложить самка комара Anopheles за один раз?",
                answers: ["50-200 яиц", "5-10 яиц", "500-1000 яиц", "1-5 яиц"],
                correct: 0,
                explanation: "Самка комара Anopheles может отложить от 50 до 200 яиц за одну кладку, что обеспечивает быстрый рост популяции при благоприятных условиях."
            }
        ];
    }

    startQuiz() {
        this.currentQuestion = Math.floor(Math.random() * this.questions.length);
        this.showQuestion();
    }

    showQuestion() {
        const question = this.questions[this.currentQuestion];
        const container = document.getElementById('quiz-container');
        const questionEl = document.getElementById('question');
        const answersEl = document.getElementById('answers');

        container.classList.remove('hidden');
        questionEl.textContent = question.question;
        answersEl.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => this.checkAnswer(index));
            answersEl.appendChild(button);
        });
    }

    checkAnswer(answerIndex) {
        const question = this.questions[this.currentQuestion];
        const isCorrect = answerIndex === question.correct;
        
        if (isCorrect && game.level === 1) {
            game.level = 2;
            this.showExplanation(true, question.explanation, true);
        } else {
            game.score = 0;
            this.showExplanation(isCorrect, question.explanation, false);
        }
    }

    showExplanation(isCorrect, explanation, startLevel2 = false) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${isCorrect ? 'Правильно!' : 'Неправильно'}</h2>
                <p>${explanation}</p>
                <button id="close-explanation">Продолжить</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('close-explanation').addEventListener('click', () => {
            modal.remove();
            document.getElementById('quiz-container').classList.add('hidden');
            if (startLevel2) {
                game.level = 2; // Убедись, что уровень обновлён
                game.startGame(); // Корректно запускай игру
            } else {
                document.getElementById('game-over').classList.remove('hidden');
            }
        });
    }
}

const quizManager = new QuizManager();

class Game {
    constructor() {
        const telegram = window.Telegram.WebApp;
        telegram.isVerticalSwipesEnabled = false;

        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.timeLeft = 30;
        this.mosquitos = [];
        this.particles = [];
        this.slashPoints = [];
        this.isSlashing = false;
        this.gameLoop = null;
        this.lastTime = 0;
        this.timeModifier = 1;
        this.level = 1;

        this.resize();
        this.setupEventListeners();
        this.loadAssets();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousedown', (e) => this.startSlash(e));
        this.canvas.addEventListener('mousemove', (e) => this.updateSlash(e));
        this.canvas.addEventListener('mouseup', () => this.endSlash());
        this.canvas.addEventListener('touchstart', (e) => this.startSlash(e.touches[0]));
        this.canvas.addEventListener('touchmove', (e) => this.updateSlash(e.touches[0]));
        this.canvas.addEventListener('touchend', () => this.endSlash());
    }

    loadAssets() {
        this.mosquitoTypes = {
            regular: {
                image: new Image(),
                points: 1,
                speed: 200
            },
            fast: {
                image: new Image(),
                points: 3,
                speed: 400
            },
            time: {
                image: new Image(),
                points: 1,
                speed: 150
            },
            green: {
                image: new Image(),
                points: -5,
                speed: 300
            }  
        };

        this.mosquitoTypes.regular.image.src = 'static/assets/aedes.svg';
        this.mosquitoTypes.fast.image.src = 'static/assets/anopheles.svg';
        this.mosquitoTypes.time.image.src = 'static/assets/capsule.svg';
        this.mosquitoTypes.green.image.src = 'static/assets/longleg.svg';
        
        // Add error handling for image loading
        Object.values(this.mosquitoTypes).forEach(type => {
            type.image.onerror = () => {
                console.error('Failed to load mosquito image:', type.image.src);
            };
        });
    }

    startGameLoop() {
        this.gameLoop = requestAnimationFrame((timestamp) => this.update(timestamp));
        this.spawnTimer = setInterval(() => this.spawnMosquito(), 1000);
        this.countdownTimer = setInterval(() => {
            this.timeLeft--;
            this.updateTimer();
            if (this.timeLeft <= 0) this.endGame();
        }, 1000);
    }

    showTutorial(callback) {
        const modal = document.createElement('div');
        this.zeroScore()
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Как играть</h2>
                <p>В игре есть несколько типов комаров и вспомогательные элементы:</p>
                <ul style="text-align: left; margin: 20px 0; list-style: none;">
                    <li style="display: flex; align-items: center; margin-bottom: 10px;">
                        <img src="static/assets/aedes.svg" style="width: 40px; height: 40px; margin-right: 10px;">
                        Немалярийный комар (1 очко)
                    </li>
                    <li style="display: flex; align-items: center; margin-bottom: 10px;">
                        <img src="static/assets/anopheles.svg" style="width: 40px; height: 40px; margin-right: 10px;">
                        Малярийный комар (3 очка)
                    </li>
                    <li style="display: flex; align-items: center; margin-bottom: 10px;">
                        <img src="static/assets/capsule.svg" style="width: 20px; height: 20px; margin-right: 10px;">
                        Таблетка (замедляет время)
                    </li>
                </ul>
                <button id="start-game">Начать игру</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('start-game').addEventListener('click', () => {
            modal.remove();
            this.timeLeft = 30;
            if (callback) callback();
        });
    }

    showLevel2Tutorial(callback) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Уровень 2</h2>
                <p>Внимание! Появился новый тип комара:</p>
                <ul style="text-align: left; margin: 20px 0; list-style: none;">
                    <li style="display: flex; align-items: center; margin-bottom: 10px;">
                        <img src="static/assets/longleg.svg" style="width: 20px; height: 20px; margin-right: 10px;">
                        Комар-долгоножка (отнимает 5 очков, потому что он безвредный!)
                    </li>
                </ul>
                <p>Все комары теперь двигаются в два раза быстрее!</p>
                <button id="start-level-2">Начать уровень</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('start-level-2').addEventListener('click', () => {
            modal.remove();
            if (callback) callback();
        });
    }

    zeroScore(){
        this.score = 0;
        this.updateScore();
    }

    startGame() {
        this.timeLeft = 30;
        this.mosquitos = [];
        this.particles = [];
        this.timeModifier = this.level === 2 ? 2 : 1;
        this.updateScore();
        this.updateTimer();
        console.log('Game loop running');
        
        // Start background music when game starts
        audioManager.startBackgroundMusic();
        
        if (this.level === 2) {
            this.showLevel2Tutorial(() => {
                this.startGameLoop();
            });
        } else {
            this.showTutorial(() => {
                this.startGameLoop();
            });
        }
    }

    start() {
        this.showTutorial(() => {
            this.startGameLoop();
        });
    }

    spawnMosquito() {
        const types = this.level === 1 
            ? ['regular', 'regular', 'regular', 'fast', 'time']
            : ['regular', 'regular', 'regular', 'fast', 'time', 'green'];
        const type = types[Math.floor(Math.random() * types.length)];
        const mosquito = {
            x: Math.random() * this.canvas.width,
            y: this.canvas.height + 50,
            type: type,
            angle: Math.random() * Math.PI * 2,
            speed: this.mosquitoTypes[type].speed || 200
        };

        console.log(`Spawned mosquito: ${mosquito.type}, speed: ${mosquito.speed}`);
        this.mosquitos.push(mosquito);
    }

    update(timestamp) {
        const deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update mosquitos
        this.mosquitos.forEach((mosquito, index) => {
            console.log(`Mosquito ${index}: y=${mosquito.y}, speed=${mosquito.speed}`);
            mosquito.y -= mosquito.speed * deltaTime * this.timeModifier;
            if (mosquito.y < -50) this.mosquitos.splice(index, 1);
        });

        // Update particles
        this.particles = this.particles.filter(particle => particle.update(deltaTime));

        // Draw slash trail
        if (this.isSlashing && this.slashPoints.length > 1) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.slashPoints[0].x, this.slashPoints[0].y);
            for (let i = 1; i < this.slashPoints.length; i++) {
                this.ctx.lineTo(this.slashPoints[i].x, this.slashPoints[i].y);
            }
            this.ctx.strokeStyle = 'rgba(255, 0, 255, 0.5)';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
        }

        // Draw mosquitos
        this.mosquitos.forEach(mosquito => {
            this.ctx.save();
            this.ctx.translate(mosquito.x, mosquito.y);
            this.ctx.rotate(mosquito.angle);
            this.ctx.drawImage(
                this.mosquitoTypes[mosquito.type].image,
                -45, -45,
                mosquito.type === 'time' ? 60 : 90, // Ширина
                mosquito.type === 'time' ? 60 : 90  // Высота
            );
            this.ctx.restore();
        });

        // Draw particles
        this.particles.forEach(particle => particle.draw(this.ctx));

        if (this.timeLeft > 0) {
            this.gameLoop = requestAnimationFrame((timestamp) => this.update(timestamp));
        }
    }

    startSlash(event) {
        this.isSlashing = true;
        this.slashPoints = [{x: event.clientX, y: event.clientY}];
        audioManager.playSlashSound();
    }

    updateSlash(event) {
        if (!this.isSlashing) return;
        this.slashPoints.push({x: event.clientX, y: event.clientY});
        this.checkCollisions(event.clientX, event.clientY);
    }

    endSlash() {
        this.isSlashing = false;
        this.slashPoints = [];
    }

    checkCollisions(x, y) {
        this.mosquitos.forEach((mosquito, index) => {
            const distance = Math.hypot(mosquito.x - x, mosquito.y - y);
            if (distance < 25) {
                // Увеличиваем скорость всех комаров на 3% после каждого убийства в первом уровне
                if (this.level === 1) {
                    this.mosquitos.forEach(m => {
                        m.speed *= 1.06;
                    });
                }
                
                this.score += this.mosquitoTypes[mosquito.type].points;
                this.updateScore();
                this.createParticles(mosquito.x, mosquito.y);
                if (mosquito.type === 'time') {
                    this.timeModifier = 0.5;
                    setTimeout(() => this.timeModifier = 1, 3000);
                }
                this.mosquitos.splice(index, 1);
                
                // Воспроизводим разные звуки в зависимости от типа комара
                if (mosquito.type === 'green') {
                    audioManager.playErrorSound();
                } else {
                    audioManager.playHitSound();
                }
            }
        });
    }

    createParticles(x, y) {
        for (let i = 0; i < 10; i++) {
            this.particles.push(new Particle(x, y));
        }
    }

    updateScore() {
        document.getElementById('scoreValue').textContent = this.score;
    }

    updateTimer() {
        document.getElementById('timeValue').textContent = this.timeLeft;
    }

    endGame() {
        console.log('Game ended');
        cancelAnimationFrame(this.gameLoop);
        clearInterval(this.spawnTimer);
        clearInterval(this.countdownTimer);
        // Stop background music when game ends
        audioManager.stopBackgroundMusic();
        document.getElementById('final-score').textContent = this.score;
        quizManager.startQuiz();
    }
}

const game = new Game();
game.start();



document.getElementById('play-again').addEventListener('click', () => {
    document.getElementById('game-over').classList.add('hidden');
    game.start();
});
