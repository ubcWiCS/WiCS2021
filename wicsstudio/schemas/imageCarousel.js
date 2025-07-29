export default {
  name: "imageCarousel",
  title: "Image Carousel",
  type: "document",
  fields: [
    {
      name: "aboutImages",
      title: "About WiCS Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "title",
              type: "string",
              title: "Image Title",
            },
          ],
        },
      ],
    },    
    {
      name: "whyJoinUsImages",
      title: "Why Join Us Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "title",
              type: "string",
              title: "Image Title",
            },
          ],
        },
      ],
    },    
  ],
  preview: {
    prepare() {
      return {
        title: "Landing Page Image Carousel",
      };
    },
  },
};
