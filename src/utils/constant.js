
import { GoogleGenerativeAI } from "@google/generative-ai";

export const ProfilePFPLink = "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/";
export const photosArrLinks = ["AAAABeN_fFHVSW7txklmF-pQ1HcvwrI5RBUqsGFHsClPvbGKAxN568VbCfknCsrkTwLn42BbtgVJ7ALPSlVV9xcHUOCiDaYHW0n32w.png?r=b6d","AAAABXtD54DCC17oJckuPySYFdqCtH5sJS_oBZKa5HYx0AY9PsExErLo4zhknEvyCR9Mq_DA1G00X_6C1emFNIgg0TdsU9Fs5G9gMQ.png?r=b8c","AAAABQpxO0hXGr32G006_MXWC3Kof89kOvQGvLBsjhAZMUgVu2gYcH_BPODpXKJgV5v31xfVB0EP-OdhASYfTkEz9r1iduztpiiivg.png?r=0a8","AAAABUfM7KXpYZnHD0YSigXGcFnaEJeTltoI-LYKlL4bIAFNe20BVDfDj2jN_7C3Nf1docq3DVRzU1BmAj0P-oYHfAUVZPBFTNDUyw.png?r=c1a","AAAABWwt37RxrJ1FCGu3B0oS4SH1b0UhfOWcuWNUF3gdFZ11KAXesu4pusSByw5llqIm7XKPFheazq43kfHnwW9YhwW4phqhoTy6SA.png?r=8d8","AAAABTQS-K0jfd3rOHiyOyDDt_dVX-IWlcEP02-wxo2VrzuwHrmkCx3KPtD75JKcywuP_SkVz8WIklvLOH5OcId6YZMUThC1Q2PubQ.png?r=897","AAAABb-UEohY3NiNB0U4j41eGF6Jm1OA3bTkMACEoecepbbR36BWBxYn20ZDahQH5ms_71m7FA2a3jTQoNCx05wLahji7AUBFoNiBg.png?r=185"]

export const LOGIN_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg";
export const PHOTO_URL = "https://avatars.githubusercontent.com/u/123757089?v=4";
export const YOUTUBE_VIDEO = "https://www.youtube.com/embed/";
export const MOVIE_CARD_IMG = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTIwNzE5YjNlMzdiOTRmYzdiZWQ2MmExYjQyNGM4ZiIsIm5iZiI6MTcyOTE2MDg2NS45MzA2NjYsInN1YiI6IjY3MTBkZTgyNmJmZmExNGNmNDExMmFiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5icTyp-5Wp0-YbnRx1bI_GP_ezGLr416mLoaybm0ITc'
    }
};

export const SUPPORTED_LANGUAGES = [{identifier : "en",language : "English"},{identifier : "hindi",language : "Hindi"},{identifier : "spanish",language : "Spanish"}];



const genAi = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);


export const model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash-002",
  });

export const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };