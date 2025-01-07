export default{
    name:'Blog2',
    type: 'document',
    title: 'Blog2',
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