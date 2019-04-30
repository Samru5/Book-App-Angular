import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookListComponent } from './book-list.component';
import { BookDetails } from './book-details.component';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import{HttpClientModule}from "@angular/common/http"
import { BookService } from './book.service';


@NgModule({

 declarations:[BookListComponent,BookDetails] ,

 providers:[BookService],
 
 imports:[BrowserModule,
RouterModule.forChild(bookRoutes),
HttpClientModule
] ,

 exports:[BookListComponent,
    BookDetails,
    RouterModule
]
})
export class BookModule{

}