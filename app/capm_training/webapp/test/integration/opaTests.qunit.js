sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/capmtraining/test/integration/FirstJourney',
		'riskmanagement/capmtraining/test/integration/pages/RisksList',
		'riskmanagement/capmtraining/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/capmtraining') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);