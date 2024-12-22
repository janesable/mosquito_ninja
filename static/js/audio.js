class AudioManager {
    constructor() {
        this.initialized = false;
        
        // Create master volume control
        this.masterVolume = new Tone.Volume(-12).toDestination();
        
        // Create synths for different sound effects
        this.slashSynth = new Tone.Synth({
            oscillator: { type: "triangle" },
            envelope: {
                attack: 0.005,
                decay: 0.05,
                sustain: 0,
                release: 0.1
            }
        }).connect(this.masterVolume);

        this.hitSynth = new Tone.Synth({
            oscillator: { type: "sine" },
            envelope: {
                attack: 0.01,
                decay: 0.1,
                sustain: 0.1,
                release: 0.2
            }
        }).connect(this.masterVolume);

        this.errorSynth = new Tone.Synth({
            oscillator: { type: "square" },
            envelope: {
                attack: 0.01,
                decay: 0.2,
                sustain: 0,
                release: 0.2
            },
            filter: {
                Q: 6,
                type: "lowpass",
                rolloff: -24
            }
        }).connect(this.masterVolume);

        // Create background music synthesizer with better tone
        // Create a more complex background music synthesizer
        this.bgmSynth = new Tone.PolySynth(Tone.FMSynth, {
            oscillator: {
                type: "triangle8"
            },
            envelope: {
                attack: 0.02,
                decay: 0.1,
                sustain: 0.3,
                release: 0.8
            },
            modulation: {
                type: "sine"
            },
            modulationEnvelope: {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5
            }
        }).connect(this.masterVolume);
        
        // Set separate volume for background music
        this.bgmSynth.volume.value = -24; // Lower volume for background music

        // Create a pattern for background music
        this.bgmPattern = null;
        this.initialize();
    }

    async initialize() {
        await Tone.start();
        this.initialized = true;
        this.setupBackgroundMusic();
    }

    setupBackgroundMusic() {
        const melody = [
            [["E4", "G4", "B4"], ["C4", "E4", "G4"]],
            [["A3", "C4", "E4"], ["G3", "B3", "D4"]],
            [["F4", "A4", "C5"], ["D4", "F4", "A4"]],
            [["E4", "G4", "B4"], ["B3", "D4", "F4"]]
        ];
        
        this.bgmPattern = new Tone.Sequence(
            (time, chords) => {
                chords.forEach((chord, i) => {
                    chord.forEach((note, j) => {
                        this.bgmSynth.triggerAttackRelease(
                            note,
                            "8n",
                            time + i * 0.5 + j * 0.05,
                            0.7 - j * 0.1
                        );
                    });
                });
            },
            melody,
            "1n"
        );

        // Set initial tempo and swing for more natural feel
        Tone.Transport.bpm.value = 85;
        Tone.Transport.swing = 0.2;
    }

    startBackgroundMusic() {
        if (!this.initialized) return;
        Tone.Transport.start();
        this.bgmPattern.start();
    }

    stopBackgroundMusic() {
        if (!this.initialized) return;
        this.bgmPattern.stop();
        Tone.Transport.stop();
    }

    playSlashSound() {
        if (!this.initialized) return;
        this.slashSynth.triggerAttackRelease('G5', '0.1');
    }

    playHitSound() {
        if (!this.initialized) return;
        // Play a short ascending arpeggio for hits
        this.hitSynth.triggerAttackRelease('C4', '0.1');
        setTimeout(() => this.hitSynth.triggerAttackRelease('E4', '0.1'), 50);
        setTimeout(() => this.hitSynth.triggerAttackRelease('G4', '0.1'), 100);
    }

    playErrorSound() {
        if (!this.initialized) return;
        // Play a descending pattern for errors
        this.errorSynth.triggerAttackRelease("C3", "8n");
        setTimeout(() => this.errorSynth.triggerAttackRelease("G2", "8n"), 100);
    }
}

const audioManager = new AudioManager();
