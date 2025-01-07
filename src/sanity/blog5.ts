export default{
    name:'Blog5',
    type: 'document',
    title: 'Blog5',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title',
        },
        {
            name:'image',
            type:'image',
            title:'Main image'
        },
        {
            name:'body',
            type:'text',
            title:'Body',
        },
        {
            name:'date',
            type:'date',
            title:'Date',
        },
        {
            name:'author',
            type:'string',
            title:'Author',
        }
    ]
}