({
    doInit: function(cmp, evt, helper) {
        var action = cmp.get("c.getEmployees");
        action.setCallback(this, function(response) {
            var state = response.getState()
            if (state == "SUCCESS") {
            	var employeeList = response.getReturnValue()
                cmp.set('v.employeeList', employeeList)
                cmp.set('v.showEmployees', true)
            } else {
                //Log Error
            }
        })
        $A.enqueueAction(action);
    },

    showHome: function(cmp,evt,helper){
    	var timeSheetEvents = cmp.getEvent("timeSheetEvents");
    	timeSheetEvents.setParams({
    		"showHome":true
    	})
    	timeSheetEvents.fire();
    },

    showTimeSheet: function(cmp,evt,helper){
        var timeSheetEvents = cmp.getEvent("timeSheetEvents");
        timeSheetEvents.setParams({
            "showTimeSheet":true,
            "empId":evt.getSource().get('v.name')
        })
        timeSheetEvents.fire();
    }
})