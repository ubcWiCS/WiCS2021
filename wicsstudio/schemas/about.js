export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
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
  };
  