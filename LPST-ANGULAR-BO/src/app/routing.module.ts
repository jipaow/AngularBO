import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { Page404Component } from './page404/page404.component';

const ROUTES: Routes = [
  {
    path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    component: UserListComponent,
    path: 'users',
  //  children: [
  //    {path: ':id', component: UserDetailComponent }
   // ]
  },

  {
    path: 'user/:id',
    component: UserDetailComponent,
    children: [
      {path: 'edit', component: UserFormComponent},
      {path: 'posts', component: UserPostsComponent},
      {path: 'create', component: PostFormComponent}
    ]
  },
  {
    component: PostListComponent,
    path: 'posts'
  },
  {
    component: PostDetailComponent,
    path: 'post/:id',
    children: [
      {path: 'edit', component: PostFormComponent}
    ]
  },
{
  path: '**',
  component: Page404Component
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports : [RouterModule],
  declarations: []
})
export class RoutingModule { }

