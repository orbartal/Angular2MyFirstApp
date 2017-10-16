System.config({
	packages: {
	  app: {
		format: 'register',
		defaultExtension: 'js'
	  }
	}
});

System.import('main.js').catch(function(err){ console.error(err); });