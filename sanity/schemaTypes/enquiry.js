import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'enquiry',
  title: 'New Car Enquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'mobileNo',
      title: 'Mobile No',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Id ',
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
