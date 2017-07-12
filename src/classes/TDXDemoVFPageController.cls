public with sharing class TDXDemoVFPageController {
	
	public List<Employee__c> employeeList {get;set;}
	public String empTSName {get;set;}
	public String empTSId {get;set;}
	public Employee__c employee {get;set;}
	public Time_Sheet__c tsheet {get;set;}
	public boolean showTimeSheetsForAll {get;set;}
	public boolean showInit {get;set;}
	public boolean showTimeSheet{get;set;}
	public List<Time_Sheet__c> tslist {get;set;}

	public TDXDemoVFPageController() {
		employee = new Employee__c();
		tsheet = new Time_Sheet__c();
		showTimeSheetsForAll = false;
		showInit = true;
		showTimeSheet = false;
		String action = ApexPages.currentPage().getParameters().get('action');
		String empId = ApexPages.currentPage().getParameters().get('empId');
		if(action=='viewTS'){
			showTimeSheet(empId);
		}
	}
	

	public void showTimeSheets(){
		employeeList = [SELECT Id, First_Name__c, Last_Name__c,Name__c, Email_ID__c, Department__c from Employee__c];
		showTimeSheetsForAll = true;
	}

	public void cancel(){
		
	}

	public void approveTS(){

	}

	public void showTimeSheet(String empId){
		empTSId = empId;
		empTSName = [SELECT Name__c from Employee__c WHERE Id=:empId LIMIT 1].Name__c;
		tslist = [SELECT Id, Week__c, Work_Date__c, WBS__c, Hours__c, Comments__c, Employee__c, Employee__r.Name FROM Time_Sheet__c WHERE Employee__c = :empId ];
		showTimeSheet = true;
		showInit = false;
	}
}