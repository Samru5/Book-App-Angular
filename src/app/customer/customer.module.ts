import { NgModule } from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import { CustomerLogin } from './customer-login.component';
import { CustomerRegistration } from './customer-registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

@NgModule({
declarations:[CustomerLogin,CustomerRegistration],
imports:[BrowserModule,
RouterModule.forChild(customerRoutes)],

exports:[CustomerLogin,
    CustomerRegistration,
RouterModule]
})

export class CustomerModule{

}