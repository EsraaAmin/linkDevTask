import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'list-articles', loadChildren: () => import('./modules/list-articles/list-articles.module').then(m => m.ListArticlesModule) }, 
    { path: 'article-details', loadChildren: () => import('./modules/article-details/article-details.module').then(m => m.ArticleDetailsModule) }
];
const config: ExtraOptions = { useHash: true };

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}