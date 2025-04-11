public class DoctorRecordsController {
    
    @AuraEnabled(cacheable=true)
    public static List<Doctor__c> getDoctorsList(String availability_status, String department){
        return [
            SELECT Id, Name, Specialization__c, Availability_Status__c 
            FROM Doctor__c 
            WHERE Availability_Status__c = :availability_status 
            AND Specialization__c = :department 
            LIMIT 10
        ];
    }
}