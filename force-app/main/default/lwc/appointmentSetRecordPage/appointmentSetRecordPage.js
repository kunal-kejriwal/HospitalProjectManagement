import { LightningElement, wire, api, track } from 'lwc';
import getDoctorsList from '@salesforce/apex/DoctorRecordsController.getDoctorsList';

const columns = [   
    { label: 'Name', fieldName: 'Name' },
    { label: 'Availability Status', fieldName: 'Availability_Status__c' },
    { label: 'Specialization', fieldName: 'Specialization__c' },
]

export default class AppointmentSetRecordPage extends LightningElement {
    @track availabilityStatus = 'Available';
    @track doctorData;
    @track selectedDepartment = 'Cardiology';
    columns = columns;

    get options(){
        return [
            { label: 'Available', value: 'Available' },
            { label: 'On Leave', value: 'On Leave' },
            { label: 'In Surgery', value: 'In Surgery' },
        ]
    }

    get departmentOptions(){
        return [
            { label: 'Cardiology', value: 'Cardiology' },
            { label: 'Neurology', value: 'Neurology' },
            { label: 'Orthopedics', value: 'Orthopedics' },
            { label: 'Pediatrics', value: 'Pediatrics' },
            { label: 'General Medicine', value: 'General Medicine' },
            { label: 'Radiology', value: 'Radiology' },
            { label: 'Gynecology', value: 'Gynecology' },
            { label: 'Oncology', value: 'Oncology' },
            { label: 'Dermatology', value: 'Dermatology' },
            { label: 'ENT (Ear, Nose, Throat)', value: 'ENT' },
            { label: 'Psychiatry', value: 'Psychiatry' },
            { label: 'Urology', value: 'Urology' },
            { label: 'Nephrology', value: 'Nephrology' },
            { label: 'Gastroenterology', value: 'Gastroenterology' },
            { label: 'Pulmonology', value: 'Pulmonology' },
            { label: 'Ophthalmology', value: 'Ophthalmology' },
        ]
    }


    handleChange(event){
        this.availabilityStatus = event.target.value;
    }

    handleChangeDepartment(event){
        this.selectedDepartment = event.target.value;
    }

    @wire(getDoctorsList, {availability_status : '$availabilityStatus', department: '$selectedDepartment'})
    doctorsList(result){
        if(result.data){
            this.doctorData = result.data;
            console.log('Data Returned');
            console.log(this.doctorData);
        } else if(result.error){
            console.log('Error -> ' , result.error);
        }
    }
}