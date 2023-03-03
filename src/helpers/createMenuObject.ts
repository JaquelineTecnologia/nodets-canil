type MenuOptions = '' | 'all' | 'dog' |'cat' |'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

if(activeMenu !== '') {
    returnObject[activeMenu] = true;
}


return returnObject;
}

//o codigo faz a verificação da pagina ativa
//baseado nas 5 opções descritas no type, reconhece a pagina e retorna como true o active
