import { Model } from '@stackbit/types';

export const MarkdownTextBlock: Model = {
    type: 'object',
    name: 'MarkdownTextBlock',
    label: 'Markdown Text Block',
    labelField: 'label',
    fields: [
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            description: 'A label for the markdown block, used internally.',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'text',
            name: 'markdownContent',
            label: 'Markdown Content',
            description: 'The markdown content to display. Supports GitHub Flavored Markdown.',
            required: true,
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'hideLabel',
            label: 'Hide Label',
            description: 'Hide the label from being displayed in the output.',
            required: false,
            default: false,
            hidden: false,
            localized: false
        },
        {
            type: 'enum',
            name: 'alignment',
            label: 'Text Alignment',
            description: 'Sets the alignment of the markdown content.',
            required: false,
            default: 'left',
            hidden: false,
            localized: false,
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' }
            ],
            controlType: 'button-group'
        },
        {
            type: 'boolean',
            name: 'isHighlighted',
            label: 'Highlight Text',
            description: 'Apply highlight styles to the text.',
            required: false,
            default: false,
            hidden: false,
            localized: false
        }
    ],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ]
};
