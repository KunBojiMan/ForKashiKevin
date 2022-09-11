import './component';
import './preview';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);

Shopware.Service('cmsService').registerCmsBlock({
    name: 'emzimagetextblock',
    label: 'sw-cms.blocks.emz-image-text-block.label',
    category: 'text-image',
    component: 'sw-cms-block-emzimagetextblock',
    previewComponent: 'sw-cms-preview-emzimagetextblock',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'left-image': 'emzimageelement',
        'left-text': 'emztextelement',
        'right-image': 'emzimageelement',
        'right-text': 'emztextelement'
    }
});
