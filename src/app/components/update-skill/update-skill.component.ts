import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.scss']
})
export class UpdateSkillComponent implements OnInit {

  updateSkillForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateSkillComponent>, private formBuilder: FormBuilder, private skillService: SkillService) { }

  ngOnInit() {
    this.updateSkillForm = this.formBuilder.group({
      name: ['', Validators.required],
      level: ['', Validators.required]
    });
    if(localStorage.getItem("skill")){
      let idToFind = parseInt(localStorage.getItem("skill"));
      this.skillService.getSkill(idToFind).subscribe((resp: Skill) => {
        this.updateSkillForm.setValue({
          name: resp.name,
          level: resp.level
        });
      });
    }
  }
  
  controlField(field){
    return this.updateSkillForm.get(field).touched && this.updateSkillForm.get(field).invalid ? "is-invalid" : (this.updateSkillForm.get(field).touched && this.updateSkillForm.get(field).valid) ? "is-valid" : "";
  }

  updateSkill(){
    let skill_id = localStorage.getItem("skill") ? parseInt(localStorage.getItem("skill")) : -1;
    this.updateSkillForm.markAllAsTouched();
    let skill: Skill = new Skill(skill_id, 
      this.updateSkillForm.getRawValue().level, 
      this.updateSkillForm.getRawValue().name, 
    );
    if(localStorage.getItem("skill")){
      if(this.updateSkillForm.valid){
        this.skillService.patchSkill(skill_id, skill).subscribe((resp: Skill) => {
          this.dialogRef.close(resp);
        }, err => {
          console.error(err);
        })
      }
    }else{
      if(this.updateSkillForm.valid){
        this.skillService.createSkill(skill).subscribe((resp: Skill) => {
          this.dialogRef.close(resp);
        }, err => {
          console.error(err);
        })
      }
    }
  }

}
