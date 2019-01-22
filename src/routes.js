import home from './components/Home.vue';
import skills from './components/Skills.vue';
import about from './components/About.vue';
import projects from './components/Projects.vue';
import contact from './components/Contact.vue';

export default [{
  path: '/',
  component: home
},
{
  path: '/skills',
  component: skills
},
{
  path: '/about-me',
  component: about
},
{
  path: '/projects',
  component: projects
},
{
  path: '/contact',
  component: contact
}];