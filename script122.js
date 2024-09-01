// SOS Functionality
function sendSOS() {
    alert('SOS Alert Sent!');
    // Implement actual SOS functionality
}

// Live Location Sharing
function startLiveLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById('live-location').innerText = `Lat: ${lat}, Lon: ${lon}`;
            // You can also implement logic to share this location with emergency contacts
        }, error => {
            alert('Error getting location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Audio Recording
let audioContext, recorder, audioBlob;
const audioPlayback = document.getElementById('audioPlayback');

function startAudioRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Audio recording is not supported by this browser.');
        return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            recorder = new MediaRecorder(stream);
            recorder.ondataavailable = e => {
                audioBlob = e.data;
                audioPlayback.src = URL.createObjectURL(audioBlob);
            };
            recorder.start();
            alert('Audio recording started.');
        })
        .catch(err => {
            alert('Error accessing audio: ' + err.message);
        });
}

function stopAudioRecording() {
    if (recorder) {
        recorder.stop();
        alert('Audio recording stopped.');
    } else {
        alert('No recording in progress.');
    }
}

// Video Recording
let videoRecorder, videoBlob;
const videoPlayback = document.getElementById('videoPlayback');

function startVideoRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Video recording is not supported by this browser.');
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoRecorder = new MediaRecorder(stream);
            videoRecorder.ondataavailable = e => {
                videoBlob = e.data;
                videoPlayback.src = URL.createObjectURL(videoBlob);
            };
            videoRecorder.start();
            alert('Video recording started.');
        })
        .catch(err => {
            alert('Error accessing video: ' + err.message);
        });
}

function stopVideoRecording() {
    if (videoRecorder) {
        videoRecorder.stop();
        alert('Video recording stopped.');
    } else {
        alert('No recording in progress.');
    }
}

// Voice Command Activation
// This is a simplified version; for real implementation, you would use a library or API for voice recognition
function activateVoiceCommand() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes('help')) {
            activatePanicMode();
        }
    };
    recognition.start();
}

// Panic Mode
function activatePanicMode() {
    alert('Panic mode activated!');
    // Implement actual panic mode functionality, e.g., sending alerts, triggering alarms
}

// Unusual Behavior Detection
function detectUnusualBehavior() {
    // Placeholder for actual detection logic
    alert('Monitoring for unusual behavior.');
    // Implement actual behavior monitoring logic
}

// Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    alert('Message sent successfully!');
    // Implement actual form submission logic here
});

// Logout Functionality
document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.getElementById('logout');

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Redirect to the login page
        window.location.href = 'index.html';
    });
});
