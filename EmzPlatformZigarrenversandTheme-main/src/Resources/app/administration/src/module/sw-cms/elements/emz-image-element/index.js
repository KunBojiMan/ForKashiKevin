import './component';
import './config';
import './preview';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);

Shopware.Service('cmsService').registerCmsElement({
    name: 'emzimageelement',
    label: 'sw-cms.elements.emz-image-element.label',
    component: 'sw-cms-el-emzimageelement',
    configComponent: 'sw-cms-el-config-emzimageelement',
    previewComponent: 'sw-cms-el-preview-emzimageelement',
    defaultConfig: {
        media: {
            source: 'static',
            value: null,
            entity: {
                name: 'media'
            }
        }
    }
});
