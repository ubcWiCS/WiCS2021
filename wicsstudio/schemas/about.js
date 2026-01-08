export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "pageOrder",
      title: "Page Order",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
