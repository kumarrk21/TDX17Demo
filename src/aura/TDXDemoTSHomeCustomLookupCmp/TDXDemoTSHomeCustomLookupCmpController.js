({
	
	doInit:function(cmp,evt,helper){
		var lookupObjectAPI = new Array();
		var obj = {}
		obj.name = 'Employee__c';
        obj.fieldList = 'Id, Name__c, First_Name__c, Last_Name__c, Department__c, Email_ID__c';
        obj.searchScope = 'ALL FIELDS';
        obj.svgPath = '/resource/OrgResources/lib/slds202/assets/icons/standard-sprite/svg/symbols.svg#user';
        obj.svgClass = 'slds-icon slds-icon-standard-account slds-icon--medium';
        lookupObjectAPI.push(obj);
        cmp.set('v.empLookup',lookupObjectAPI);

	},

	handleLookupEvents: function(cmp,evt,helper){
		 var selectedObject = evt.getParam('selectedObject');
		 var source = evt.getParam('source');
		 var evtObj = cmp.get('v.evtObj');
		 switch(source){
		 	case 'EmpLookup':
		 		cmp.set('v.selectedEmpName',selectedObject.main)
		 		cmp.set('v.selectedEmpId',selectedObject.id)
		 		break;
		 	default:
		 		break;
		 }
		 console.log('Selected Object', selectedObject)
		 console.log('source is', source)
		 console.log('event object', evtObj)
		 $A.util.removeClass(cmp.find('mainContainer'),'slds-hide')
		 cmp.set('v.lookupEmp',false);
	},

	showEmpLookup:function(cmp,evt,helper){
		$A.util.addClass(cmp.find('mainContainer'),'slds-hide')
		cmp.set('v.lookupEmp',true);
	},

	getEmployeeList : function(cmp, evt, helper) {
		var timeSheetEvents = cmp.getEvent("timeSheetEvents");
    	timeSheetEvents.setParams({
    		"showHome":false,
    		"showEmpList":true
    	})
    	timeSheetEvents.fire()
	},

	doCancel: function(cmp,evt,helper){
		var dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();

	}
})