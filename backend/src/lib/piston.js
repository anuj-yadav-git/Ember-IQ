// Piston API is a service for code execution

const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  //We can add more languages
};

/**
 * Execute source code in a supported language using the Piston execution API.
 *
 * @param {string} language - Language key identifying the runtime to use (e.g., "javascript", "python", "java"); must be one of the supported languages.
 * @param {string} code - Source code to execute.
 * @returns {{success: boolean, output?: string, error?: string}} `{success: true, output: string}` on successful execution; `{success: false, error: string, output?: string}` on failure or when stderr is produced.
 */


export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //tells server I Am sending json data
      },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        //Piston executes the code from files 
        files: [
          {
            name: `main.${getFileExtension(language)}`,
            content: code,
          },
        ],
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    const output = data.run.output || "";
    const stderr = data.run.stderr || "";

    if (stderr) {
      return {
        success: false,
        output: output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

/**
 * Return the file extension associated with a language identifier.
 * @param {string} language - The language key (e.g., "javascript", "python", "java").
 * @returns {string} The file extension for the language (e.g., "js", "py", "java"); returns "txt" if unknown.
 */
function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
  };

  return extensions[language] || "txt";
}