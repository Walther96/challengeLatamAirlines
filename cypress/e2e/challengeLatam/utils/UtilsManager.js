class UtilsManager{

    waitTo(time){
        cy.wait(time*1000);
    }

    removeLogs(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    hideFetchLog(){
        const origLog = Cypress.log
        Cypress.log = function (opts, ...other) {
	    if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	    }
	    return origLog(opts, ...other)
            }
        }

}

export default new UtilsManager();