const Projects = () => {
  return (
    <div className="text-white tracking-wide px-6 py-12 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-12 text-cyan-400">
        🚀 My Blockchain Projects & Audit Reports
      </h1>

      {/* Solidity Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-6 border-b border-cyan-700 pb-2">
          🧠 Solidity Projects
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Project 1 – Push Do</h3>
            <p className="text-gray-300">
              Inspired by Nudge, this decentralized reminder system helps users track tasks through community-approved campaigns.
            </p>
            <a
              href="https://github.com/Harisuthan-code/PushDO---Project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              🔗 GitHub Link
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Project 2 – YieldMorph</h3>
            <p className="text-gray-300">
              A custom-built DeFi vault inspired by Morpho, allowing users to deposit DAI tokens and earn passive income securely.
            </p>
            <a
              href="https://github.com/Harisuthan-code/YieldMorph-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              🔗 GitHub Link
            </a>
          </div>
        </div>
      </section>

      {/* Full Stack Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-6 border-b border-cyan-700 pb-2">
          ⚙️ Full Stack Projects (React, Node, PostgreSQL, TailwindCSS)
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Project 1 – Etrackle</h3>
            <p className="text-gray-300">
              View and manage all your Ethereum transactions from a single dashboard with accuracy and ease.
            </p>
            <a
              href="https://etrackle.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              🔗 Website Link
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Project 2 – AwayLost</h3>
            <p className="text-gray-300">
              A verification tool to help NFT buyers detect authenticity and avoid scams with real-time checks.
            </p>
            <a
              href="https://awaylost.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              🔗 Website Link
            </a>
          </div>
        </div>
      </section>

      {/* Audit Reports Section */}
      <section>
        <h2 className="text-2xl font-semibold text-cyan-300 mb-6 border-b border-cyan-700 pb-2">
          🔍 Smart Contract Audit Reports
        </h2>

        <p className="text-gray-300 mb-2">
          Conducted manual audits of Solidity smart contracts using Foundry and static analysis tools. Documented findings in detailed reports simulating real-world bug bounty scenarios.
        </p>
        <a
          href="https://github.com/Harisuthan-code/Hari-Audit-Reports"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          🔗 Reports Link
        </a>
      </section>
    </div>
  );
};

export default Projects;
