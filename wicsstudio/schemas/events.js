export default {
    name: "events",
    title: "Previous Events",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "date",
        title: "Date",
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
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: "body",
        title: "Body",
        type: "blockContent",
      },
    ],
    // end of fields

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
  