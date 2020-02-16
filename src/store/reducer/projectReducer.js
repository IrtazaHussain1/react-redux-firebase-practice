const initSatae ={
    projects:[
        {id:1,title:'Test1',content:'Blah Blah Blah Blah'},
        {id:2,title:'Test2',content:'Blah Blah Blah Blah'},
        {id:3,title:'Test3',content:'Blah Blah Blah Blah'},
        {id:4,title:'Test4',content:'Blah Blah Blah Blah'},
        {id:5,title:'Test5',content:'Blah Blah Blah Blah'},

    ]
}

const projectReducer = ( state = initSatae , action ) => {
    switch(action.type){
        case 'CREATE_PROJECT':{
            console.log('Project Created', action.project);
            return state;
        }
        case 'CREATE_PROJECT_ERROR':{
            console.log('Project create error: '. action.err);
            return state;
        }
        default:
            return state;
    }
}
export default projectReducer