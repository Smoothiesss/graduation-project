import { lazy } from 'react';

const Dashboard = lazy(() => import('../../../feature/activities/dashboard/ActivityDashboard'));
const GioiThieu = lazy(() => import('../../component/page/GioiThieu'));
const ActivityDetail = lazy(() => import('../../../feature/activities/details/ActivityDetail'));
const LoginForm = lazy(()=>import('../../../feature/user/LoginForm'))
const Test = lazy(() => import('../../component/view/Test'));
const _404 = lazy(() => import('../../component/page/404'));


export const frontEndRoutes = [
    { id: '/dashboard', component: Dashboard, exact: true },
    { id: '/test', component: Test, exact: true },
    { id: '/gioi-thieu', component: GioiThieu, exact: true },
    { id: '/activities/:id', component: ActivityDetail},
    { id: '/login', component: LoginForm},
    { id: undefined, component: _404 },

];


export const configSideMenu = [

]
