import ebytr from './images/ebytr.png';
import pokemonTcg from './images/pokemon-tcg.png';
import cookmaster from './images/cookmaster-example.png';

const projects = [
  {
    title: 'Ebytr To Do List',
    description: 'Full-stack todo list application developed using the MERN stack. Features include creating a new user and login using JWT authentication. Tasks may be created, edited, deleted and mark as completed.',
    image: ebytr,
    code: 'https://github.com/leonardo-pinto/ebytr-mern-challenge',
    tags: ['NodeJS', 'Express', 'Mocha', 'Chai', 'MongoDB', 'React', 'Redux', 'Tailwind CSS', 'Jest', 'React Testing Library'],
  },
  {
    title: 'Pokémon TCG App',
    description: 'Application that displays Pokémon TCG cards. The user can filter by card name, type and also sort alphabetically. Moreover, it enables to favorite cards, detailed information and also to check Pokémon facts.',
    image: pokemonTcg,
    code: 'https://github.com/leonardo-pinto/pokemon-tcg-app',
    app: 'https://pokemon-tcg-app.vercel.app/',
    tags: ['React', ' Context API', 'React Hooks', 'Tailwind CSS'],
  },
  {
    title: 'Cookmaster',
    description: 'Project developed during the Trybe web developer course. Consists of a CRUD REST API, where users and recipes may be created. JWT authentication is required to perform some actions. In addition, the user may upload an image.',
    image: cookmaster,
    code: 'https://github.com/leonardo-pinto/Cookmaster-API',
    tags: ['NodeJS', 'Express', 'MongoDB', 'Mocha', 'Chai'],
  },
];

export default projects;
