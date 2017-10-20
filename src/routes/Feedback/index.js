import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'feedback',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const feedback = require('./containers/feedbackContainer').default
      const reducer = require('./modules/feedback').default

      /*  Add the reducer to the store on key 'feedback'  */
      injectReducer(store, { key: 'feedback', reducer })

      /*  Return getComponent   */
      cb(null, feedback)

    /* Webpack named bundle   */
    }, 'feedback')
  }
})
