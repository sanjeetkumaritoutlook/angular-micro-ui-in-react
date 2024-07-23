import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
//import * as pkceUtils from '@lmig/pkce-authentication-utilities';

@Component({
  selector: 'idoc-forms',
  templateUrl: './idoc-forms.component.html',
  styleUrls: ['./idoc-forms.component.css'],
})
export class IdocFormsComponent implements OnInit {
  @Input() formData: { name: string; title: string };

  isLoading: boolean = false;
  isSubmitEnabled: boolean = false;
  isModal: boolean = false;
  isSubmitting: boolean = false;
  templateFormDetails: any = {};
  templateInitialState: any = {};
  spinner = {};

  constructor(private dataService: DataService) {
    this.formData = { name: '', title: '' };
    const nonStatic = 'Something';
    this.templateFormDetails = {
      elements: [
        {
          label: 'Template Name',
          controlName: 'templateName',
          elementType: 'input',
          dataPath: 'templateDetails.templateName',
          initialValue: nonStatic,
          validation: [
            {
              type: 'required',
              value: true,
              message: 'Cannot be blank',
            },
          ],
        },
        {
          label: 'Line of Business',
          controlName: 'lineOfBusiness',
          elementType: 'select',
          dataPath: 'templateDetails.lineOfBusiness',
          initialValue: 'US',
          validation: [
            {
              type: 'required',
              value: true,
              message: 'This is required',
            },
          ],
          options: [
            { label: 'US', value: 'US' },
            { label: 'CAN', value: 'CAN' },
          ],
        },
        {
          label: 'Start Date',
          controlName: 'startDate',
          elementType: 'date',
          dataPath: 'templateDetails.startDate',
          initialValue: '09/08/2021',
          validation: [
            {
              type: 'required',
              value: true,
              message: 'This is required',
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.dataService.get().subscribe((result) => {
      this.isLoading = false;
    });
    console.log(this.formData);
  }

  onFormChanged(formState: any) {
    if (!formState.detail.valid) {
      return;
    }
    console.log(formState.detail);
    this.isSubmitEnabled = true;
  }

  submit() {
    this.isModal = true;
  }

  toggleModal() {
    this.isModal = !this.isModal;
  }

  confirmModal() {
    this.toggleModal();
    this.isSubmitEnabled = false;
    this.isSubmitting = true;
    this.dataService.submit();
  }

  authenticate() {
    // const isSuccess = pkceUtils.authenticateUser({
    //   clientId: '0f3f7e48-aa38-43dd-8a86-1c998ce9e596',
    //   idp: pkceUtils.IDP.AZURE,
    //   redirectUrl: 'http://localhost:4200',
    // });
    console.log('isSuccess');
  }

  getToken() {
    // const token = pkceUtils.getToken();
    console.log('token');
  }
}
