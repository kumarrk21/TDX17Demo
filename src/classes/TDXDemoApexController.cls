public with sharing class TDXDemoApexController {
	public TDXDemoApexController() {
		
	}

	@AuraEnabled
	public static List<Employee__c> getEmployees(){
	   return [SELECT Id, First_Name__c, Last_Name__c,Name__c, Email_ID__c, Department__c from Employee__c];
	}

	@AuraEnabled
	public static List<Time_Sheet__c > getEmpTimeSheet(String empId){
		return [SELECT Id, Week__c, Work_Date__c, WBS__c, Hours__c, Comments__c, Employee__c, Employee__r.Name__c FROM Time_Sheet__c WHERE Employee__c = :empId ];
	}
	


}