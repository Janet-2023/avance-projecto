<script setup>


import { RouterLink, RouterView } from 'vue-router';

import axios from 'axios';

// export default{
//    data(){
//       return{
//          addClass:false,
//          addClass2:false,
//          addClass3:false
//       },
//       methodos:{
//          toggleClass(){
//             this.addClass = !this.addClass;
//             },
//          toggleClass2(){
//          this.addClass2 = !this.addClass2; 

//          },
//          toggleClass3(){
//             this.addClass3 = !this.addClass3;
//       }

//       }
//    }
// }
</script>

<template>
   <div class="seccion-preguntas">
      <div class="max-container">
         <div class="pagina-preguntas">
            <div class="section-title">
               <h2>Preguntas frecuentes</h2>
            </div>
            <div class="lista-preguntas">
               <div class="active-item-preguntas">
                  <div class="item-lista-preguntas" id="item-lista-pregunta1-id">
                     <div>
                        <h2>¿En qué ciudades hay locales físicos para compras de hamburguesas?</h2>
                     </div>
                     <div class="iconn-question-up">
                     <img src="./images/icon-question.png" alt="">
                     </div>                                                            
                  </div>
                  <div class="item-lista-parrafo" id="item-lista-parrafo1-id">
                     <p>Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En lima contamos con locales hamburguesas en ate, chorrillos, cercado de lima, comas, independencia, jesus maría, la molina, la victoria, magdalena del mar, miraflores, pueblo libre, san borja, san isidro, miraflores, san martin de porres, san miguel, santa anita, surco, surquillo.</p>
                  </div>
               </div>
               <div class="">
                  <div class="item-lista-preguntas" id="item-lista-pregunta2-id">
                     <div>
                        <h2>¿Qué horario tienen los locales de Bembos?</h2>
                     </div>
                     <div class="iconn-question-up">
                        <img src="./images/icon-question.png" alt="">
                     </div>                                                            
                  </div>
                  <div class="item-lista-parrafo" id="item-lista-parrafo2-id">
                     <p>El horario de atención es de 11am  a 10:30pm. Pueden haber ciertas variaciones por local.</p>
                     <p>Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En lima contamos con locales hamburguesas en ate, chorrillos, cercado de lima, comas, independencia, jesus maría, la molina, la victoria, magdalena del mar, miraflores, pueblo libre, san borja, san isidro, miraflores, san martin de porres, san miguel, santa anita, surco, surquillo.</p>
                  </div>
               </div>
               <div>
                  <div @click="" class="item-lista-preguntas" id="item-lista-pregunta3-id">
                     <div>
                        <h2>¿Cuál es el telefono de contacto?</h2>
                     </div>
                     <div class="iconn-question-up">
                        <img src="./images/icon-question.png" alt="">
                     </div>                                                            
                  </div>
                  <div class="item-lista-parrafo" id="item-lista-parrafo3-id">
                     <p>El teléfono de Delivery a través es el 01419-1919 para Lima.</p>
                     <p>Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En lima contamos con locales hamburguesas en ate, chorrillos, cercado de lima, comas, independencia, jesus maría, la molina, la victoria, magdalena del mar, miraflores, pueblo libre, san borja, san isidro, miraflores, san martin de porres, san miguel, santa anita, surco, surquillo.</p>
                  </div>
               </div>
               <div>
                  <div class="item-lista-preguntas" id="item-lista-pregunta4-id">
                     <div>
                        <h2>¿Puedo obtener puntos por compras en los locales físicos?</h2>
                     </div>
                     <div class="iconn-question-up">
                        <img src="./images/icon-question.png" alt="">
                     </div>                                                            
                  </div>
                  <div class="item-lista-parrafo" id="item-lista-parrafo4-id">
                     <p>Los puntos solo pueden obtenerse por las compras realizadas desde el canal de Web y la App de Bembos</p>
                     <p>Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En lima contamos con locales hamburguesas en ate, chorrillos, cercado de lima, comas, independencia, jesus maría, la molina, la victoria, magdalena del mar, miraflores, pueblo libre, san borja, san isidro, miraflores, san martin de porres, san miguel, santa anita, surco, surquillo.</p>
                  </div>  
               </div>                               
            </div>                                                                    
        </div> 
      </div>   
   </div> 



</template>

<style>

.max-container {
    max-width: 1134px;
    width: 100%;
    margin: auto;
}

.pagina-main {
    width: 100%;
    background: #fff;
    border-radius: 15px;
    margin: 20px auto;
    padding: 0 20px 20px;
}

.pagina-main .pagina-title h1 {
    color: #ffb500;
    font-size: 30px;
    font-weight: 400;
}

.pagina-main .pagina-title {
    border-radius: 9px 9px 0 0;
    padding: 10px 15px;
    background: #21388b;
    text-align: center;
    font-family: din1451,sans-serif;
}

.pagina-main .pagina-content .content{
    max-width: 914px;
    margin: 40px auto;
    padding: 0 10px 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
.seccion-content-main .seccion-content-title {
    background: #ffb500;
    margin: 10px auto;
    padding: 15px 10px;
    border-radius: 9px;
    text-align: left;
    color: #21388b;
    font-weight: 700;
    cursor: pointer;
    font-size: 15px;

}
.seccion-content-main li, .departamento li {
    list-style: none;
    padding: 0;
    margin: 20px 0;

}

.pagina-main .pagina-content .content .seccion-lima .seccion-provincia{
    width: 47%;
    font-family: Kulturista;

}
.departamento{
    margin-bottom: 40px;

}
.seccion-lima .seccion-title, .departamento .seccion-title {
    background: #21388b;
    padding: 15px 10px;
    font-family: Kulturista,sans-serif;
    text-align: center;
    border-radius: 9px 9px 0 0;
    color: #fff;
    margin-bottom: 30px;
}

.pagina-preguntas .section-title h2 {
    color: #21388b;
    font-weight: 900;
    padding: 10px 15px;
    font-size: 30px;
    font-family: din1451,sans-serif;
    text-align: center;
    text-transform: uppercase;
}

.pagina-preguntas{
    background: #fff;
    border-radius: 15px;
    padding: 20px 10px;
    font-weight: 300;
}

.lita-preguntas{
    padding-top: 5px;
    padding-bottom: 5px;
}


.item-lista-preguntas{
    border: 2px solid #dcdcdc;
    color: #193694;
    cursor: pointer;
    text-align: justify;
    font-family: Kulturista,sans-serif;
    font-size: 14px;
    outline: none;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
}
.item-lista-parrafo{
    display: none;
}

.active{
    display: block;
}


</style>