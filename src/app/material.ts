import { NgModule } from "@angular/core";
//Layout
import { MatGridListModule } from "@angular/material/grid-list";

import { MatButtonModule, MatCheckboxModule } from "@angular/material";

@NgModule({
  imports: [MatGridListModule, MatButtonModule, MatCheckboxModule],
  exports: [MatGridListModule, MatButtonModule, MatCheckboxModule]
})
export class MaterialModule {}
