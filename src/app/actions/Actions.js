var Reflux = require('reflux');

var Actions = Reflux.createActions([

	// SERVICES ACTIONS
  	"refreshServicesList",
	"selectService",
	"changeServiceFilter",
	"submitService",
	"deleteService",
	"startService",
	"stopService",
	"editService",
	
	//SERVICE EDITOR
	"selectStep",
	"submitStep",
	
	// API ACTIONS
	"selectApi",
	"editApi",
	"deleteApi",
	
	// TP ACTIONS
	"selectTp",
	
	// Datasets ACTIONS
	"selectDataset",
	"refreshDatasetsList",
	"changeDataSetFilter",
	
	// AGENT ACTIONS
	"selectAgent",
	"disableAgent",
	"refreshAgentList",

	// EDITOR SERVICE
	"showEditor",
	"closeEditor",

	"notify"
	
]); 

module.exports = Actions;
