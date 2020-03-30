import './styles.css';
import template from './template.hbs';
import jsonArr from './menu.json'

const menuUl = document.querySelector( `.menu` );

const addTemplate = jsonArr.reduce( ( acc, el ) => `${acc}` + `${template( el )}`, `` );

menuUl.insertAdjacentHTML( `beforeend`, addTemplate );

const checkBox = document.querySelector( `.switch__input` );
const body = document.querySelector( `body` );

const bodyTheme = {
    light: `light-theme`,
    dark: `dark-theme`
}

const currentTheme = localStorage.getItem( 'bodyTheme' );

if( currentTheme ) {
    body.classList.add( currentTheme );
}
if( currentTheme === bodyTheme.dark ) {
    checkBox.checked = true;
}

checkBox.addEventListener( `change`, () => {
    if( checkBox.checked === false ) {
        body.classList.remove( localStorage.getItem( `bodyTheme` ) );
        localStorage.setItem( `bodyTheme`, bodyTheme.light );
        body.classList.add( localStorage.getItem( `bodyTheme` ) );
    } else if( checkBox.checked === true ) {
        body.classList.remove( localStorage.getItem( `bodyTheme` ) );
        localStorage.setItem( `bodyTheme`, bodyTheme.dark );
        body.classList.add( localStorage.getItem( `bodyTheme` ) );
    }
} );