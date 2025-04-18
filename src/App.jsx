import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const [button, setButton] = useState(true);
  const [entereddata, setEntereddata] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("hi");
  const [loading, setLoading] = useState(false);
  const languages = [
    { shortName: "af", fullName: "Afrikaans" },
    { shortName: "sq", fullName: "Albanian" },
    { shortName: "am", fullName: "Amharic" },
    { shortName: "ar", fullName: "Arabic" },
    { shortName: "hy", fullName: "Armenian" },
    { shortName: "az", fullName: "Azerbaijani" },
    { shortName: "eu", fullName: "Basque" },
    { shortName: "be", fullName: "Belarusian" },
    { shortName: "bn", fullName: "Bengali" },
    { shortName: "bs", fullName: "Bosnian" },
    { shortName: "bg", fullName: "Bulgarian" },
    { shortName: "ca", fullName: "Catalan" },
    { shortName: "ceb", fullName: "Cebuano" },
    { shortName: "zh", fullName: "Chinese" },
    { shortName: "zh-CN", fullName: "Chinese (Simplified)" },
    { shortName: "zh-TW", fullName: "Chinese (Traditional)" },
    { shortName: "co", fullName: "Corsican" },
    { shortName: "hr", fullName: "Croatian" },
    { shortName: "cs", fullName: "Czech" },
    { shortName: "da", fullName: "Danish" },
    { shortName: "nl", fullName: "Dutch" },
    { shortName: "en", fullName: "English" },
    { shortName: "eo", fullName: "Esperanto" },
    { shortName: "et", fullName: "Estonian" },
    { shortName: "fi", fullName: "Finnish" },
    { shortName: "fr", fullName: "French" },
    { shortName: "fy", fullName: "Frisian" },
    { shortName: "gl", fullName: "Galician" },
    { shortName: "ka", fullName: "Georgian" },
    { shortName: "de", fullName: "German" },
    { shortName: "el", fullName: "Greek" },
    { shortName: "gu", fullName: "Gujarati" },
    { shortName: "ht", fullName: "Haitian Creole" },
    { shortName: "ha", fullName: "Hausa" },
    { shortName: "haw", fullName: "Hawaiian" },
    { shortName: "he", fullName: "Hebrew" },
    { shortName: "hi", fullName: "Hindi" },
    { shortName: "hmn", fullName: "Hmong" },
    { shortName: "hu", fullName: "Hungarian" },
    { shortName: "is", fullName: "Icelandic" },
    { shortName: "ig", fullName: "Igbo" },
    { shortName: "id", fullName: "Indonesian" },
    { shortName: "ga", fullName: "Irish" },
    { shortName: "it", fullName: "Italian" },
    { shortName: "ja", fullName: "Japanese" },
    { shortName: "jw", fullName: "Javanese" },
    { shortName: "kn", fullName: "Kannada" },
    { shortName: "kk", fullName: "Kazakh" },
    { shortName: "km", fullName: "Khmer" },
    { shortName: "rw", fullName: "Kinyarwanda" },
    { shortName: "ko", fullName: "Korean" },
    { shortName: "ku", fullName: "Kurdish" },
    { shortName: "ky", fullName: "Kyrgyz" },
    { shortName: "lo", fullName: "Lao" },
    { shortName: "la", fullName: "Latin" },
    { shortName: "lv", fullName: "Latvian" },
    { shortName: "lt", fullName: "Lithuanian" },
    { shortName: "lb", fullName: "Luxembourgish" },
    { shortName: "mk", fullName: "Macedonian" },
    { shortName: "mg", fullName: "Malagasy" },
    { shortName: "ms", fullName: "Malay" },
    { shortName: "ml", fullName: "Malayalam" },
    { shortName: "mt", fullName: "Maltese" },
    { shortName: "mi", fullName: "Maori" },
    { shortName: "mr", fullName: "Marathi" },
    { shortName: "mn", fullName: "Mongolian" },
    { shortName: "my", fullName: "Myanmar (Burmese)" },
    { shortName: "ne", fullName: "Nepali" },
    { shortName: "no", fullName: "Norwegian" },
    { shortName: "ny", fullName: "Nyanja" },
    { shortName: "or", fullName: "Odia" },
    { shortName: "ps", fullName: "Pashto" },
    { shortName: "fa", fullName: "Persian" },
    { shortName: "pl", fullName: "Polish" },
    { shortName: "pt", fullName: "Portuguese" },
    { shortName: "pa", fullName: "Punjabi" },
    { shortName: "ro", fullName: "Romanian" },
    { shortName: "ru", fullName: "Russian" },
    { shortName: "sm", fullName: "Samoan" },
    { shortName: "gd", fullName: "Scottish Gaelic" },
    { shortName: "sr", fullName: "Serbian" },
    { shortName: "st", fullName: "Sesotho" },
    { shortName: "sn", fullName: "Shona" },
    { shortName: "sd", fullName: "Sindhi" },
    { shortName: "si", fullName: "Sinhala" },
    { shortName: "sk", fullName: "Slovak" },
    { shortName: "sl", fullName: "Slovenian" },
    { shortName: "so", fullName: "Somali" },
    { shortName: "es", fullName: "Spanish" },
    { shortName: "su", fullName: "Sundanese" },
    { shortName: "sw", fullName: "Swahili" },
    { shortName: "sv", fullName: "Swedish" },
    { shortName: "tg", fullName: "Tajik" },
    { shortName: "ta", fullName: "Tamil" },
    { shortName: "tt", fullName: "Tatar" },
    { shortName: "te", fullName: "Telugu" },
    { shortName: "th", fullName: "Thai" },
    { shortName: "tr", fullName: "Turkish" },
    { shortName: "tk", fullName: "Turkmen" },
    { shortName: "uk", fullName: "Ukrainian" },
    { shortName: "ur", fullName: "Urdu" },
    { shortName: "ug", fullName: "Uyghur" },
    { shortName: "uz", fullName: "Uzbek" },
    { shortName: "vi", fullName: "Vietnamese" },
    { shortName: "cy", fullName: "Welsh" },
    { shortName: "xh", fullName: "Xhosa" },
    { shortName: "yi", fullName: "Yiddish" },
    { shortName: "yo", fullName: "Yoruba" },
    { shortName: "zu", fullName: "Zulu" },
  ];

  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      let response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${entereddata}&langpair=${from}|${to}`
      );
      console.log(response.data);
      setLoading(false);
      setData(response.data.responseData.translatedText);
    }

    if (entereddata) {
      fetchdata();
    }
  }, [button]);

  return (
    <>
      <div className="h-screen bg-slate-600 w-full m-auto flex flex-col justify-between sm:w-[70%] p-3 md:w-[50%]border-black border">
        <div className="h-[10vh] p-3 bg-green-500 flex items-center justify-center gap-4">
          From
          <div>
            <select
              name=""
              id=""
              className="w-[70%]"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
            
            >
              {languages.map((items) => {
                return (
                  <option value={items.shortName}>{items.fullName}</option>
                );
              })}
            </select>
          </div>
          To
          <div>
            <select
              name=""
              id=""
              className="w-[70%]"
              onChange={(e) => setTo(e.target.value)}
              value={to}
            >
              {languages.map((item) => {
                return <option value={item.shortName}>{item.fullName}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="h-[40vh]">
          <textarea
            name=""
            id=""
            className="h-full w-full"
            onChange={(e) => setEntereddata(e.target.value)}
            value={entereddata}
          ></textarea>
        </div>
        {loading && (
          <div className="text-3xl h-screen w-screen bg-transparent absolute top-0 left-0 z-10 backdrop-blur-lg]"></div>
        )}
        <button
          className="bg-blue-700 self-center absolute py-3 px-5 top-[53.3%]"
          onClick={() => setButton(!button)}
        >
          Convert
        </button>
        <div className="h-[40vh]">
          <textarea
            name=""
            id=""
            className="h-full w-full bg-green-700"
            value={data}
            readOnly
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default App;
