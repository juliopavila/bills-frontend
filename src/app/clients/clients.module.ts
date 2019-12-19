import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientsComponent } from "./views/clients/clients.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    ClientsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: "",
        component: ClientsComponent
      }
    ]),
  ]
})
export class ClientsModule {}
