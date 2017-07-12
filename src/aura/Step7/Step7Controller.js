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

    showModal: function(cmp,evt,helper){
        $A.util.removeClass(cmp.find('_modal'),"slds-hide")
    },

    hideModal: function(cmp,evt,helper){
        $A.util.addClass(cmp.find('_modal'),"slds-hide")
    }
})