export default {
  name: "profile",
  title: "Profile",
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
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
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
      name: "profileType",
      title: "Profile type",
      type: "string",
      options: {
        list: [
          { value: "executive", title: "Executive Team" },
          { value: "faculty", title: "Faculty Advisor" },
        ],
        hotspot: true,
      },
    },
  ],
};
