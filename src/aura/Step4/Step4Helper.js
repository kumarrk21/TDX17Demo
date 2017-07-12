({
    showEmpList: function(cmp, evt, isApprove) {
        var timeSheetEvents = cmp.getEvent("timeSheetEvents");
        timeSheetEvents.setParams({
            "showEmpList": true,
            "showTimeSheet": false
        })
        timeSheetEvents.fire();

        if (isApprove) {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Success!",
                "message": "Selected Timesheets Approved"
            });
            toastEvent.fire();
        }
    }

})