import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatDialogModule,
  MatListModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { ApiService } from './core/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './core/user.service';
import { FormsModule } from '@angular/forms';
import { UserPostsComponent } from './user-posts/user-posts.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './core/post.service';
import { PostFormComponent } from './post-form/post-form.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Page404Component } from './page404/page404.component';
import { ComfirmDeleteComponent } from './comfirm-delete/comfirm-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
    UserDetailComponent,
    UserFormComponent,
    UserPostsComponent,
    PostDetailComponent,
    PostFormComponent,
    Page404Component,
    ComfirmDeleteComponent
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatChipsModule,
    MatSnackBarModule
  ],

  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatChipsModule,
    MatSnackBarModule
  ],

  providers: [ApiService, UserService, PostService],
  bootstrap: [AppComponent],
  entryComponents: [ComfirmDeleteComponent]

})
export class AppModule { }
