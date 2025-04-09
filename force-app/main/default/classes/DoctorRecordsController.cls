public class DoctorRecordsController {
    
    @AuraEnabled(cacheable=true)
    public static List<Patient__c> getPatientsList(){
        return [Select Id from Patient__c];
    }

}