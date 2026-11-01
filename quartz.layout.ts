import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const sidebarLinks = {
  Photography: "https://jan.schulz-nigmann.de",
  GitHub: "https://github.com/TieHaxJan",
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: sidebarLinks,
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "Inhalt",
      useSavedState: false,
      // Die Funktion wird als String in die Seite geschrieben und im Browser ausgeführt,
      // darf also keine Variablen von außerhalb verwenden.
      sortFn: (a, b) => {
        // keine inneren Funktionen: der Bundler würde Hilfsfunktionen einfügen, die im Browser fehlen
        const order = ["FS3", "FS4", "FS5", "Elective", "Blog"]
        const ia = order.indexOf(a.displayName)
        const ib = order.indexOf(b.displayName)

        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      },
    }),
    Component.DesktopOnly(Component.ExternalLinks({ links: sidebarLinks })),
  ],
  right: [
    Component.Graph({
      localGraph: {
        scale: 2.0,
        depth: 3,
        fontSize: 1.5,
        repelForce: 0.2,
      },
      globalGraph: {
        scale: 3.0,
        fontSize: 1,
        repelForce: 2,
      }
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "Inhalt",
      useSavedState: false,
      // Die Funktion wird als String in die Seite geschrieben und im Browser ausgeführt,
      // darf also keine Variablen von außerhalb verwenden.
      sortFn: (a, b) => {
        // keine inneren Funktionen: der Bundler würde Hilfsfunktionen einfügen, die im Browser fehlen
        const order = ["FS3", "FS4", "FS5", "Elective", "Blog"]
        const ia = order.indexOf(a.displayName)
        const ib = order.indexOf(b.displayName)

        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      },
    }),
    Component.DesktopOnly(Component.ExternalLinks({ links: sidebarLinks })),
  ],
  right: [],
}
