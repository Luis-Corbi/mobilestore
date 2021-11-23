const d = document;

export default function searchFilters(input, selector){
    d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
        console.log(e.target.key);
        d.querySelectorAll(selector).forEach(el =>(
        el.textcontent.toLowerCase().includes(e.target.value)
        ))
    }
    });
}