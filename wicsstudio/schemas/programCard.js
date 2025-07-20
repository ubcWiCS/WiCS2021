export default {
  name: "programCard",
  title: "Program Card",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "pageOrder",
      title: "Page Order",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonIcon",
      title: "Button Icon",
      type: "image",
      options: { hotspot: true },
      description: "Optional icon to display inside the button",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "url",
    },
  ],
};
