import portfolioimage from '../../public/images/Portfolioimage.jpg'
import Auditportfolio from "../../public/images/Hari-state.png"
import { Link } from 'react-router-dom';

const Herosection = () => {

    return(

        <div>
            
            <div className="flex justify-around items-center mt-20 ssm:flex-col lg:flex-row">

            <div className="space-y-5 ml-5">

                <h1 className="text-4xl font-semibold">Hi, I am <span className='text-red-500'>Harisuthan</span></h1>
                <h2 className="text-lg text-gray-500 ssm:text-xl lg:3xl">Aspiring Blockchain Developer | Open to Junior Roles in Web3</h2>
                <Link to = "/Project"><button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-5">View My Projects</button></Link>

            </div>

            <div>
            <img src={portfolioimage} className="w-[400px] h-[400px] rounded-full border-4 border-white mt-10 ssm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]" alt="yourimage"/>
            </div>

        </div>



      <div className="mt-40 px-6 text-center" id="about-preview">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-white-800 max-w-4xl mx-auto  text-left">
           Hi! I’m Harisuthan, a 23-year-old aspiring blockchain developer with a passion for building decentralized applications and exploring the world of Web3.

                I completed my Advanced Level in the Commerce stream in 2022. After that, I earned a diploma from ICBT Campus in 2022, and later completed full-stack and blockchain development courses in 2024. These courses gave me strong skills in Solidity, smart contracts, and full-stack development.

                Before fully focusing on blockchain, I gained valuable work experience as an Account Assistant and Document Expert, where I handled accounting tasks and office documentation with accuracy and professionalism. This experience taught me discipline, attention to detail, and effective communication — qualities I now bring into my software development journey.

                I am currently seeking junior blockchain developer roles where I can apply my skills, continue learning, and contribute to exciting Web3 projects. I am motivated, eager to grow, and ready to make an impact in the blockchain space.
        </p>

        </div>



        <div className="mt-40 px-6 text-center flex justify-between items-center ssm:flex-col lg:flex-row"  id="projects-preview">

        <div>
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        
        <p className="text-white-700 max-w-2xl mx-auto">
            I love turning ideas into working decentralized apps. Here are some real-world Web3 projects I’ve built using Solidity, React,foundry , Hardhat, and smart contract security principles.
        </p>
        
        <Link to="/project">
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            See My Projects →
            </button>
        </Link>
        </div>


        <div>

            <img src={portfolioimage} className="w-[400px] h-[400px] rounded-full border-4 border-white mt-10 ssm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]" alt="yourimage"/>


        </div>

        </div>



    <section id="skills" className="mt-40 px-6 text-center">
    <h2 className="text-2xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-2">My Skills</h2>
    
<div className="flex flex-wrap justify-around max-w-6xl mx-auto gap-8 px-4 mt-10">
  <div className="w-full sm:w-5/12 md:w-1/4 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[220px] bg-transparent">
    <h3 className="text-2xl font-bold mb-3 text-white border-b-2 border-blue-500 inline-block pb-1">1) Solidity</h3>
    <p className="text-gray-300 text-base">Smart Contracts & DApp Development</p>
  </div>

  <div className="w-full sm:w-5/12 md:w-1/4 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[220px] bg-transparent">
    <h3 className="text-2xl font-bold mb-3 text-white border-b-2 border-green-500 inline-block pb-1">2) React</h3>
    <p className="text-gray-300 text-base">Frontend Development & UI</p>
  </div>

   <div className="w-full sm:w-5/12 md:w-1/4 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[220px] bg-transparent">
    <h3 className="text-1xl font-bold mb-3 text-white border-b-2 border-green-500 inline-block pb-1">3) Node js + express PostgerSql</h3>
    <p className="text-gray-300 text-base">Backend Development & Database</p>
  </div>

  <div className="w-full sm:w-5/12 md:w-1/4 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[220px] bg-transparent">
    <h3 className="text-2xl font-bold mb-3 text-white border-b-2 border-yellow-500 inline-block pb-1">4) Hardhat And Foundry</h3>
    <p className="text-gray-300 text-base">Testing & Deployment Framework</p>
  </div>

  <div className="w-full sm:w-5/12 md:w-1/4 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[220px] bg-transparent">
    <h3 className="text-2xl font-bold mb-3 text-white border-b-2 border-indigo-500 inline-block pb-1">5) Web3.js / Ethers.js</h3>
    <p className="text-gray-300 text-base">Blockchain Interaction Libraries</p>
  </div>

  <div className="w-full sm:w-5/12 md:w-1/4 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[220px] bg-transparent">
    <h3 className="text-2xl font-bold mb-3 text-white border-b-2 border-red-500 inline-block pb-1">6) Smart Contract Auditing</h3>
    <p className="text-gray-300 text-base">Codehawks profile</p>
    <img src={Auditportfolio} className="mt-10 " alt="yourimage"/>
  </div>
</div>

    </section>



    <div className="max-w-4xl mx-auto px-6 py-16 text-center mt-20">
  <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-2">Contact Me</h2>

  <p className="mb-6 text-gray-700 text-lg">
    I’m open to junior blockchain developer roles. Feel free to reach out!
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
    <a href="mailto:codehari662@gmail.com" className="text-blue-600 hover:underline text-lg">
      📧 harisuthan5534798@gmail.com
    </a>
    <a href="https://www.linkedin.com/in/hari-suthan-01665433b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
      🔗 LinkedIn
    </a>
    <a href="https://github.com/Harisuthan-code" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
      🐱 GitHub
    </a>
  </div>

  <a 
    href="mailto:codehari662@gmail.com" 
    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
  >
    Send Me an Email
  </a>
</div>




















    </div>



    )
}

export default Herosection;
