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
      {
        name: "eventSponsor",
        title: "Event Sponsor (must match one of the slugs in our sponsors",
        type: "string",
        options: {
          list: [
            { value: "center-for-digital-media", title: "center-for-digital-media" },
            { value: "stripe", title: "stripe" },
            { value: "sap", title: "sap" },
            { value: "teck", title: "teck" },
            { value: "orbis", title: "orbis" },
            { value: "google", title: "google" },
            { value: "none", title: "No Sponsor" },
          ],
          hotspot: true,
        },
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
  