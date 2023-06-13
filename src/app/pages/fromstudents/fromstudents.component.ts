import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { student } from 'src/app/model/student'; 


@Component({
  selector: 'app-fromstudents',
  templateUrl: './fromstudents.component.html',
  styleUrls: ['./fromstudents.component.css']
})
export class FromstudentsComponent implements OnInit {
  editMode = false;
  editIndex = -1;
  genders =  [
    { id: '1', name: 'Male' },
    { id: '2', name: 'Female' }
  ];
  
  tableData: student[] = [];  
  selectedgender!: string ;
  studentform!: FormGroup;
  student: student = new student(); 
  deleteRow(index: number) {
    this.tableData.splice(index, 1);
  }
  
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.initializeStudent();
    console.log("Component initialized");
    
  }
  onSubmit() {
    if (this.editMode) {
      // Update existing student data
      this.tableData[this.editIndex] = this.studentform.value;
      this.editMode = false;
      this.editIndex = -1;
    } else {
      // Add new student data
      this.tableData.push(this.studentform.value);
    }
    //this.studentform.reset();
    console.log(this.studentform.value)
  }
  editRow(index: number) {
    const studentData = this.tableData[index];
    this.editIndex = index;
    this.editMode = true;
    this.studentform.patchValue({
      name: studentData.Name,
      selectedgender: studentData.Gender,
      Class: studentData.Class,
      Seat: studentData.Seat,
      Club: studentData.Club,
      Persona: studentData.Persona,
      Crush: studentData.Crush,
      BreastSize: studentData.BreastSize,
      Strength: studentData.Strength,
      Hairstyle: studentData.Hairstyle,
      Color: studentData.Color,
      Eyes: studentData.Eyes,
      EyeType: studentData.EyeType,
      Stockings: studentData.Stockings,
      Accessory: studentData.Accessory,
      ScheduleTime: studentData.ScheduleTime,
      ScheduleDestination: studentData.ScheduleDestination,
      ScheduleAction: studentData.ScheduleAction,
      Info: studentData.Info
    });
  }
  

  initializeStudent() {
    this.studentform = this.formBuilder.group({ 
      ID: '', 
      Name: ['', Validators.required],
      Gender: [this.genders[0].name, Validators.required], 
      Class: ['', Validators.required],
      Seat: ['', Validators.required],
      Club: ['', Validators.required],
      Persona: ['', Validators.required],
      Crush: ['', Validators.required],
      BreastSize: ['', Validators.required],
      Strength: ['', Validators.required],
      Hairstyle: ['', Validators.required],
      Color: ['', Validators.required],
      Eyes: ['', Validators.required],
      EyeType: ['', Validators.required],
      Stockings: ['', Validators.required],
      Accessory: ['', Validators.required],
      ScheduleTime: ['', Validators.required],
      ScheduleDestination: ['', Validators.required],
      ScheduleAction: ['', Validators.required],
      Info: ''
    });
  }

}
