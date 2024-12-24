import { Model } from '@stackbit/types';

export const MarkdownSection: Model = {
    type: 'object',
    name: 'MarkdownSection',
    label: 'Markdown Section',
    labelField: 'title.text',
    fields: [
        {
            type: 'model',
            name: 'title',
            label: 'Title',
            required: false,
            hidden: false,
            localized: false,
            models: ['TitleBlock']
        },
        {
            type: 'model',
            name: 'markdownContent',
            label: 'Markdown Content',
            required: true,
            hidden: false,
            localized: false,
            models: ['MarkdownTextBlock']
        },
        {
            type: 'enum',
            name: 'variant',
            label: 'Layout Variant',
            required: false,
            default: 'default',
            hidden: false,
            localized: false,
            options: [
                { label: 'Default', value: 'default' },
                { label: 'With Background', value: 'background' },
                { label: 'Two-Column', value: 'two-column' }
            ],
            group: 'styles',
            controlType: 'dropdown'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the section',
            required: false,
            default: 'bg-light-fg-dark',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Light background, dark foreground',
                    value: 'bg-light-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Dark background, light foreground',
                    value: 'bg-dark-fg-light',
                    textColor: '$light',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                }
            ],
            group: 'styles',
            controlType: 'palette'
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'Unique ID for this section, useful for linking or scrolling.',
            required: false,
            default: '',
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'boolean',
            name: 'fullWidth',
            label: 'Full Width',
            description: 'Expand section to the full width of the screen.',
            required: false,
            default: false,
            hidden: false,
            localized: false
        },
        {
            type: 'style',
            name: 'styles',
            label: 'Styles',
            description: 'Customizable styles for spacing and alignment.',
            required: false,
            hidden: false,
            localized: false,
            styles: {
                self: {
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    alignItems: ['center', 'flex-start', 'flex-end']
                },
                markdownContent: {
                    fontStyle: '*',
                    fontWeight: ['400', '500', '700'],
                    textDecoration: '*',
                    textAlign: '*'
                }
            }
        }
    ],
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
