import Item from "./Item.js"

export default function renderList({obj}){
    return obj.list.map((item, index)=>{
        return <Item key={`${item.title}${index}`} item={item} index={index}/>
    });
}