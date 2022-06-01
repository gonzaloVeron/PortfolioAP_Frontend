import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Education } from 'src/app/models/Education';
import { ImageNameDTO } from 'src/app/models/ImageNameDTO';
import { EducationService } from 'src/app/services/education.service';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.scss']
})
export class UpdateEducationComponent implements OnInit {

  updateEducationForm: FormGroup;

  imgPath: string = environment.fireImgPath;

  mediaToken: string = environment.mediaToken;

  imgSelected: string = "no-images.png";

  buttonTitle: string = "Modificar";

  loading: boolean = false;

  imgLoading: boolean = false;

  constructor(private dialogRef: MatDialogRef<UpdateEducationComponent>, private formBuilder: FormBuilder, private educationService: EducationService, private imageService: ImageService) { }

  ngOnInit() {
    this.updateEducationForm = this.formBuilder.group({
      average: ['', Validators.required],
      career: ['', Validators.required],
      end_year: ['', Validators.required],
      image: [''],
      institution: ['', Validators.required],
      start_year: ['', Validators.required],
      title: ['', Validators.required]
    });
    if(localStorage.getItem("edu")){
      let idToFind = parseInt(localStorage.getItem("edu"));
      this.educationService.getEducation(idToFind).subscribe((resp: Education) => {
        this.updateEducationForm.setValue({
          average: resp.average,
          career: resp.career,
          end_year: resp.end_year,
          image: resp.image,
          institution: resp.institution,
          start_year: resp.start_year,
          title: resp.title
        });
        this.imgSelected = resp.image;
      });
    }else{
      this.buttonTitle = "Agregar";
    }
  }
  
  controlField(field){
    return this.updateEducationForm.get(field).touched && this.updateEducationForm.get(field).invalid ? "is-invalid" : (this.updateEducationForm.get(field).touched && this.updateEducationForm.get(field).valid) ? "is-valid" : "";
  }

  updateEducation(){
    this.updateEducationForm.markAllAsTouched();
    let education: Education = new Education(this.updateEducationForm.getRawValue().average, 
      this.updateEducationForm.getRawValue().career, 
      this.updateEducationForm.getRawValue().end_year, 
      localStorage.getItem("edu") ? parseInt(localStorage.getItem("edu")) : -1, 
      this.updateEducationForm.getRawValue().image, 
      this.updateEducationForm.getRawValue().institution, 
      this.updateEducationForm.getRawValue().start_year, 
      this.updateEducationForm.getRawValue().title
    );
    if(localStorage.getItem("edu")){
      this.loading = true;
      this.buttonTitle = "Modificando";
      if(this.updateEducationForm.valid){
        this.educationService.patchEducation(parseInt(localStorage.getItem("edu")), education).subscribe((resp: Education) => {
          this.dialogRef.close(resp);
          this.loading = false;
        });
      }
    }else{
      this.loading = true;
      this.buttonTitle = "Agregando";
      if(this.updateEducationForm.valid){
        this.educationService.createEducation(education).subscribe((resp: Education) => {
          this.dialogRef.close(resp);
          this.loading = false;
        });
      }
    }
  }

  addImage(event){
    this.imgLoading = true;
    let file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('image', file);
    this.imageService.savePhoto(formdata).subscribe(
      (resp: ImageNameDTO) => {    
        this.imgSelected = resp.imgName;
        this.updateEducationForm.setValue({
          image: resp.imgName,
          average: this.updateEducationForm.getRawValue().average,
          career: this.updateEducationForm.getRawValue().career,
          end_year: this.updateEducationForm.getRawValue().end_year,
          start_year: this.updateEducationForm.getRawValue().start_year,
          institution: this.updateEducationForm.getRawValue().institution,
          title: this.updateEducationForm.getRawValue().title
        });
        this.imgLoading = false;
      }
    );
  }

}
