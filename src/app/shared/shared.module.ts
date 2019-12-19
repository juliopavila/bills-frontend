import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./views/home/home.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent
      }
    ])
  ],
  exports: [HeaderComponent]
})
export class SharedModule {}
