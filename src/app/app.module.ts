import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserFormBoxComponent } from './user-form-box/user-form-box.component';
import { UserDataBoxComponent } from './user-data-box/user-data-box.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { UsersFilterPipe } from './users-filter.pipe';

const appRoutes : Routes = [
  { path : "users" , component : UserslistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UserslistComponent,
    UserFormBoxComponent,
    UserDataBoxComponent,
    InputGroupComponent,
    UsersFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
