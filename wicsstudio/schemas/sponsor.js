export default {
  name: "sponsor",
  title: "Sponsor",
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
    {
      name: "sponsorLevel",
      title: "Sponsor Level",
      type: "string",
      options: {
        list: [
          { value: "platinum", title: "Platinum" },
          { value: "gold", title: "Gold" },
          { value: "silver", title: "Silver" },
          { value: "past", title: "Past" },
        ],
      },
    },
  ],
};
