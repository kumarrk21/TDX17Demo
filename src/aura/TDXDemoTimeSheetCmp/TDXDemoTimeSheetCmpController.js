({	
	handleCompEvents: function(cmp,evt,helper){
		var homeContainer = cmp.find('homeContainer')
		if(evt.getParam('showHome')){
			$A.util.removeClass(homeContainer, 'slds-hide');
		}else{
			$A.util.addClass(homeContainer, 'slds-hide');
		}
		cmp.set('v.showEmpList',evt.getParam("showEmpList"))
		cmp.set('v.showTimeSheet',evt.getParam("showTimeSheet"))

		if(evt.getParam('showTimeSheet')){
			cmp.set('v.empId',evt.getParam('empId'))
		}
		
	}


})