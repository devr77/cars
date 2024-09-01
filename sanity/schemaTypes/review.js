import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'review',
  title: 'Car Review',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'mobileNo',
      title: 'Mobile No or Email No',
      type: 'string',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'string',
    }),
    defineField({
      name: 'car',
      title: 'Car Name',
      type: 'string',
    }),
    defineField({
      name: 'remark',
      title: 'Personal Remark',
      type: 'string',
    }),
  ],
})
