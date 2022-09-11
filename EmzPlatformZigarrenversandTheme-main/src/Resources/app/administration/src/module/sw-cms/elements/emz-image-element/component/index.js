import template from './sw-cms-el-emzimageelement.html.twig';
import './sw-cms-el-emzimageelement.scss';

const { Component, Mixin, Filter } = Shopware;

Component.register('sw-cms-el-emzimageelement', {
    template,

mixins: [
    Mixin.getByName('cms-element'),
],

computed: {
    mediaUrl() {
        const staticFallBackImage = this.assetFilter(`/administration/static/img/cms/preview_mountain_small.jpg`);
        const elemData = this.element.data.media;
        const elemConfig = this.element.config.media;

        if (elemConfig.source === 'mapped') {
            const demoMedia = this.getDemoValue(elemConfig.value);

            if (demoMedia?.url) {
                return demoMedia.url;
            }

            return staticFallBackImage;
        }

        if (elemConfig.source === 'default') {
            // use only the filename
            const fileName = elemConfig.value.slice(elemConfig.value.lastIndexOf('/') + 1);
            return this.assetFilter(`/EmzPlatformZigarrenversandTheme-main/static/img/cms/preview_emzimagetexteditor_element.png`);
        }

        if (elemData?.id) {
            return this.element.data.media.url;
        }

        if (elemData?.url) {
            return this.assetFilter(elemConfig.url);
        }

        return staticFallBackImage;
    },

    assetFilter() {
        return Filter.getByName('asset');
    },

    mediaConfigValue() {
        return this.element?.config?.sliderItems?.value;
    },
},

watch: {
    cmsPageState: {
        deep: true,
        handler() {
            this.$forceUpdate();
        },
    },

    mediaConfigValue(value) {
        const mediaId = this.element?.data?.media?.id;
        const isSourceStatic = this.element?.config?.media?.source === 'static';

        if (isSourceStatic && mediaId && value !== mediaId) {
            this.element.config.media.value = mediaId;
        }
    },        
},

created() {
    this.createdComponent();
},

methods: {
    createdComponent() {
        this.initElementConfig('emzimageelement');
        this.initElementData('emzimageelement');
    },
},
});

