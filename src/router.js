import AppHome from '@/components/AppHome';
const SecondPage = () => import('@/components/SecondPage');


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/page-2',
        name: 'Second page',
        component: SecondPage
    }
];

export default routes;
