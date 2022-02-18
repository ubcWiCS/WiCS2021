export default {
  name: "twoUp",
  title: "Two Up",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "page",
      title: "Page",
      type: "string",
    },
    {
      name: "pageOrder",
      title: "Page Order",
      type: "number",
    },
    {
      name: "direction",
      title: "Direction",
      type: "string",
      options: {
        list: [
          { value: "textLeft", title: "Text Left" },
          { value: "textRight", title: "Text Right" },
        ],
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: "Order On Page",
      name: "orderOnPage",
      by: [{ field: "pageOrder", direction: "asc" }],
    },
  ],
  prepare(twoUp, viewOptions = {}) {
    const title =
      viewOptions.ordering && viewOptions.ordering.name === "pageOrder"
        ? `${twoUp.title} (${twoUp.pageOrder})`
        : twoUp.title;

    return { title: title };
  },
};
