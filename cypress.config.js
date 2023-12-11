import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import pkg from '@badeball/cypress-cucumber-preprocessor'
const { addCucumberPreprocessorPlugin } = pkg
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild.js'
import allureWriter from '@shelex/cypress-allure-plugin/writer.js'


async function setupNodeEvents(on, config) {
	await addCucumberPreprocessorPlugin(on, config)
	on(
		'file:preprocessor',
		createBundler({
			plugins: [createEsbuildPlugin(config)],
		})
	)
	allureWriter(on, config);

	return config
}

export default defineConfig({
	viewportWidth: 1280,
	viewportHeight: 720,
	watchForFileChanges: false,
	chromeWebSecurity: false,
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'jsconfig.json',
	},
	retries: 0,
	video: false,
	e2e: {
		specPattern: ['cypress/e2e/challengeLatam/bdd/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		setupNodeEvents,
	},
	env: {
		allure: true,
		allureReuseAfterSpec: true,
		allureResultsPath: 'reports/allure-results',
	},
})
