import func from '../../util/func.js';
export default{
    addEvent(state,title){
        let item = {};
        state.count++;
        item.id = state.count;
        item.title = title;
        item.type = 1;
        
        state.event.unshift(item);
        console.log(state.event);
        console.log(JSON.stringify(state));
        func.setItems(state);
    },
    eventDone(states,id){
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === id) {
                states.event[i].type = 2;
                var item = states.event[i];
                states.event.splice(i, 1);
                break;
            }
        }
        states.event.unshift(item);
        func.setItems(states);
    },
    eventCancel(states,id){
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === id) {
                states.event[i].type = 3;
                var item = states.event[i];
                states.event.splice(i, 1);
                break;
            }
        }
        states.event.unshift(item);
        func.setItems(states);
    }
}