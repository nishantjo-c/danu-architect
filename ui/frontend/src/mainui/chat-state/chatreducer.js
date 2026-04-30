export default function chatreducer(tasks,action){
    switch (action.type) {
        
        case 'add': {
            return [...tasks,action.text];
        }

        case 'add_from_ai': {
            return [...tasks.slice(0,-1), action.text];
        }

    }
}