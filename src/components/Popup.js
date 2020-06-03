import '../styles/popup.css';

function Popup(tekst) {
    const popup = document.createElement('div');
    popup.innerHTML = tekst;
    popup.classList.add('popup');
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.parentNode.removeChild(popup);
    }, 1500);
}

export default Popup;
