import * as React from 'react';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import BackgroundImage from '../../atoms/BackgroundImage';

export default function MarkdownTextSection(props) {
    const {
        elementId,
        className,
        colors = 'bg-light-fg-dark',
        backgroundImage,
        styles = {},
        label,
        hideLabel = false,
        markdownContent,
        alignment = 'left',
        isHighlighted = false
    } = props;

    return (
        <div
            id={elementId}
            className={classNames(
                'sb-component',
                'sb-component-markdown-text-section',
                className,
                colors,
                'relative',
                styles?.margin ? mapStyles({ margin: styles?.margin }) : undefined,
                styles?.padding ? mapStyles({ padding: styles?.padding }) : 'px-4 py-28'
            )}
            {...getDataAttrs(props)}
        >
            {backgroundImage && <BackgroundImage {...backgroundImage} className="absolute inset-0" />}
            <div
                className={classNames('w-full max-w-7xl mx-auto relative', {
                    'text-left': alignment === 'left',
                    'text-center': alignment === 'center',
                    'text-right': alignment === 'right',
                    highlight: isHighlighted
                })}
            >
                {label && !hideLabel && <h2 className="sb-label mb-4">{label}</h2>}
                <div className="sb-markdown-content prose">
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
