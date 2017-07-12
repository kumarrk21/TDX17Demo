({
    goBack: function(cmp, evt, helper) {
        var screenNumber = cmp.get('v.screenNumber')
        var timeSheetEvents = cmp.getEvent("timeSheetEvents");
        switch (screenNumber) {
            case 1:
                var dismissActionPanel = $A.get("e.force:closeQuickAction");
                dismissActionPanel.fire();
                break;
            case 2:
                timeSheetEvents.setParams({
                    "showHome": true
                })
                timeSheetEvents.fire();
                break;
            case 3:
                timeSheetEvents.setParams({
                    "showEmpList": true,
                    "showTimeSheet": false
                })
                timeSheetEvents.fire();
                break;
            default:
                break;
        }
    }
})