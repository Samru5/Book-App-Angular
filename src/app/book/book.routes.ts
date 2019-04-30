import{Routes} from "@angular/router";
import { BookListComponent } from './book-list.component';
import { BookDetails } from './book-details.component';


export const bookRoutes:Routes=[
    {path:"books/:category",component:BookListComponent},
    {path:"book/:bookId",component:BookDetails}
    

];