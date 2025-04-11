import { LightningElement, wire, api } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/schema/Patient__c.Id';
import APPOINTMENT_OBJECT from '@salesforce/schema/Appointment__c';
import PATIENT_OBJECT from '@salesforce/schema/Patient__c';
import PATIENT_NAME from '@salesforce/schema/Patient__c.Name';
import PATIENT_AGE from '@salesforce/schema/Patient__c.Age__c';
const PATIENT_FIELDS = [Id, PATIENT_AGE, PATIENT_NAME];
export default class AppointmentRecordPage extends LightningElement {

    @api recordId;

    userId = Id;

   patientRecords = [];
    @wire(getRecord, {recordId : 'a00As00000LdlFwIAJ', fields : PATIENT_FIELDS})
    appointmentObjectInfor({data, error}){
        if(data){
            this.patientRecords = data.fields;
            console.log(data);
            console.log(PATIENT_FIELDS);
            console.log(this.patientRecords);
        }
        else if(error){
            console.log(error);
        }
    }
}