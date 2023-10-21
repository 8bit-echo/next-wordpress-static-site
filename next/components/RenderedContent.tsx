import { ReactElement } from 'react';
import parse from 'html-react-parser';

interface WPRendererProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function RenderedContent({
  children,
  as: Component = 'div',
  className = 'content',
  ...props
}: WPRendererProps): ReactElement {
  return (
    <Component className={className} {...props}>
      {parse(children)}
    </Component>
  );
}
