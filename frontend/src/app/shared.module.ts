import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';


const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDialogModule,
];


const modules = [
  HttpClientModule,
  FlexLayoutModule,
  ...materialModules
];

@NgModule({
  declarations: [

  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [

  ]
})
export class SharedModule { }
