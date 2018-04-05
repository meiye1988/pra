export default{
    addEvent({commit },title){
        commit("addEvent",title);
    },
    eventDone({commit},id){
        commit("eventDone",id);
    },
    eventCancel({commit},id){
        commit("eventCancel",id);
    },
    eventDel({commit},info){
        commit("eventDel",info);
    },
    eventClear({commit}){
        commit("eventClear");
    },
    eventEdit({commit},info){
        commit("eventEdit",info);
    }
}