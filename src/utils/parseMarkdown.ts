import showdown, { ConverterOptions, Metadata } from 'showdown';

export const parseMarkdown = (
  markdown: string,
  options?: ConverterOptions,
): { metadata?: Metadata | string; html: string } => {
  var converter = new showdown.Converter(options);

  const html = converter.makeHtml(markdown);
  const metadata = converter.getMetadata();

  return { html, metadata };
};
