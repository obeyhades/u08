import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { StartBgComponent } from "../../components/start-bg/start-bg.component";
import { EditprofileBgComponent } from "../../components/editprofile-bg/editprofile-bg.component";

@Component({
  selector: 'app-edit-profile',
  imports: [NavbarComponent, StartBgComponent, EditprofileBgComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

}
