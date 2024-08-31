import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'car',
  title: 'Cars',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'brand',
      title: ' Select Brand Name',
      type: 'array',
      of: [{type: 'reference', to: {type: 'company'}}],
    }),

    defineField({
      name: 'city',
      title: 'Select City Name',
      type: 'array',
      of: [{type: 'reference', to: {type: 'city'}}],
    }),

    defineField({
      name: 'fuel',
      title: 'Select Fuel Type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'fuel'}}],
    }),

    defineField({
      name: 'body',
      title: 'Select Body Type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'body'}}],
    }),

    defineField({
      name: 'transmission',
      title: 'Select Transmission Type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'transmission'}}],
    }),
    defineField({
      name: 'feature',
      title: 'Enter Car Special Features',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'image',
      title: 'Upload Card Images (min 1)',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: 'Add Meaningful Seo ',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Is This New Car ?',
      name: 'type',
      type: 'boolean',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Actual Price Ex.Rs600000',
      type: 'string',
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range Ex. 6Lakh-10Lakh',
      type: 'string',
    }),
    defineField({
      name: 'mileage',
      title: 'Mileage',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Year ',
      type: 'date',
    }),

    defineField({
      name: 'color',
      title: 'Car Color',
      type: 'string',
    }),

    defineField({
      name: 'seating',
      title: 'Enter Seating Capacity (1-9)',
      type: 'string',
    }),

    defineField({
      name: 'size',
      title: 'Size of Vehicle ',
      type: 'string',
    }),

    defineField({
      name: 'engine',
      title: 'Engine Description',
      type: 'string',
    }),

    defineField({
      name: 'ratings',
      title: 'Safety Rating',
      type: 'string',
    }),

    defineField({
      name: 'variants',
      title: 'Select If Other Variants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'car'}}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
