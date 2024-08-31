import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'loan',
  title: 'New Loan Enquiry',
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
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'remark',
      title: 'Personal Remark',
      type: 'string',
    }),
  ],
})
