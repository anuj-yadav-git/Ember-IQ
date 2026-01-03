import { getDifficultyBadgeClass } from "../lib/utils";
/**
 * Render a detailed problem description view including header, selector, description, examples, and constraints.
 *
 * @param {Object} props
 * @param {Object} props.problem - Detailed problem object.
 * @param {string} props.problem.title - Problem title.
 * @param {string} props.problem.difficulty - Difficulty label (e.g., "Easy", "Medium", "Hard").
 * @param {string} props.problem.category - Problem category or tag.
 * @param {Object} props.problem.description - Description content.
 * @param {string} props.problem.description.text - Main description text.
 * @param {string[]} props.problem.description.notes - Additional description notes.
 * @param {Array<{input: string, output: string, explanation?: string}>} props.problem.examples - Example cases with input, output, and optional explanation.
 * @param {string[]} props.problem.constraints - Constraint strings shown for the problem.
 * @param {string} props.currentProblemId - The id of the currently selected problem.
 * @param {(id: string) => void} props.onProblemChange - Callback invoked with the newly selected problem id.
 * @param {Array<{id: string, title: string, difficulty: string}>} props.allProblems - List of available problems used to populate the selector.
 * @returns {JSX.Element} The ProblemDescription component UI.
 */
function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  return (
    <div className="h-full overflow-y-auto bg-base-200">
      {/* HEADER SECTION */}
      <div className="p-6 bg-base-100 border-b border-base-300">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-3xl font-bold text-base-content">
            {problem.title}
          </h1>
          <span
            className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}
          >
            {problem.difficulty}
          </span>
        </div>
        <p className="text-base-content/60">{problem.category}</p>

        {/* Problem selector */}
        <div className="mt-4">
          <select
            className="select select-sm w-full"
            value={currentProblemId}
            onChange={(e) => onProblemChange(e.target.value)}
          >
            {allProblems.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} - {p.difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* PROBLEM DESC */}
        <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
          <h2 className="text-xl font-bold text-base-content">Description</h2>

          <div className="space-y-3 text-base leading-relaxed">
            <p className="text-base-content/90">{problem.description.text}</p>
            {problem.description.notes.map((note, idx) => (
              <p key={idx} className="text-base-content/90">
                {note}
              </p>
            ))}
          </div>
        </div>

        {/* EXAMPLES SECTION */}
        <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
          <h2 className="text-xl font-bold mb-4 text-base-content">Examples</h2>
          <div className="space-y-4">
            {problem.examples.map((example, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-sm">{idx + 1}</span>
                  <p className="font-semibold text-base-content">
                    Example {idx + 1}
                  </p>
                </div>
                <div className="bg-base-200 rounded-lg p-4 font-mono text-sm space-y-1.5">
                  <div className="flex gap-2">
                    <span className="text-primary font-bold min-w-[70px]">
                      Input:
                    </span>
                    <span>{example.input}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary font-bold min-w-[70px]">
                      Output:
                    </span>
                    <span>{example.output}</span>
                  </div>
                  {example.explanation && (
                    <div className="pt-2 border-t border-base-300 mt-2">
                      <span className="text-base-content/60 font-sans text-xs">
                        <span className="font-semibold">Explanation:</span>{" "}
                        {example.explanation}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONSTRAINTS */}
        <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
          <h2 className="text-xl font-bold mb-4 text-base-content">
            Constraints
          </h2>
          <ul className="space-y-2 text-base-content/90">
            {problem.constraints.map((constraint, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-primary">•</span>
                <code className="text-sm">{constraint}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProblemDescription;