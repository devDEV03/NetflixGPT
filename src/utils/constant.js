
import { GoogleGenerativeAI } from "@google/generative-ai";

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