import { useState } from "react";
import "./App.css";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
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
      {/* Buttons */}
      <div className="flex space-x-4 mb-4">
        {["Rewrite", "Grammar", "Formal", "Summarize", "Creative"].map(
          (tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>
      {/* Text Fields */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-7xl">
        <textarea
          className="flex-1 p-4 border rounded-md resize-none h-64 md:h-96 text-sm"
          placeholder={`To ${activeTab.toLowerCase()} text, enter or paste it here and press "paraphrase"`}
          value={inputText}
          onChange={handleInputChange}
        />
        <textarea
          className="flex-1 p-4 border rounded-md resize-none h-64 md:h-96 text-sm"
          placeholder="The result will appear here"
          value={outputText}
          readOnly
        />
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
      <div className="flex space-x-2 mt-1 hover:*:scale-110 *transition-all *ease-in-out *duration-700 ">
        <a
          href="https://www.facebook.com/dev.hasanchowdhury"
          className="cursor-pointer"
        >
          <FaFacebook />
        </a>
        <a href="" className="cursor-pointer">
          <FaGithub />
        </a>
        <a href="" className="cursor-pointer">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleParaphrase}
        >
          Paraphrase
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => navigator.clipboard.writeText(outputText)}
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;
