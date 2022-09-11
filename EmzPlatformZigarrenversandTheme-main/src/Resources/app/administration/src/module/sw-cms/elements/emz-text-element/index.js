import './component';
import './config';
import './preview';

/**
 * @private since v6.5.0
 */
Shopware.Service('cmsService').registerCmsElement({
    name: 'emztextelement',
    label: 'sw-cms.elements.emz-text-element.label',
    component: 'sw-cms-el-emztextelement',
    configComponent: 'sw-cms-el-config-emztextelement',
    previewComponent: 'sw-cms-el-preview-emztextelement',
    defaultConfig: {
        content: {
            source: 'static',
            value: `
                <h2> DAS PERFEKTE GESCHENK </h2>
                <p>Sie suchen das passende Zigarren Geschenk? 
                Dann schauen Sie sich doch einmal in unserer 
                Geschenkabteilung um. Egal ob zu Geburtstag 
                oder Weihnachten - mit Zigarren treffen Sie 
                bei einem Liebhaber immer ins Schwarze.</p>
            `.trim(),
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
    },
});
