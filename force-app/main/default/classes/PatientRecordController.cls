public class PatientRecordController {

    @AuraEnabled(cacheable=true)
    public static List<Patient__c> getPatientsList(){
        List<Patient__c> patientList= [Select Id, Name, Age__c, Admission_Type__c, Email__c, Contact_Number__c, Address__c, 
                Appointment_Type__c, Blood_Group__c, Priority__c, Insurance_Status__c, Assigned_Department__c, Room_Number__c
               	from Patient__c LIMIT 10];
                return patientList;
    }
    
}