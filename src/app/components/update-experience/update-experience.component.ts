import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Experience } from 'src/app/models/Experience';
import { ImageNameDTO } from 'src/app/models/ImageNameDTO';
import { ExperienceService } from 'src/app/services/experience.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.scss']
})
export class UpdateExperienceComponent implements OnInit {

  updateExperienceForm: FormGroup;

  imgSelected: string = "../../../assets/images/no-images.png";

  constructor(private dialogRef: MatDialogRef<UpdateExperienceComponent>, private formBuilder: FormBuilder, private experienceService: ExperienceService, private userService: UserService) { }

  ngOnInit() {
    this.updateExperienceForm = this.formBuilder.group({
      city: ['', Validators.required],
      company_name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      end_date: ['', Validators.required],
      start_date: ['', Validators.required],
      title: ['', Validators.required]
    });
    if(localStorage.getItem("exp")){
      let idToFind = parseInt(localStorage.getItem("exp"));
      this.experienceService.getExperience(idToFind).subscribe((resp: Experience) => {
        this.updateExperienceForm.setValue({
          city: resp.city,
          company_name: resp.company_name,
          image: resp.image,
          description: resp.description,
          end_date: resp.end_date,
          start_date: resp.start_date,
          title: resp.title
        });
      });
    }
  }
  
  controlField(field){
    return this.updateExperienceForm.get(field).touched && this.updateExperienceForm.get(field).invalid ? "is-invalid" : (this.updateExperienceForm.get(field).touched && this.updateExperienceForm.get(field).valid) ? "is-valid" : "";
  }

  updateExperience(){
    this.updateExperienceForm.markAllAsTouched();
    let experience: Experience = new Experience(localStorage.getItem("exp") ? parseInt(localStorage.getItem("exp")) : -1, 
      this.updateExperienceForm.getRawValue().city, 
      this.updateExperienceForm.getRawValue().company_name, 
      this.updateExperienceForm.getRawValue().image,
      this.updateExperienceForm.getRawValue().description,
      this.updateExperienceForm.getRawValue().end_date,
      this.updateExperienceForm.getRawValue().start_date,
      this.updateExperienceForm.getRawValue().title
    );
    if(localStorage.getItem("exp")){
      if(this.updateExperienceForm.valid){
        this.experienceService.patchExperience(parseInt(localStorage.getItem("exp")), experience).subscribe((resp: Experience) => {
          this.dialogRef.close(experience);
        }, err => {
          console.error(err);
        })
      }
    }else{
      if(this.updateExperienceForm.valid){
        this.experienceService.createExperience(experience).subscribe((resp: Experience) => {
          this.dialogRef.close(experience);
        }, err => {
          console.error(err);
        })
      }
    }
  }

  addImage(event){
    let file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('image', file);
    this.userService.savePhoto(formdata).subscribe(
      (resp: ImageNameDTO) => {    
        let img = environment.fireImgPath + resp.imgName;
        this.imgSelected = img;
        this.updateExperienceForm.setValue({
          image: resp.imgName,
          city: this.updateExperienceForm.getRawValue().city, 
          company_name: this.updateExperienceForm.getRawValue().company_name, 
          description: this.updateExperienceForm.getRawValue().description,
          end_date: this.updateExperienceForm.getRawValue().end_date,
          start_date: this.updateExperienceForm.getRawValue().start_date,
          title: this.updateExperienceForm.getRawValue().title
        });
      }
    );
  }

}
