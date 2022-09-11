import template from './sw-cms-el-config-emzimageelement.html.twig';
import './sw-cms-el-config-emzimageelement.scss';

const { Component } = Shopware;

Component.register('sw-cms-el-config-emzimageelement', {
    template,

    mixins: [
        'cms-element'
    ],

    inject: [
        'repositoryFactory',
        'cmsService'
    ],

    data() {
        return {
            mediaModalIsOpen:false
        };
    },
    computed: {
        uploadTag() {
            return `cms-element-media-config-${this.element.id}`;
        },

        mediaRepository() {
            return this.repositoryFactory.create('media');
        },

        cmsPageState() {
            return Shopware.State.get('cmsPageState');
        },

        previewSource() {
            if (this.element.data && this.element.data.media && this.element.data.media.id) {
                return this.element.data.media;
            }

            return this.element.config.media.value;
        }
    },

    created() {
        this.createdComponent();
    },


    methods: {
        createdComponent() {
            this.initElementConfig('emzimageelement');
        },

        async onImageUpload({ targetId }) {
            const mediaEntity = await this.mediaRepository.get(targetId, Shopware.Context.api);

            this.element.config.media.value = mediaEntity.id;

            this.updateElementData(mediaEntity);

            this.$emit('element-update', this.element);
        },

        onImageRemove() {
            this.element.config.media.value = null;

            this.updateElementData();

            this.$emit('element-update', this.element);
        },

        onSelectionChanges(mediaEntity) {
            const media = mediaEntity[0];
            this.element.config.media.value = media.id;

            this.updateElementData(media);

            this.$emit('element-update', this.element);
        },

        updateElementData(media = null) {
            this.$set(this.element.data, 'mediaId', media === null ? null : media.id);
            this.$set(this.element.data, 'media', media);
        },

        onCloseModal() {
            this.mediaModalIsOpen = false;
        },

        onOpenMediaModal() {
            this.mediaModalIsOpen = true;
        },
    }
});
