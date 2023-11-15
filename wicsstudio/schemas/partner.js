export default {
    name: "partner",
    title: "Partner",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug (unique sponsor key)",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "event_slug",
        title: "Slug (unique sponsor key)",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
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
      {
        name: "pageOrder",
        title: "pageOrder",
        type: "number",
      },
      
    ],
  };
  