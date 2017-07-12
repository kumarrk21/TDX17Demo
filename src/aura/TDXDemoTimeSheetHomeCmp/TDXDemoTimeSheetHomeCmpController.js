({
	
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