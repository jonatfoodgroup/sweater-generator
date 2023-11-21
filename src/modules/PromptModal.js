import React, { useState, useEffect } from "react";
import { setPrompt, getPrompt } from "../firebase/firebaseConfig";

function PromptModal({ setPromptModalOpen, promptModalOpen }) {
  const [localPrompt, setLocalPrompt] = useState("");
  const [existingPrompt, setExistingPrompt] = useState("");

  useEffect(() => {
    const getPromptFromFirebase = async () => {
      const prompt = await getPrompt();
      setLocalPrompt(prompt);
      setExistingPrompt(prompt);
    }
    getPromptFromFirebase();

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setPrompt(localPrompt);
    setPromptModalOpen(false);
  }

  const handleCancel = () => {
    setPromptModalOpen(false);
  }

  const handlePromptChange = (e) => {
    setLocalPrompt(e.target.value);
  }

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${promptModalOpen ? "block" : "hidden"}`}>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
  
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
  
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <form onSubmit={handleSubmit}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {existingPrompt ? "Update Prompt" : "Add New Prompt"}
                </h3>
                <div className="mt-2">
                  <div className="mb-4">
                    <label
                      htmlFor="prompt"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Prompt
                    </label>
                    <textarea
                      id="prompt"
                      name="prompt"
                      rows="4"
                      cols="50"
                      value={localPrompt}
                      onChange={handlePromptChange}
                      placeholder="Enter your prompt here"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
              onClick={handleSubmit}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  );
}

export default PromptModal;