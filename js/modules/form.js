export default function initForm() {
    
const form = document.getElementById('form');
const img = document.querySelector('.img');

form.addEventListener('change', handleChange)


const handleStyle = {
    element: img,
    
    width(value) {
        this.element.style.width = value + 'px';

    },
    
    height(value) {
        this.element.style.height = value + 'px';

    }
}





function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    handleStyle[name](value);
    
    

    }
}