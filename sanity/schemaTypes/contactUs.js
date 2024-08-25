import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactUs',
  title: 'Contact Us',
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
      name: 'description',
      title: 'Description / Message',
      type: 'string',
    }),
    defineField({
      name: 'remark',
      title: 'Personal Remark',
      type: 'string',
    }),
  ],
})
