import Exjmple from '../assets/Exjmple.jpg';
import Cards from './Cards';



const Projects = () => {

  const projectJson = [
  
    {
      title: 'Exjmple  ',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: Exjmple,
      live: "https://rohitsin-portfolio.vercel.app/",
      github: "https://github.com/rohitsingh93300/portfolio"
    },
   
    
  ];

  return (
    <section id="projects" className='relative bg-gray-200 py-10 px-4'>
      <div id="projects" className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">           
              {projectJson.map((items) => {
                return <Cards key={items._id} item={items} />              
              })}     
        </div>
      </div>

    </section>
  )
}

export default Projects
