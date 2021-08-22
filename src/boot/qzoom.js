import QZoom from '@quasar/quasar-app-extension-qzoom/src/component/QZoom'

export default {
    install: (app, options) => {
        /* declare global component */      
        app.component('QZoom', QZoom)
    }
}
