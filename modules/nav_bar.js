const listClass = document.getElementById('List');
const addNewClass = document.getElementById('Add_new');
const contactClass = document.getElementById('Contact');
export const toList = () => {
    listClass.classList.remove('none');
    addNewClass.classList.add('none');
    contactClass.classList.add('none');
}
export const toAddNew = () => {
    listClass.classList.add('none');
    addNewClass.classList.remove('none');
    contactClass.classList.add('none');
}
export const toContact = () => {
    listClass.classList.add('none');
    addNewClass.classList.add('none');
    contactClass.classList.remove('none');
}
