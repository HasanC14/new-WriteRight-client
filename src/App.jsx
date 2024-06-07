import { useEffect, useState } from "react";
import "./App.css";
import { FaCopy, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

import { Navigation } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
const filters = [
  { text: "Rewrite", endpoint: "rewrite" },
  { text: "Fluency", endpoint: "fluency" },
  { text: "Natural", endpoint: "natural" },
  { text: "Formal", endpoint: "formal" },
  { text: "Academic", endpoint: "academic" },
  { text: "Simple", endpoint: "simple" },
  { text: "Creative", endpoint: "creative" },
  { text: "Expand", endpoint: "expand" },
  { text: "Concise", endpoint: "shorten" },
  { text: "Grammar", endpoint: "grammar" },
  { text: "Summarize", endpoint: "summarize" },
];
function App() {
  const [activeTab, setActiveTab] = useState("");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Copy, setCopy] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleTabClick = async (endpoint, text) => {
    setCopy(false);
    setLoading(true);
    setActiveTab(text);
    setOutputText("");
    if (inputText) {
      await axios
        .post(
          `https://write-right-server-p4f3-hasanc14-hasanc14s-projects.vercel.app/${endpoint}`,
          {
            inputValue: inputText,
          }
        )
        .then((response) => {
          setOutputText(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setOutputText("Write something first 😒 ");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const HandleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopy(true);
  };

  const handleResize = () => {
    if (window.innerWidth <= 350) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 550) {
      setSlidesPerView(3);
    } else if (window.innerWidth <= 720) {
      setSlidesPerView(5);
    } else {
      setSlidesPerView(7);
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      {/* Buttons */}
      <div className="hidden lg:flex flex-wrap gap-2 mb-4 text-sm p-2 max-w-full">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded hover:scale-110 transition-all ease-in-out duration-700 ${
              activeTab === filter.text
                ? "bg-prime text-white scale-125"
                : "bg-gray-100"
            }`}
            onClick={() => handleTabClick(filter.endpoint, filter.text)}
          >
            {filter.text}
          </button>
        ))}
      </div>
      <div className="lg:hidden mb-4 text-xs p-2 max-w-full">
        <Swiper spaceBetween={10} slidesPerView={slidesPerView}>
          {filters.map((filter, index) => (
            <SwiperSlide key={index}>
              <button
                className={`px-4 py-2 rounded hover:scale-110 transition-all ease-in-out duration-700 ${
                  activeTab === filter.text
                    ? "bg-prime text-white scale-125 "
                    : "bg-gray-100"
                }`}
                onClick={() => handleTabClick(filter.endpoint, filter.text)}
              >
                {filter.text}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Text Fields */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full max-w-7xl relative">
        <div className="md:w-1/2 w-full">
          <textarea
            className="flex-1 p-4 border rounded-md resize-none h-64 md:h-96 text-sm w-full bg-gray-100"
            placeholder="Write Smart, Write Right 😌"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <textarea
            className="flex-1 p-4 md:pe-10 pe-0 pt-7 border rounded-md resize-none h-64 md:h-96 text-sm w-full bg-gray-50"
            placeholder={
              Loading
                ? "Thinking... 🤔"
                : "Paraphrased content will appear here"
            }
            value={outputText}
            readOnly
          />
          <div className="absolute md:top-1 top-1/2 right-1">
            <button
              className="p-3 md:text-xl text-sm  text-prime rounded"
              onClick={HandleCopy}
            >
              {Copy ? (
                <div className="flex space-x-1 items-center">
                  <FaCheck />
                  <span className="text-xs">Copied</span>
                </div>
              ) : (
                <div className="flex space-x-1 items-center">
                  <FaCopy />
                  <span className="text-xs">Copy</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-xs mt-10 flex flex-col md:flex-row items-center">
        <div className="text-prime text-lg md:mr-2 mr-0">WriteRight</div>
        <div>
          Made with ❤️ by
          <a
            href="https://www.linkedin.com/in/dev1hasanchowdhury/"
            className="text-prime hover:underline"
            target="_blank"
          >
            Hasan Chowdhury
          </a>
        </div>
      </div>
      <div className="flex space-x-2 mt-1 hover:*:scale-110 text-lg text-prime">
        <a
          href="https://www.facebook.com/dev.hasanchowdhury"
          className="cursor-pointer"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/HasanC14/new-WriteRight-client"
          className="cursor-pointer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dev1hasanchowdhury/"
          className="cursor-pointer"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export default App;
