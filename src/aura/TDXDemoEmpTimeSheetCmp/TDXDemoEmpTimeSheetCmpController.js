({
	fetchEmpTimeSheet : function(cmp, evt, helper) {
		var action = cmp.get("c.getEmpTimeSheet");
		action.setParams({"empId":cmp.get('v.empId')})
        action.setCallback(this, function(response) {
            cmp.set('v.showSpinner', false)
            var state = response.getState()
            if (state == "SUCCESS") {
            	var timeSheetList = response.getReturnValue()
                cmp.set('v.timeSheetList',timeSheetList)
                if(timeSheetList.length){
                    var firstRow = timeSheetList[0].Employee__r;
                    if(firstRow){
                        cmp.set('v.empName',firstRow.Name__c)
                    }
                }
            	//console.log('TimesheetList is', timeSheetList)
                
            } else {
                //Log Error
            }
        })
        $A.enqueueAction(action);
	},

    showEmpList: function(cmp,evt,helper){
        helper.showEmpList(cmp,evt,false)
    },

    setApproveAll: function(cmp,evt,helper){
        if(cmp.get('v.isApproveAll')){
            cmp.set('v.isApproveAll',false)
        }else{
            cmp.set('v.isApproveAll',true)
        }
    },

    approve: function(cmp,evt,helper){
        helper.showEmpList(cmp,evt,true)
    }
})