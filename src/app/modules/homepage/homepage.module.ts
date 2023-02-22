import { AsideComponent } from './../../components/homepage/aside/aside.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from 'src/app/components/homepage/homepage.component';
import { MainComponent } from 'src/app/components/homepage/main/main.component';
import { FooterComponent } from 'src/app/components/homepage/footer/footer.component';

@NgModule({
  declarations: [
    HomepageComponent,
    AsideComponent,
    MainComponent,
    FooterComponent

  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
