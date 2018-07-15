import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  separatorControl: AbstractControl;
  stringTerminatorControl: AbstractControl;

  constructor(formBuilder: FormBuilder,
              private settingsService: SettingsService) {
    this.settingsForm = formBuilder.group({
      'separatorControl': ['Comma'],
      'stringTerminatorControl': ['None']
    });
    this.separatorControl = this.settingsForm.controls['separatorControl'];
    this.stringTerminatorControl = this.settingsForm.controls['stringTerminatorControl'];
  }

  ngOnInit() {
  }

  saveSettings() {
    this.settingsService.setSettings({
      separator: this.separatorControl.value,
      stringTerminator: this.stringTerminatorControl.value
    });
  }

}
