
export const showModal = (id)=>{
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
}

export const closeModal = (id)=>{
    const modal = document.getElementById(id);
    modal.classList.add('hidden');
}