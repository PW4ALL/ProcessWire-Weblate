# ProcessWire PiwikAnalytics 1.0.1

Download [PiwikAnalytics](http://modules.processwire.com/modules/process-piwik-analytics/) from modules directory.

##Features

* Visits by Date (Chart)
* General Statistics about Visits (Total visits, Visit duration, New visitors, Returning visitors etc.)
* Demographics: Countries, Cities, Languages
* System: Browsers, Operating Systems, Screen Resolutions
* Mobile: Visits compared by device
* Pageviews by Date (Chart)
* Top Content
* Traffic Sources: Keywords, Referral Traffic by Domain and URI


##Note:

This module is based on the Google Analytics Module by Wanze.
So Kudos to his great work!


##Requirements

* Piwik Installation up and running
* Piwik Site ID, you can find this id in Piwik -> Settings -> Websites
* Piwik Token, you can find your Token in your Piwik Admin dash under API
* Processwire up and running
* cURL


##Install instructions

1) Setup your Piwik installation and embed the tracking snippet into your website

2) Install the module in ProcessWire
* Place module's files in /site/modules/PiwikAnalytics and install the module
* Enter the URL to your Piwik installation e.g. http://localhost/piwik/
* Enter your Piwik Token
* Enter the Piwik Site ID, if you got various tracked sites set this to 1, you can change the IDs via a list in the Module Page.
* Check Multisite Analytics if you have more than one Site ID and want to switch the IDs
* Choose your language (more will added in next update)

Done: You should see the statistics - check out the module config options to customize your needs


### update 1.0.1
* fixed issue with empty Arrays
* added Multisite Tracking option

