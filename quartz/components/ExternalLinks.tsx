import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const ExternalLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = Object.entries(opts?.links ?? {})
    if (links.length === 0) {
      return null
    }

    return (
      <ul class={classNames(displayClass, "external-links")}>
        {links.map(([text, link]) => (
          <li>
            <a href={link} target="_blank" rel="noopener" class="external">
              {text}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  ExternalLinks.css = `
.external-links {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 0 0 auto;
}

.external-links li {
  margin: 0;
  padding: 0.2rem 0;
}

.external-links a {
  color: var(--secondary);
  font-family: var(--headerFont);
  font-size: 0.95rem;
}

.external-links a:hover {
  color: var(--tertiary);
}
`

  return ExternalLinks
}) satisfies QuartzComponentConstructor
