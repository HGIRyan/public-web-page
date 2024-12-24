import * as React from 'react';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

export default function MarkdownTextBlock(props) {
    const { label, hideLabel, markdownContent, alignment = 'left', isHighlighted = false } = props;
    const fieldPath = props['data-sb-field-path'];
    const labelId = `${label}-label`;

    return (
        <div
            className={classNames('sb-markdown-block', 'w-full', {
                'text-left': alignment === 'left',
                'text-center': alignment === 'center',
                'text-right': alignment === 'right',
                highlight: isHighlighted
            })}
            data-sb-field-path={fieldPath}
        >
            {label && !hideLabel && (
                <label id={labelId} className={classNames('sb-label', 'inline-block', 'sm:mb-1.5')} {...(fieldPath && { 'data-sb-field-path': '.label' })}>
                    {label}
                </label>
            )}
            <div className={classNames('sb-markdown-content', 'prose', 'max-w-none')} {...(fieldPath && { 'data-sb-field-path': '.markdownContent' })}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
        </div>
    );
}
