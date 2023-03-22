import Item from "./Item.js"

export default function renderList({obj}){
    return obj.list.map((item, index)=>{
        return <Item key={`${item}${index}`} item={item} index={index}/>
    });
}