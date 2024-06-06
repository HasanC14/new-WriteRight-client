import { useState } from "react";
import "./App.css";
import { FaCopy, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
function App() {
  const [activeTab, setActiveTab] = useState("Rewrite");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOutputText("");
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleParaphrase = () => {
    // Here you would make the API call
    setOutputText(
      "The result is not valid due to skill issues by the developer"
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-col items-center my-4">
        <img src="/public/logo.png" alt="" className="w-40" />
        {/* <div style={{ fontFamily: "Quicksand" }} className="text-xl">
          Write Smart, Write Right
        </div> */}
      </div>
      {/* Buttons */}
      <div className="flex space-x-4 mb-4">
        {["Rewrite", "Grammar", "Formal", "Summarize", "Creative"].map(
          (tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                activeTab === tab ? "bg-prime text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>
      {/* Text Fields */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-7xl relative">
        <textarea
          className="flex-1 p-4 border rounded-md resize-none h-64 md:h-96 text-sm"
          placeholder={`To ${activeTab.toLowerCase()} text, enter or paste it here and press "paraphrase"`}
          value={inputText}
          onChange={handleInputChange}
        />
        <textarea
          className="flex-1 p-4 border rounded-md resize-none h-64 md:h-96 text-sm "
          placeholder="The result will appear here"
          value={outputText}
          readOnly
        />
        <div className="absolute top-1 right-1">
          <button
            className="p-3 text-xl  text-gray-500 rounded"
            onClick={() => navigator.clipboard.writeText(outputText)}
          >
            <FaCopy />
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="text-xs mt-10">
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/dev1hasanchowdhury/"
          className="text-prime hover:underline"
          target="_blank"
        >
          Hasan Chowdhury
        </a>
      </div>
      <div className="flex space-x-2 mt-1 hover:*:scale-110 ">
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
      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-prime text-white rounded"
          onClick={handleParaphrase}
        >
          Paraphrase
        </button>
      </div>
    </div>
  );
}

export default App;
