document.addEventListener('DOMContentLoaded', () => {
    let action_calculate = document.getElementById('btn-calcular');
    let coordenate1, coordenate2, coordenate3;

    action_calculate.addEventListener('click', () => {
        coordenate1 = document.getElementById('coordenate-1').value;
        coordenate2 = document.getElementById('coordenate-2').value;
        coordenate3 = document.getElementById('coordenate-3').value;
    });

    action_calculate.addEventListener('click', () => {
        if (isNaN(coordenate1) || isNaN(coordenate2) || isNaN(coordenate3)) {
            document.getElementById('coordenate-1').value = "";
            document.getElementById('coordenate-2').value = "";
            document.getElementById('coordenate-3').value = "";

            alert('Debes ingresar números');
        } else {
            parseFloat(document.getElementById('coordenate-1').value);
            parseFloat(document.getElementById('coordenate-2').value);
            parseFloat(document.getElementById('coordenate-3').value);
            associateValuesCharge();
        }
    });

    let associateValuesCharge = () => {
        // Cargas
        let q1 = parseFloat(document.getElementById('input-charge-one').value);
        let q2 = parseFloat(document.getElementById('input-charge-two').value);
        let q3 = parseFloat(document.getElementById('input-charge-three').value);
        let q4 = parseFloat(document.getElementById('input-charge-four').value);
        let q5 = parseFloat(document.getElementById('input-charge-five').value);

        if (isNaN(q1) || isNaN(q2) || isNaN(q3) || isNaN(q4) || isNaN(q5)) {
            document.getElementById('input-charge-one').value = '';
            document.getElementById('input-charge-two').value = '';
            document.getElementById('input-charge-three').value = '';
            document.getElementById('input-charge-four').value = '';
            document.getElementById('input-charge-five').value = '';

            alert('Las cargas deben tener un valor numérico');
        } else {
            let valueQ1 = q1 * typeCharge(document.getElementById('select-charge-one').value);
            let valueQ2 = q2 * typeCharge(document.getElementById('select-charge-two').value);
            let valueQ3 = q3 * typeCharge(document.getElementById('select-charge-three').value);
            let valueQ4 = q4 * typeCharge(document.getElementById('select-charge-four').value);
            let valueQ5 = q5 * typeCharge(document.getElementById('select-charge-five').value);

            associateValueCoordenate(valueQ1, valueQ2, valueQ3, valueQ4, valueQ5);
        }
    };

    let typeCharge = (value) => {
        let typeCharge = 0;

        if (value == 'mC') {
            typeCharge = 1 * Math.pow(10, -3);
        } else if (value == 'µC') {
            typeCharge = 1 * Math.pow(10, -6);
        } else {
            typeCharge = 1 * Math.pow(10, -9);
        }

        return typeCharge;
    };

    let associateValueCoordenate = (valueQ1, valueQ2, valueQ3, valueQ4, valueQ5) => {
        // Coordenadas de las respectivas cargas
        let Q1c1 = parseFloat(document.getElementById('firstvalue-c1').value);
        let Q1c2 = parseFloat(document.getElementById('secondvalue-c1').value);
        let Q1c3 = parseFloat(document.getElementById('thirdvalue-c1').value);
        let typeUnited1 = document.getElementById('selectm-charge-one').value;

        let Q2c1 = parseFloat(document.getElementById('firstvalue-c2').value);
        let Q2c2 = parseFloat(document.getElementById('secondvalue-c2').value);
        let Q2c3 = parseFloat(document.getElementById('thirdvalue-c2').value);
        let typeUnited2 = document.getElementById('selectm-charge-two').value;

        let Q3c1 = parseFloat(document.getElementById('firstvalue-c3').value);
        let Q3c2 = parseFloat(document.getElementById('secondvalue-c3').value);
        let Q3c3 = parseFloat(document.getElementById('thirdvalue-c3').value);
        let typeUnited3 = document.getElementById('selectm-charge-three').value;

        let Q4c1 = parseFloat(document.getElementById('firstvalue-c4').value);
        let Q4c2 = parseFloat(document.getElementById('secondvalue-c4').value);
        let Q4c3 = parseFloat(document.getElementById('thirdvalue-c4').value);
        let typeUnited4 = document.getElementById('selectm-charge-four').value;

        let Q5c1 = parseFloat(document.getElementById('firstvalue-c5').value);
        let Q5c2 = parseFloat(document.getElementById('secondvalue-c5').value);
        let Q5c3 = parseFloat(document.getElementById('thirdvalue-c5').value);
        let typeUnited5 = document.getElementById('selectm-charge-five').value;

        if (isNaN(Q1c1) || isNaN(Q1c2) || isNaN(Q1c3) ||
            isNaN(Q2c1) || isNaN(Q2c2) || isNaN(Q2c3) ||
            isNaN(Q3c1) || isNaN(Q3c2) || isNaN(Q3c3) ||
            isNaN(Q4c1) || isNaN(Q4c2) || isNaN(Q4c3) ||
            isNaN(Q5c1) || isNaN(Q5c2) || isNaN(Q5c3)) {

            document.getElementById('firstvalue-c1').value = '';
            document.getElementById('secondvalue-c1').value = '';
            document.getElementById('thirdvalue-c1').value = '';

            document.getElementById('firstvalue-c2').value = '';
            document.getElementById('secondvalue-c2').value = '';
            document.getElementById('thirdvalue-c2').value = '';

            document.getElementById('firstvalue-c3').value = '';
            document.getElementById('secondvalue-c3').value = '';
            document.getElementById('thirdvalue-c3').value = '';

            document.getElementById('firstvalue-c4').value = '';
            document.getElementById('secondvalue-c4').value = '';
            document.getElementById('thirdvalue-c4').value = '';

            document.getElementById('firstvalue-c5').value = '';
            document.getElementById('secondvalue-c5').value = '';
            document.getElementById('thirdvalue-c5').value = '';

            alert('Las coordenadas deben tener un valor numérico');
        } else {
            let convertedCoordenatesQ1 = convert(Q1c1, Q1c2, Q1c3, typeUnited1);
            let convertedCoordenatesQ2 = convert(Q2c1, Q2c2, Q2c3, typeUnited2);
            let convertedCoordenatesQ3 = convert(Q3c1, Q3c2, Q3c3, typeUnited3);
            let convertedCoordenatesQ4 = convert(Q4c1, Q4c2, Q4c3, typeUnited4);
            let convertedCoordenatesQ5 = convert(Q5c1, Q5c2, Q5c3, typeUnited5);

            let objectCoordenate = {
                coordenates: {
                    convertedCoordenatesQ1,
                    convertedCoordenatesQ2,
                    convertedCoordenatesQ3,
                    convertedCoordenatesQ4,
                    convertedCoordenatesQ5
                },
                charges: [valueQ1, valueQ2, valueQ3, valueQ4, valueQ5]
            };

            calculateE(objectCoordenate);
        }
    };

    let convert = (valueCoordenate1, valueCoordenate2, valueCoordenate3, united) => {
        let convertedValues = [];

        if (united == 'm') {
            convertedValues.push(valueCoordenate1, valueCoordenate2, valueCoordenate3);
        } else if (united == 'yd') {
            convertedValues.push(
                valueCoordenate1 / 1.09361,
                valueCoordenate2 / 1.09361,
                valueCoordenate3 / 1.09361
            );
        } else {
            convertedValues.push(
                valueCoordenate1 / 39.37008,
                valueCoordenate2 / 39.37008,
                valueCoordenate3 / 39.37008
            );
        }

        return convertedValues.map(val => parseFloat(val));
    };

    let calculateE = (objectCoordenate) => {
        let renderHTML = document.getElementById('result-html');
        let result = [];
        let stepsHTML = '';
    
        for (let i = 0; i < 5; i++) {
            let charge = objectCoordenate.charges[i];
            let coord = objectCoordenate.coordenates[`convertedCoordenatesQ${i + 1}`];
    
            let dx = coordenate1 - coord[0];
            let dy = coordenate2 - coord[1];
            let dz = coordenate3 - coord[2];

            // Cálculo de distancia entre cargas
        let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2));
        let denominator = Math.pow(distance, 3 / 2);

        let numeradorX = charge * dx;
        let numeradorY = charge * dy;
        let numeradorZ = charge * dz;

         // Cálculo del numerador completo (suma de los tres componentes)
         let numeradorCompleto = `${numeradorX} ax + ${numeradorY} ay + ${numeradorZ} az`;

          // Cálculo del resultado intermedio (numerador / denominador)
        let resultadoIntermedio = (numeradorX + numeradorY + numeradorZ) / denominator;

         // Agregamos pasos intermedios aún más detallados
         stepsHTML += `<br> <h4>Carga ${i + 1}</h4>
         <p><strong>Diferencias de coordenadas:</strong> dx: ${dx.toFixed(3)}, dy: ${dy.toFixed(3)}, dz: ${dz.toFixed(3)}</p> <br>
         <p><strong>Distancia (r):</strong> ${distance.toFixed(3)}</p> <br>
         <p><strong>Denominador (r^3/2):</strong> ${denominator.toFixed(3)}</p> <br>
         <p><strong>Numerador en X:</strong> ${numeradorX.toFixed(3)}</p>
         <p><strong>Numerador en Y:</strong> ${numeradorY.toFixed(3)}</p>
         <p><strong>Numerador en Z:</strong> ${numeradorZ.toFixed(3)}</p> <br>
         <p><strong>Numerador Completo:</strong> ${numeradorCompleto}</p> <br>
         <p><strong>Resultado Intermedio:</strong> ${resultadoIntermedio.toFixed(3)}</p> <br>`;

    
            result.push((charge * dx + ' ax') + (charge * dy + ' ay') + (charge * dz + ' az')) / Math.pow((Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)), 3 / 2);
        }
    
        renderHTML.innerHTML = `<h2>RESULTADO:</h2>` + result.map((res, index) => 
            `<div style="margin-bottom: 15px;">
                <strong>Carga ${index + 1}:</strong> 
                <span style="color: #2C3E50;">${res}</span>
             </div>`).join('');

             renderHTML.innerHTML += `<h3>Pasos del Cálculo:</h3>` + stepsHTML;
    };

});