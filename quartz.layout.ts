import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Photography: "https://jan.schulz-nigmann.de",
      GitHub: "https://github.com/TieHaxJan",
    },
  }),
}

const order = new Map([
  ["FS3", 1],
  ["FS4", 2],
  ["FS5", 3],
  ["Elective", 4],
  ["Blog", 5]
]);

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
      sortFn: (a, b) => {
        const orderA = order.get(a.displayName) ?? 99
        const orderB = order.get(b.displayName) ?? 99

        return orderA - orderB
      },
    }),
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
      sortFn: (a, b) => {
        const orderA = order.get(a.displayName) ?? 99
        const orderB = order.get(b.displayName) ?? 99

        return orderA - orderB
      },
    }),
  ],
  right: [],
}
