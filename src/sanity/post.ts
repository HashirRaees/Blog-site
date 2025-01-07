import {defineField,defineArrayMember,defineType} from "sanity";

export const post = defineType({
    name:"post",
    title:"Post",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string",
            validation:(Rule) => Rule.required()
        }),

    defineField({
        name:"slug",
        title:"Slug",
        type:"slug",
        options:{
            source:"title",
            maxLength:96,
        }
    }),

    defineField({
        name:"summary",
        type:"text",
        title:"Summary",
    }),

    defineField({
        name:"image",
        title:"Image",
        type:"image",
    }),

    defineField({
        name:"content",
        type:"array",
        title:"Content",
        of:[
            defineArrayMember({
                type:"block"
            })
        ]
    }),
    defineField({
        name:"author",
        type:"string",
        title:"Author",
        description:"Who wrote this post?"
    })
]
})