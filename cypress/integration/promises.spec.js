const { resolve } = require("cypress/types/bluebird");

it('sem teste, ainda', () => {})
const getSomething = () => {
       return new Promise((resolve,reject)=>{ 
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}

const system = () => {
    console.log('init');
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')
}
system();
© 2021 GitHub, Inc.