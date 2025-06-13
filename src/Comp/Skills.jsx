import skills from "../skillsection";

const Skillsection = () => {
  return (
    <div className="mt-20">
      <div className="p-8 flex justify-around flex-wrap gap-8">
        {skills.map((each_skill) => {
          return (
            <div
              key={each_skill.id}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl w-64 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
            >
              <h1 className="text-3xl text-white mb-4 font-semibold">{each_skill.category}</h1>
              {each_skill.skill.map((skill, index) => {
                return (
                  <div key={index} className="mb-2">
                    <h2 className="text-lg text-gray-100">{skill}</h2>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skillsection;

