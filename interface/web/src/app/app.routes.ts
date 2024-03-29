import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { FiltersComponent } from './components/pages/filters/filters.component';
import { VideosComponent } from './components/pages/videos/videos.component';
import { VideoComponent } from './components/pages/video/video.component';
import { FilterComponent } from './components/pages/filter/filter.component';
import { FiltersChainManagerComponent } from './components/pages/filters-chain-manager/filters-chain-manager.component';
import { FilterChainComponent } from './components/pages/filter-chain/filter-chain.component';
//import { Name4Component } from './';
//import { PageNotFoundComponent } from './';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'filters', component: FiltersComponent },
    { path: 'filter/:filterID', component: FilterComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'video/:videoID', component: VideoComponent },
    { path: 'filterChainsManager', component: FiltersChainManagerComponent },
    { path: 'filterChain/:chainID', component: FilterChainComponent },
    { path: '**', pathMatch:"full", redirectTo: 'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES)
