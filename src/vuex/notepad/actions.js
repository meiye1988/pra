export default{
    addEvent({commit },title){
        commit("addEvent",title);
    },
    eventDone({commit},id){
        commit("eventDone",id);
    },
    eventCancel({commit},id){
        commit("eventCancel",id);
    }
}