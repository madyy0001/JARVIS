let talk_btn = document.querySelector(".talk");
let content = document.querySelector(".content-msg");
let content_btn = document.querySelector(".content");

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBICIcH8QSwKOcdbDXqhFDWGams0_P6JmM";

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;

  window.speechSynthesis.speak(text_speak);
}

function tellMe() {
  let date = new Date();
  let hour = date.getHours();
  if (hour > 0 && hour < 12) {
    speak("Good Morning Boss");
  } else if (hour >= 12 && hour < 17) {
    speak("Good Afternoon Boss");
  } else {
    speak("Good Evening Boss");
  }
}

window.addEventListener("load", () => {
  speak("Hello i'm Jarvis Initializing");
  tellMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

content_btn.addEventListener("click", () => {
  content.textContent = "Listening...";
  recognition.start();
});

function takeCommand(message) {
  if (message.includes("hello jarvis") || message.includes("hey jarvis")) {
    speak("Hello Boss! How are You");
  } else if (message.includes("open youtube")) {
    window.open("https://www.youtube.com/", "_blank");
    speak("openning youtube");
  } else if (message.includes("open instagram")) {
    window.open("https://www.instagram.com/", "_blank");
    speak("openning instagram");
  } else if (message.includes("open google")) {
    window.open("https://www.google.com/", "_blank");
    speak("openning google");
  } else if (message.includes("open whatsapp")) {
    window.open("https://web.whatsapp.com/", "_blank");
    speak("openning whatsapp");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("when")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speak(finalText);
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("where is")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speak(finalText);
  } else if (message.includes("date")) {
    const time = new Date().toLocaleString(undefined, {
      month: "numeric",
      day: "numeric",
      
    });
    const finalText = time;
    speak(finalText);
    4;
  } else if (message.includes("open calculator")) {
    window.open("calculator:///");
    speak("opening calculator");
  } else if (message.includes("weather")) {
    const getWeatherData = async () => {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=466b3ad6eca0eef0c5bb048f1b8bc861&units=metric`;

      try {
        const res = await fetch(weatherUrl);
        const data = await res.json();
        const { main, weather, wind } = data;
        speak(`atmosphere ${weather[0].main}`);
        speak(`The temprature is ${main.temp.toFixed()}degree celcious`);
        speak(`wind speed is ${wind.speed} ms`);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
  } else if (message.includes("do you have any girlfriend")) {
    //speak("No Boss, i'm not interested");
    content.innerHTML = `<audio src="Ham.mp3" autoplay></audio>`;
  } else if (message.includes("do you know me")) {
    speak(
      "yes Boss, your Name is Mahadi and Your are a web developer"
    );
  } else if (message.includes("good morning")) {
    speak("Good morning Boss, have a nice day");
  } else if (message.includes("love you")) {
    speak("thank you so much Boss, i love you too");
  } else if (
    message.includes("how are you")
  ) {
    speak("i'm fine, and how are you sir");
  } else if (message.includes("i am also fine")) {
    speak("that's good Boss");
  } else if (message.includes("will ever get a girlfriend")) {
    speak(
      "no sir, because he is a good person, he dosen't know how to talk to girls"
    );
  } else if (message.includes("do you know suraj")) {
    speak("he is your friend");
  } else if (message.includes("hrithik")) {
    speak("yes Boss, he is my boss, he created me");
  } else if (
    message.includes("has brain") ||
    message.includes("ladkiyon mein dimag hota hai")
  ) {
    speak("Yes Boss, girls has brain but in their knees");
  } else if (
    message.includes("ladkon mein dimag hota hai") ||
    message.includes("boys")
  ) {
    speak("yess Boss, boys are so intelligent like you sir");
  } else if (
    message.includes("are you mad") ||
    message.includes("tum pagal ho")
  ) {
    //speak("no, you are mad because you are asking");
     content.innerHTML = `<audio src="Bakchodi.mp3" autoplay ></audio>`;
  } else if (message.includes("don't like you")) {
    content.innerHTML = `<audio src="behen.mp3" autoplay></audio>`;
  } else if (message.includes("bahan ke loade")) {
    content.innerHTML = `<audio src="behen.mp3" autoplay></audio>`;
  } else if (message.includes("wrong") || message.includes("tum galat ho")) {
    content.innerHTML = `<audio src="ha-malum-hai.mp3" autoplay></audio>`;
  } else if (
    message.includes("would you like to drink") ||
    message.includes("tum bear pina chahte ho")
  ) {
    speak("Yes Boss, if you want, i drink");
  } else if (message.includes("uncle")) {
    speak("Namastey! How are you uncle");
  } else if (message.includes("Yogesh")) {
    speak("Hello! Bittu Sir How are you");
  }

  else if (message.includes("can you tell me about my career")) {
    speak("i haven't any information about your career, but i think your career is lost.");
  }
  else if(message.includes("tell me about my future")){
    speak("You are so lazy Boss, so Your future is dark, and you can't get any type of job in future")
  }
  else if(message.includes("close the window")){
    window.close()
    speak("i can't close your window without your permission")
  }
  // else{
  //   speak("fuck you asshole");
  // }
  else {
    speak("Please Give Right Command Boss");
  }
}

// var speech = new SpeechSynthesisUtterance();
// speech.text = "Hello";
// speech.volume = 1; // 0 to 1
// speech.rate = 1; // 0.1 to 9
// speech.pitch = 1; // 0 to 2, 1=normal
// speech.lang = "en-US";
// speechSynthesis.speak(speech);
