import { LightningElement, wire, track } from 'lwc';
import getPatientsList from '@salesforce/apex/PatientRecordController.getPatientsList';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Age', fieldName: 'Age__c' },
    { label: 'Admission Type', fieldName: 'Admission_Type__c' },
    { label: 'Contact Number', fieldName: 'Contact_Number__c', type: 'phone' },
    { label: 'Email', fieldName: 'Email__c', type: 'email' },
    { label: 'Address', fieldName: 'Address__c' },
    { label: 'Appointment Type', fieldName: 'Appointment_Type__c' },
    { label: 'Blood Group', fieldName: 'Blood_Group__c' },
    { label: 'Priority', fieldName: 'Priority__c' },
    { label: 'Insurance Status', fieldName: 'Insurance_Status__c' },
    { label: 'Assigned Department', fieldName: 'Assigned_Department__c' },
    { label: 'Room Number', fieldName: 'Room_Number__c' },
];
export default class ShowPatientRecords extends LightningElement {
    error;
    @track data;
    columns = columns;
    @wire(getPatientsList)
    patientsList(result){
        if(result.data){
            this.data = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    }
}