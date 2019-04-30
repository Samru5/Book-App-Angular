import { CustomerRegistration } from './customer-registration.component';
import { CustomerLogin } from './customer-login.component';
import { Routes } from '@angular/router';


export const customerRoutes:Routes=[

    {path:"signup",component:CustomerRegistration},
    {path:"login",component:CustomerLogin}
];