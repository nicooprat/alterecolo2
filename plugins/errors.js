import Vue from 'vue'
import bugsnag from 'bugsnag-js'
import bugsnagVue from 'bugsnag-vue'

const bugsnagClient = bugsnag(process.env.BUGSNAG_KEY)
bugsnagClient.use(bugsnagVue(Vue))

export default bugsnagClient
