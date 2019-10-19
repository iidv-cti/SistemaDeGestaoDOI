import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "trabalhos" },
  {
    path: "trabalhos",
    loadChildren: () =>
      import("./trabalho/trabalho.module").then(m => m.TrabalhoModule)
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
