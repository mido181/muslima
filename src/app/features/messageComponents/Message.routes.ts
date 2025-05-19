import {  Routes } from "@angular/router"
import { MessageComponent } from "./message.component"


export const MESSAGE_ROUTE:Routes = [
    { path: '' , component:MessageComponent
,
children:[

    
    
    { path: '' , loadComponent()
        {return import('./all-msgs/all-msgs.component').then(c=>c.AllMsgsComponent)} 
    },
    
    { path: 'notRead' , loadComponent() {
        return import('./not-read-mesgs/not-read-mesgs.component').then(c=>c.NotReadMesgsComponent)
    } 
},
{ path: 'favorite' ,loadComponent() {
    return import('./favorite-msgs/favorite-msgs.component').then(c=> c.FavoriteMsgsComponent)
},}
]

    },
    
]