import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'blog', loadChildren: () => import('./features/blog/blog.module').then( m => m.BlogModule)},
  { path: 'users', loadChildren: () => import('./features/users/users.module').then( m => m.UsersModule)},
  { path: 'cam', loadChildren: () => import('./features/camera/cam.module').then( m => m.CamModule)},
  { path: 'gyro', loadChildren: () => import('./features/gyro/gyro.module').then( m => m.GyroModule)},
  { path: 'notification', loadChildren: () => import('./features/local-notification/notification.module').then( m => m.NotificationModule)},
  { path: 'motion', loadChildren: () => import('./features/motion/motion.module').then( m => m.MotionModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
