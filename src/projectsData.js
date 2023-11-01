import pokemonTcg from './assets/images/pokemon-tcg.png';
import investmentManager from './assets/images/investment-manager.png';
import awsServerless from './assets/images/aws-serverless.jpg';
import ecommerce from './assets/images/ecommerce.jpeg';
import librarySystem from './assets/images/library-system.jpg';

const projects = [
  {
    title: 'Investment Manager',
    description: 'Full-stack application to manage stock investments in USA and Brazil. Easy-to-use application to check your position quotes and metrics while enabling to view all of your past transactions',
    image: investmentManager,
    code: 'https://github.com/leonardo-pinto/investment-manager',
    tags: ['TypeScript', 'Vue 3', 'Pinia', 'Vuetify', 'C#', '.NET', 'ASP.NET', 'Entity Framework', 'Docker', 'xUnit'],
  },
  {
    title: 'Reminder AWS Serverless',
    description: 'Serverless full stack reminder application using AWS. Users can register and create a reminder by specifying its content and date. Users are notified by email according to the reminder date.',
    image: awsServerless,
    code: 'https://github.com/leonardo-pinto/reminder-aws-serverless',
    tags: ['TypeScript', 'Vue 3', 'NodeJS', 'AWS', 'AWS CDK', 'Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFront', 'AWS SES', 'Cognito'],
  },
  {
    title: 'E-Commerce Microservices',
    description: 'E-Commerce API using microservices architecture that has the basic business logic for online purchasing. Implemented a resilient architecture pattern using API Gateway, message broker, and AWS.',
    image: ecommerce,
    code: 'https://github.com/leonardo-pinto/ecommerce-microservices',
    tags: ['TypeScript', 'NestJS', 'Mongoose', 'RabbitMQ', 'AWS Cognito', 'AWS SES', 'PassportJS', 'Microservices', 'API Gateway'],
  },
  {
    title: 'Library System API',
    description: 'Back-end library management system which enables functionalities based on users roles',
    image: librarySystem,
    code: 'https://github.com/leonardo-pinto/api-express-sequelize',
    tags: ['TypeScript', 'NodeJS', 'Express', 'Sequelize', 'Docker', 'Jest'],
  },
  {
    title: 'Pokémon TCG App',
    description: 'Application that displays Pokémon TCG cards. The user can filter by card name, type and also sort alphabetically. Moreover, it enables to favorite cards, detailed information and also to check Pokémon facts.',
    image: pokemonTcg,
    code: 'https://github.com/leonardo-pinto/pokemon-tcg-app',
    app: 'https://pokemon-tcg-app.vercel.app/',
    tags: ['React', ' Context API', 'React Hooks', 'Tailwind CSS'],
  },
];

export default projects;
