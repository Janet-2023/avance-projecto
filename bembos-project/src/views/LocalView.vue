

<script setup>
import { RouterLink } from 'vue-router';
import seccionpreguntas from '../components/SeccionPreguntas.vue'
 
</script>


<template>


	<div>
		<div class="max-container">
			<div class="pagina-main">
            <div class="pagina-title">
               <h1>Locales Bembos: Hamburguesas a la Parrilla Cerca de ti</h1>
            </div>
            <div class="pagina-content">
               <div class="content">                      
                  <div class="seccion-lima">
                     <div class="seccion-title">
                           <RouterLink to="/bembolima"><h2>Hamburguesas en Lima</h2></RouterLink>
                     </div>                     
                        <div>
                        <div class="seccion-content-main">
                              <RouterLink to="/ate"><h3 class="seccion-content-title">Ate</h3></RouterLink>
                           <ul>
                              <RouterLink to="/sedeate"><li><a href="">Plaza Vea Ate</a></li></RouterLink>
                              <RouterLink to="/sclara"><li><a href="">Santa Clara</a></li></RouterLink>   
                              <RouterLink to="/splazapuruchuco"><li><a href="">Real Plaza Puruchuco</a></li></RouterLink>   
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/cercado"><h3 class="seccion-content-title">Cercado de Lima</h3></RouterLink>                         
                           <ul>
                              <li><a href="">Jirón de la Unión</a></li>
                              <li><a href="">Centro Cívico</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/chorrillos"><h3 class="seccion-content-title">Chorrillos</h3></RouterLink>
                           <ul>
                              <li><a href="">Real Plaza Chorrillos Venturosa</a></li>
                              <li><a href="">Mega Plaza Chorrillos</a></li>
                              <li><a href="">Plaza Lima Sur</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/comas"><h3 class="seccion-content-title">Comas</h3></RouterLink>
                           <ul>
                              <li><a href="">Mallplaza Comas</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/independencia"><h3 class="seccion-content-title">Independencia</h3></RouterLink>
                           
                           <li><a href="">Mega Plaza</a></li>
                           <li><a href="">Plaza Norte In Line (1er piso)</a></li>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/jmaria"><h3 class="seccion-content-title">Jesus Maria</h3></RouterLink>                           
                           <ul>
                              <li><a href="">Jesus Maria</a></li>
                              <li><a href="">Real Plaza Salaverry</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/lmolina"><h3 class="seccion-content-title">La Molina</h3></RouterLink>                          
                           <ul>
                              <li><a href="">La Fontana</a></li>
                              <li><a href="">Wong Camacho</a></li>
                              <li><a href="">DK La Molina</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/lvictoria"><h3 class="seccion-content-title">La Victoria</h3></RouterLink>                                                      
                           <li><a href="">Metro Canada In Line</a></li>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/magdalena"><h3 class="seccion-content-title">Magdalena del Mar</h3></RouterLink>                                                      
                           <ul>
                              <li><a href="">Magdalena</a></li>
                              <li><a href="">Dk Magdalena</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/miraflores"><h3 class="seccion-content-title">Miraflores</h3></RouterLink>                           
                           <ul>
                              <li><a href="">Aurora</a></li>
                              <li><a href="">Larco I</a></li>
                              <li><a href="">Larco II</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/plibre"><h3 class="seccion-content-title">Pueblo Libre</h3></RouterLink>                 
                           <ul>
                              <li><a href="">Sucre</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/phermosa"><h3 class="seccion-content-title">Punta Hermosa </h3></RouterLink>                          
                           <ul>
                              <li><a href="">Movil 2 Punta Hermosa</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/sborja"><h3 class="seccion-content-title">San Borja</h3></RouterLink>                          
                           <ul>
                              <li><a href="">Real Plaza Primavera</a></li>
                              <li><a href="">Aviación</a></li>
                              <li><a href="">Rambla Food Court</a></li>
                              <li><a href="">Brescia Food Court</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/sisidro"><h3 class="seccion-content-title">San Isidro</h3></RouterLink>                          
                           <ul>
                              <li><a href="">Dos de Mayo</a></li>
                              <li><a href="">Javier Prado</a></li>
                              <li><a href="">Ovalo Gutierrez</a></li>
                              <li><a href="">Saga Begonias</a></li>
                              <li><a href="">Camino Real</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/sjmiraflores"><h3 class="seccion-content-title">San Juan de Miraflores</h3></RouterLink>                           
                           <ul>
                              <li><a href="">Mall del Sur</a></li>
                              <li><a href="">San Juan Atocongo</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/smporres"><h3 class="seccion-content-title">San Martin de Porres</h3></RouterLink>                           
                           <ul>
                              <li><a href="">Plaza Lima Norte FC </a></li>
                              <li><a href="">Real Plaza Pro</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/smiguel"><h3 class="seccion-content-title">San Miguel</h3></RouterLink>                           
                           <ul>
                              <li><a href="">Plaza San Miguel </a></li>
                              <li><a href="">La mar</a></li>
                              <li><a href="">Plaza San Miguel FC</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/sanita"><h3 class="seccion-content-title">Santa Anita</h3></RouterLink>                           
                           <ul><li><a href="">Santa Anita</a></li></ul>
                        </div>
                        <div class="seccion-content-main">
                           <h3 class="seccion-content-title">Surco</h3>
                           <ul>
                              <li><a href="">Caminos del Inca</a></li>
                              <li><a href="">Monterrico</a></li>
                              <li><a href="">Las Gardenias</a></li>
                              <li><a href="">Jockey Plaza</a></li>
                              <li><a href="">Ovalo Higuereta</a></li>
                              <li><a href="">Intercorp</a></li>
                           </ul>
                        </div>
                        <div class="seccion-content-main">
                           <RouterLink to="/surquillo"><h3 class="seccion-content-title">Surquillo</h3></RouterLink>                           
                           <ul><li><a href="">Dark Kitchen Surquillo</a></li></ul>
                        </div>
                        </div>
                  </div>
                  <div class="seccion-provincia">
                        <div>
                           <div class="departamento">
                              <div class="seccion-title" >
                                 <RouterLink to="bemboarequipa"><h2>Hamburguesas en Arequipa</h2></RouterLink>

                              </div>
                              <ul>
                                 <RouterLink to="ccoloradoarequipa"><li><a href="">Cerro Colorado Arequipa</a></li></RouterLink>
                                 <RouterLink to="rplazaarequipa"><li><a href="">Arequipa Real Plaza</a></li></RouterLink>
                                 <RouterLink to="mallarequipa"><li><a href="">Arequipa Mall Aventura</a></li></RouterLink>                                 
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Callao</h2></div>
                              <ul>
                                 <li><a href="">Plaza Vea Callao</a></li>
                                 <li><a href="">Bellavista</a></li>
                                 <li><a href="">Minka</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Chiclayo</h2></div>
                              <ul>
                                 <li><a href="">Chiclayo Real Plaza</a></li>
                                 <li><a href="">Mall Aventura Chiclayo</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Cusco</h2></div>
                              <ul>
                                 <li><a href="">Real Plaza Cusco</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Huancayo</h2></div>
                              <ul>
                                 <li><a href="">Huancayo</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Huanuco</h2></div>
                              <ul>
                                 <li><a href="">Real Plaza Huanuco</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Ica</h2></div>
                              <ul>
                                 <li><a href="">El Quinde Ica</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Juliaca</h2></div>
                              <ul>
                                 <li><a href="">Real Plaza Juliaca</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Pucallpa</h2></div>
                              <ul>
                                 <li><a href="">Real Plaza Pucallpa</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Puno</h2></div>
                              <ul>
                                 <li><a href="">Plaza Vea - Puno</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Tacna</h2></div>
                              <ul>
                                 <li><a href="">Plaza Vea Tacna</a></li>
                              </ul>
                           </div>
                           <div class="departamento">
                              <div class="seccion-title" ><h2>Hamburguesas en Trujillo</h2></div>
                              <ul>
                                 <li><a href="">Real Plaza Trujillo</a></li>
                                 <li><a href="">Trujillo Mall Plaza</a></li>
                              </ul>
                           </div>
                        </div>
                  </div>
               </div>
               <div class="seccion-preguntas">
                  <seccionpreguntas/>
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
   box-shadow: 1px 0px 5px grey;
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

.pagina-main .pagina-title{
    border-radius: 9px 9px 0 0;
    padding: 10px 15px;
    text-align: center;
    font-family: din1451,sans-serif;

}

.pagina-content .content .seccion-lima .seccion-title{

    background: #21388b;
    padding: 0.03px 10px;
    font-family: Kulturista,sans-serif;
    text-align: center;
    border-radius: 9px 9px 0 0;
   
}
.pagina-content .content .seccion-provincia .seccion-title{
   padding: 0.03px 10px;

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


.pagina-main .pagina-content .content .seccion-lima h2 {
color: #fff;
text-decoration: none;

}

.pagina-main .pagina-content .content .seccion-provincia h2 {
color: #fff;
text-decoration: none;

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