// Variable que representa la ejecución del proceso de calcular E
let action_calculate = document.getElementById('btn-calcular')

action_calculate.addEventListener('click', () => {
    // Variables que representan las coordenadas principales
    let coordenate1 = document.getElementById('coordenate-1').value
    let coordenate2 = document.getElementById('coordenate-2').value
    let coordenate3 = document.getElementById('coordenate-3').value

    if(isNaN(coordenate1) || isNaN(coordenate2) || isNaN(coordenate3)){
        document.getElementById('coordenate-1').value = ""
        document.getElementById('coordenate-2').value = ""
        document.getElementById('coordenate-3').value = ""

        alert('Debes ingresar números')
    } else {
        associateValuesCharge()
    }

})

let associateValuesCharge = () => {
    // Cargas
    let q1 = document.getElementById('input-charge-one').value
    let q2 = document.getElementById('input-charge-two').value
    let q3 = document.getElementById('input-charge-three').value
    let q4 = document.getElementById('input-charge-four').value
    let q5 = document.getElementById('input-charge-five').value

    if(isNaN(q1) || isNaN(q2) || isNaN(q3) || isNaN(q4) || isNaN(q5)){
        document.getElementById('input-charge-one').value = ''
        document.getElementById('input-charge-two').value = ''
        document.getElementById('input-charge-three').value = ''
        document.getElementById('input-charge-four').value = ''
        document.getElementById('input-charge-five').value = ''

        alert('Las cargas deben tener un valor numérico')
    } else{
        // Asociar cargas con el tipo (mili, micro, nano)
        let valueQ1 = q1 * typeCharge(document.getElementById('select-charge-one').value)
        let valueQ2 = q2 * typeCharge(document.getElementById('select-charge-two').value)
        let valueQ3 = q3 * typeCharge(document.getElementById('select-charge-three').value)
        let valueQ4 =  q4 * typeCharge(document.getElementById('select-charge-four').value)
        let valueQ5 =  q5 * typeCharge(document.getElementById('select-charge-five').value)

        associateValueCoordenate(valueQ1, valueQ2, valueQ3, valueQ4, valueQ5)
    }
}

let typeCharge =  (value) => {
    let typeCharge = 0

    if(value == 'mC'){
        typeCharge = 1 * Math.pow(10,-3)
    } else if( value == 'µC') {
        typeCharge = 1 * Math.pow(10,-6)
    } else {
        typeCharge = 1 * Math.pow(10,-9)
    }

    return typeCharge
}

let associateValueCoordenate = (valueQ1, valueQ2, valueQ3, valueQ4, valueQ5) => {
    // Coordenadas de las respectivas cargar
    let Q1c1 = document.getElementById('firstvalue-c1').value
    let Q1c2 = document.getElementById('secondvalue-c1').value
    let Q1c3 = document.getElementById('thirdvalue-c1').value
    let typeUnited1 = document.getElementById('selectm-charge-one').value

    let Q2c1 = document.getElementById('firstvalue-c2').value
    let Q2c2 = document.getElementById('secondvalue-c2').value
    let Q2c3 = document.getElementById('thirdvalue-c2').value
    let typeUnited2 =  document.getElementById('selectm-charge-two').value

    let Q3c1 = document.getElementById('firstvalue-c3').value
    let Q3c2 = document.getElementById('secondvalue-c3').value
    let Q3c3 = document.getElementById('thirdvalue-c3').value
    let typeUnited3 =  document.getElementById('selectm-charge-three').value

    let Q4c1 = document.getElementById('firstvalue-c4').value
    let Q4c2 = document.getElementById('secondvalue-c4').value
    let Q4c3 = document.getElementById('thirdvalue-c4').value
    let typeUnited4 =  document.getElementById('selectm-charge-four').value
    
    let Q5c1 = document.getElementById('firstvalue-c5').value
    let Q5c2 = document.getElementById('secondvalue-c5').value
    let Q5c3 = document.getElementById('thirdvalue-c5').value
    let typeUnited5 =  document.getElementById('selectm-charge-five').value

    if (isNaN(Q1c1) || isNaN(Q1c2) || isNaN(Q1c3) || isNaN(Q2c1) || isNaN(Q2c2) || isNaN(Q2c3) || isNaN(Q3c1) || isNaN(Q3c2) || isNaN(Q3c3) || isNaN(Q4c1) || isNaN(Q4c2) || isNaN(Q4c3) || isNaN(Q5c1) || isNaN(Q5c2) || isNaN(Q5c3)) {
    document.getElementById('firstvalue-c1').value = ''
    document.getElementById('secondvalue-c1').value = ''
    document.getElementById('thirdvalue-c1').value = ''

    document.getElementById('firstvalue-c2').value = ''
    document.getElementById('secondvalue-c2').value = ''
    document.getElementById('thirdvalue-c2').value = ''

    document.getElementById('firstvalue-c3').value = ''
    document.getElementById('secondvalue-c3').value = ''
    document.getElementById('thirdvalue-c3').value = ''

    document.getElementById('firstvalue-c4').value = ''
    document.getElementById('secondvalue-c4').value = ''
    document.getElementById('thirdvalue-c4').value = ''

    document.getElementById('firstvalue-c5').value = ''
    document.getElementById('secondvalue-c5').value = ''
    document.getElementById('thirdvalue-c5').value = ''

    alert('Las coordenadas deben tener un valor numérico')
    } else {
        convert(Q1c1,Q1c2,Q1c3,typeUnited1)
    }
}


let convert = (valueCoordenate1, valueCoordenate2, valueCoordenate3, united) => {
    let values = []
    let convertedValues = []

    if(united == 'm'){
        values.push(valueCoordenate1,valueCoordenate2,valueCoordenate3)
    } else if(united == 'yd'){
        convertedValues.push(valueCoordenate1,valueCoordenate2,valueCoordenate3)

        for(let i=0; i<3; i++){
            
        }
    }
}