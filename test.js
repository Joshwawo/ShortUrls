console.log('hola node')
const datos = () => {

    const dates = {
        id: 1,
        name: 'jojo',
        tipo: {
            premiun:true
            
        }

    }

    console.log(dates.tipo.premiun[0])
    console.log(`Mi id es: ${dates.id}, mi nombre es ${dates.name} y soy ${dates.tipo.premiun}`)

}

datos();